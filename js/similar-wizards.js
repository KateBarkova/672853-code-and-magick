'use strict';

(function () {

  var WIZARD_NUMBER = 4;

  var dom = window.dom.getElements();
  var userDialog = dom.setup;

  var similarListElement = dom.similarList;

  var template = dom.template.content;
  var similarWizardTemplate = template.querySelector('.setup-similar-item');


  //  функция отрисовки волшебника
  var renderWizard = function (wizard) {
    var wizardItem = similarWizardTemplate.cloneNode(true);
    var wizardElement = window.dom.getTemplatesElement(wizardItem);

    wizardElement.name.textContent = wizard.name;
    wizardElement.coat.style.fill = wizard.colorCoat;
    wizardElement.eyes.style.fill = wizard.colorEyes;

    return wizardItem;
  };

  //  функция отрисовки всех волшебников
  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

  };

  var onErrorLoad = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  //  отрисовка волшебников
  window.backend.load(renderWizards, onErrorLoad);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

})();
