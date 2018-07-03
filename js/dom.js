'use strict';

(function () {
  window.dom = {
    getElements: function () {
      return {
        setup: document.querySelector('.setup'),
        template: document.querySelector('#similar-wizard-template'),
        similarList: document.querySelector('.setup-similar-list')
      };
    },

    getTemplatesElement: function (parent) {
      return {
        name: parent.querySelector('.setup-similar-label'),
        coat: parent.querySelector('.wizard-coat'),
        eyes: parent.querySelector('.wizard-eyes')
      };
    }
  };

})();
