'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

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
var WizardArray = getWizardArray(WIZARD_NUMBER);

//  функция отрисовки волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
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
renderWizards(WizardArray);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
