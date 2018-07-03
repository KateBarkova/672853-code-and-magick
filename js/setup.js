'use strict';

(function () {

  // валидация поля имени персонажа
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

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

  userNameInput.addEventListener('invalid', function () {
    checkUserNameValidity(userNameInput);
  });

  userNameInput.addEventListener('input', function () {
    checkUserNameValidity(userNameInput);
  });

  // Изменение цвета мантии персонажа по нажатию
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

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = setup.querySelector('input[name=coat-color]');
  var inputWizardEyes = setup.querySelector('input[name=eyes-color]');
  var inputFireball = setup.querySelector('input[name=fireball-color]');

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

  setupWizardCoat.addEventListener('click', changeCoatColor);
  setupWizardEyes.addEventListener('click', changeEyesColor);
  setupFireball.addEventListener('click', changeFireballColor);

})();
