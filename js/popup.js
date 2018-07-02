'use strict';

(function () {
  // Открытие-закрытие окна

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      var activeElement = document.activeElement;
      if (activeElement.classList.value !== 'setup-user-name') {
        closePopup();
      }
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

  };

  var getStartPosition = function () {
    var START_TOP = 80;
    var START_LEFT = 691;

    var setupDialogElement = document.querySelector('.setup');
    setupDialogElement.style.top = START_TOP + 'px';
    setupDialogElement.style.left = START_LEFT + 'px';
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    getStartPosition();
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

})();
