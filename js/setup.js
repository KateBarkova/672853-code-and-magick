'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

function getDomElements() {
  return {
    setup: document.querySelector('.setup'),
    template: document.querySelector('#similar-wizard-template'),
    similarList: document.querySelector('.setup-similar-list')
  };
}

var dom = getDomElements();
var userDialog = dom.setup;

// userDialog.classList.remove('hidden');

var similarListElement = dom.similarList;

var template = dom.template.content;
var similarWizardTemplate = template.querySelector('.setup-similar-item');

var getRandomArrayElement = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return rand;
};

//  создание одного волшебника (объект)
var createWizard = function () {
  var wizard = {};
  wizard.name = WIZARD_NAMES[getRandomArrayElement(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomArrayElement(WIZARD_SURNAMES)];
  wizard.coatColor = WIZARD_COAT[getRandomArrayElement(WIZARD_COAT)];
  wizard.eyesColor = WIZARD_EYES[getRandomArrayElement(WIZARD_EYES)];

  return wizard;
};

//  функция создания массива волшебников
var getWizardArray = function (wizardNumber) {
  var wizards = [];
  for (var i = 0; i < wizardNumber; i++) {
    wizards[i] = createWizard();
  }

  return wizards;
};

//  создание массива волшебников
var wizardArray = getWizardArray(WIZARD_NUMBER);

function getTemplatesElement(parent) {
  return {
    name: parent.querySelector('.setup-similar-label'),
    coat: parent.querySelector('.wizard-coat'),
    eyes: parent.querySelector('.wizard-eyes')
  };
}

//  функция отрисовки волшебника
var renderWizard = function (wizard) {
  var wizardItem = similarWizardTemplate.cloneNode(true);
  var wizardElement = getTemplatesElement(wizardItem);

  wizardElement.name.textContent = wizard.name;
  wizardElement.coat.style.fill = wizard.coatColor;
  wizardElement.eyes.style.fill = wizard.eyesColor;

  return wizardItem;
};

//  функция отрисовки всех волшебников
var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

};

//  отрисовка волшебников
renderWizards(wizardArray);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

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

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

// валидация поля имени персонажа

var userNameInput = setup.querySelector('.setup-user-name');

var userNameValidity = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
};


userNameInput.addEventListener('invalid', function () {
  userNameValidity();
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
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
var InputWizardCoat = setup.querySelector('input[name=coat-color]');
var InputWizardEyes = setup.querySelector('input[name=eyes-color]');
var InputFireball = setup.querySelector('input[name=fireball-color]');

var changeCoatColor = function () {
  var coatColor = COAT_COLOR[getRandomArrayElement(COAT_COLOR)];
  setupWizardCoat.style.fill = coatColor;
  InputWizardCoat.value = coatColor;
};
var changeEyesColor = function () {
  var eyesColor = EYES_COLOR[getRandomArrayElement(EYES_COLOR)];
  setupWizardEyes.style.fill = eyesColor;
  InputWizardEyes.value = eyesColor;
};
var changeFireballColor = function () {
  var fireballColor = FIREBALL_COLOR[getRandomArrayElement(FIREBALL_COLOR)];
  setupFireball.style.background = fireballColor;
  InputFireball.value = fireballColor;
};

setupWizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

setupWizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

setupFireball.addEventListener('click', function () {
  changeFireballColor();
});
