'use strict';

(function () {
  // Открытие-закрытие окна
  var START_TOP = 80;
  var START_LEFT = 691;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSimilar = setup.querySelector('.setup-similar');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      var activeElement = document.activeElement;
      if (activeElement.classList.value !== 'setup-user-name') {
        closePopup();
      }
    }
  };

  var onCloseButtonEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  };

  var onSetupOpenClick = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  };

  var getStartPosition = function () {
    setup.style.top = START_TOP + 'px';
    setup.style.left = START_LEFT + 'px';
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', closePopup);
    setupClose.removeEventListener('keydown', onCloseButtonEnterPress);
    setupOpen.addEventListener('click', openPopup);
    setupOpen.addEventListener('keydown', onSetupOpenClick);
    window.dialog.removeHandler();
    window.setup.stopValidate();
    getStartPosition();
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    window.setup.validate();
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onCloseButtonEnterPress);
    setupOpen.removeEventListener('click', openPopup);
    setupOpen.removeEventListener('keydown', onSetupOpenClick);
    window.dialog.handler();
    window.backend.load();
    setupSimilar.classList.remove('hidden');
  };

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onSetupOpenClick);

})();
