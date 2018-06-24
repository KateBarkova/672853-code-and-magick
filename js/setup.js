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

userDialog.classList.remove('hidden');

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
