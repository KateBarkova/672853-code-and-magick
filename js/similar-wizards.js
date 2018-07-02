'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NUMBER = 4;


  var dom = window.dom.getElements();
  var userDialog = dom.setup;

  var similarListElement = dom.similarList;

  var template = dom.template.content;
  var similarWizardTemplate = template.querySelector('.setup-similar-item');

  //  создание одного волшебника (объект)
  var createWizard = function () {
    var wizard = {};
    wizard.name = WIZARD_NAMES[window.utils.getRandomArrayElement(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[window.utils.getRandomArrayElement(WIZARD_SURNAMES)];
    wizard.coatColor = WIZARD_COAT[window.utils.getRandomArrayElement(WIZARD_COAT)];
    wizard.eyesColor = WIZARD_EYES[window.utils.getRandomArrayElement(WIZARD_EYES)];

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

  //  функция отрисовки волшебника
  var renderWizard = function (wizard) {
    var wizardItem = similarWizardTemplate.cloneNode(true);
    var wizardElement = window.dom.getTemplatesElement(wizardItem);

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

})();
