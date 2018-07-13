'use strict';

(function () {
  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var dom = window.dom.getElements();
  var setup = dom.setup;
  var form = dom.form;

  var wizard = window.dom.getWizardElements(setup);
  var inputUserName = wizard.inputUserName;
  var setupWizardCoat = wizard.coat;
  var setupWizardEyes = wizard.eyes;
  var setupFireball = wizard.fireball;
  var inputWizardCoat = wizard.inputCoat;
  var inputWizardEyes = wizard.inputEyes;
  var inputFireball = wizard.inputFireball;

  var checkUserNameValidity = function (element) {
    if (element.validity.tooShort) {
      element.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (element.validity.tooLong) {
      element.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (element.validity.valueMissing) {
      element.setCustomValidity('Обязательное поле');
    } else {
      element.setCustomValidity('');
    }
  };

  var onUserNameInvalid = function () {
    checkUserNameValidity(inputUserName);
  };

  var changeCoatColor = function () {
    var coatColor = COAT_COLOR[window.utils.getRandomArrayElement(COAT_COLOR)];
    setupWizardCoat.style.fill = coatColor;
    inputWizardCoat.value = coatColor;
  };
  var changeEyesColor = function () {
    var eyesColor = EYES_COLOR[window.utils.getRandomArrayElement(EYES_COLOR)];
    setupWizardEyes.style.fill = eyesColor;
    inputWizardEyes.value = eyesColor;
  };
  var changeFireballColor = function () {
    var fireballColor = FIREBALL_COLOR[window.utils.getRandomArrayElement(FIREBALL_COLOR)];
    setupFireball.style.background = fireballColor;
    inputFireball.value = fireballColor;
  };

  var onCoatClick = function () {
    changeCoatColor();
  };
  var onEyesClick = function () {
    changeEyesColor();
  };
  var onFireballClick = function () {
    changeFireballColor();
  };

  var onSuccessLoad = function () {
    setup.classList.add('hidden');
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    window.backend.upload(new FormData(form), onSuccessLoad, window.backend.onError);
  };

  window.setup = {
    validate: function () {
      inputUserName.addEventListener('invalid', onUserNameInvalid);
      inputUserName.addEventListener('input', onUserNameInvalid);
      setupWizardCoat.addEventListener('click', onCoatClick);
      setupWizardEyes.addEventListener('click', onEyesClick);
      setupFireball.addEventListener('click', onFireballClick);
      form.addEventListener('submit', onFormSubmit);
    },
    stopValidate: function () {
      inputUserName.removeEventListener('invalid', onUserNameInvalid);
      inputUserName.removeEventListener('input', onUserNameInvalid);
      setupWizardCoat.removeEventListener('click', onCoatClick);
      setupWizardEyes.removeEventListener('click', onEyesClick);
      setupFireball.removeEventListener('click', onFireballClick);
      form.removeEventListener('submit', onFormSubmit);
    }
  };

})();
