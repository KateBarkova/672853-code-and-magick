'use strict';
(function () {
  var LOAD_TIMEOUT = 3000;
  var ERROR_TIMEOUT = 3000;
  var URL_UPLOAD = 'https://js.dump.academy/code-and-magick';
  var DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var CALLBACK_NAME = 'callback';

  var onXhrError = function (onError) {
    return function () {
      onError('Произошла ошибка соединения');
    };
  };

  var onXhrTimeout = function (onError, xhr) {
    return function () {
      xhr.timeout = LOAD_TIMEOUT;
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };
  };

  var onXhrUpLoad = function (xhr, onLoad, onError) {
    return function () {
      if (xhr.status === 200) {
        onLoad();
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };
  };

  var onLoadError = function () {
    window.backend.onError('Произошла ошибка соединения');
  };

  var removeErrorMessage = function () {
    var errorMessage = document.querySelector('.error-message');
    errorMessage.remove();
  };

  window.callback = function (data) {
    window.wizards = data;
    window.renderWizards(data);
  };

  window.backend = {
    load: function () {
      var loader = document.createElement('script');
      loader.src = DATA_URL + '?callback=' + CALLBACK_NAME;

      loader.addEventListener('error', onLoadError);
      document.body.append(loader);
    },

    upload: function (data, onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', onXhrUpLoad(xhr, onLoad, onError));
      xhr.addEventListener('error', onXhrError(onError));
      xhr.addEventListener('timeout', onXhrTimeout(onError, xhr));

      xhr.open('POST', URL_UPLOAD);
      xhr.send(data);
    },

    onError: function (message) {
      var node = document.createElement('div');
      node.classList.add('error-message');
      node.style.zIndex = '100';
      node.style.margin = '0 auto';
      node.style.textAlign = 'center';
      node.style.backgroundColor = 'red';
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
