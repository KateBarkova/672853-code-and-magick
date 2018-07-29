'use strict';

(function () {

  var WIZARD_NUMBER = 4;

  var dom = window.dom.getElements();
  var similarList = dom.similarList;

  var template = dom.template.content;
  var similarWizardTemplate = template.querySelector('.setup-similar-item');


  //  функция отрисовки волшебника
  var renderWizard = function (wizard) {
    var wizardItem = similarWizardTemplate.cloneNode(true);
    var wizardElement = window.dom.getTemplateElements(wizardItem);

    wizardElement.name.textContent = wizard.name;
    wizardElement.coat.style.fill = wizard.colorCoat;
    wizardElement.eyes.style.fill = wizard.colorEyes;

    return wizardItem;
  };

  //  функция отрисовки всех волшебников
  window.renderWizards = function (wizards) {
    similarList.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarList.appendChild(fragment);
  };

})();
