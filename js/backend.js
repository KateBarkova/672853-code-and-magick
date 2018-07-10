'use strict';

(function () {
  var LOAD_TIMEOUT = 3000;
  var ERROR_TIMEOUT = 3000;
  var URLLoad = 'https://js.dump.academy/code-and-magick/data';
  var URLUpload = 'https://js.dump.academy/code-and-magick';

  function onXhrLoad(xhr, onLoad, onError) {
    return function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };
  }

  function onXhrError(onError) {
    return function () {
      onError('Произошла ошибка соединения');
    };
  }

  function onXhrTimeout(onError, xhr) {
    return function () {
      xhr.timeout = LOAD_TIMEOUT;
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };
  }

  function onXhrUpLoad(xhr, onLoad, onError) {
    return function () {
      if (xhr.status === 200) {
        onLoad();
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };
  }

  function removeErrorMessage() {
    var errorMessage = document.querySelector('.error-message');
    errorMessage.remove();
  }

  window.backend = {
    load: function (onLoad, onError) {

      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', onXhrLoad(xhr, onLoad, onError));
      xhr.addEventListener('error', onXhrError(onError));
      xhr.addEventListener('timeout', onXhrTimeout(onError, xhr));

      xhr.open('GET', URLLoad);
      xhr.send();
    },

    upload: function (data, onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', onXhrUpLoad(xhr, onLoad, onError));
      xhr.addEventListener('error', onXhrError(onError));
      xhr.addEventListener('timeout', onXhrTimeout(onError, xhr));

      xhr.open('POST', URLUpload);
      xhr.send(data);
    },

    onError: function (message) {
      var node = document.createElement('div');
      node.classList.add('error-message');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = message;
      document.body.insertAdjacentElement('afterbegin', node);

      if (message) {
        setTimeout(removeErrorMessage, ERROR_TIMEOUT);
      }
    }
  };

})();
