'use strict';

(function () {

  window.utils = {
    getRandomArrayElement: function (array) {
      var rand = Math.floor(Math.random() * array.length);
      return rand;
    }
  };

})();
