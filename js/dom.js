'use strict';

(function () {
  window.dom = {
    getElements: function () {
      return {
        setup: document.querySelector('.setup'),
        form: document.querySelector('.setup-wizard-form'),
        template: document.querySelector('#similar-wizard-template'),
        similarList: document.querySelector('.setup-similar-list'),
        setupSimilat: document.querySelector('.setup-similar')
      };
    },

    getTemplateElements: function (parent) {
      return {
        name: parent.querySelector('.setup-similar-label'),
        coat: parent.querySelector('.wizard-coat'),
        eyes: parent.querySelector('.wizard-eyes')
      };
    },

    getWizardElements: function (parent) {
      return {
        coat: parent.querySelector('.wizard-coat'),
        eyes: parent.querySelector('.wizard-eyes'),
        fireball: parent.querySelector('.setup-fireball-wrap'),
        inputUserName: parent.querySelector('.setup-user-name'),
        inputCoat: parent.querySelector('input[name=coat-color]'),
        inputEyes: parent.querySelector('input[name=eyes-color]'),
        inputFireball: parent.querySelector('input[name=fireball-color]')
      };
    }
  };

})();
