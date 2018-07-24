// 'use strict';
// (function () {
//   var coatColor;
//   var eyesColor;
//   var wizards = window.wizards;

//   var getRank = function (wizard) {
//     var rank = 0;

//     if (wizard.colorCoat === coatColor) {
//       rank += 2;
//     }
//     if (wizard.colorEyes === eyesColor) {
//       rank += 1;
//     }

//     return rank;
//   }

//   var namesComparator = function (left, right) {
//     if (left > right) {
//       return 1;
//     } else if (left < right) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }

//  updateWizards = function () {
//     window.renderWizards(window.wizards.sort(function (left, right) {
//       var rankDiff = getRank(right) - getRank(left);
//       if (rankDiff === 0) {
//         rankDiff = namesComparator(left.name, right.name);
//       }
//       return rankDiff;
//     }));
//   }

//   var changeCoatColor = function () {
//     var coatColor = COAT_COLOR[window.utils.getRandomArrayElement(COAT_COLOR)];
//     setupWizardCoat.style.fill = coatColor;
//     inputWizardCoat.value = coatColor;
//     return coatColor;
//   };
//   var changeEyesColor = function () {
//     var eyesColor = EYES_COLOR[window.utils.getRandomArrayElement(EYES_COLOR)];
//     setupWizardEyes.style.fill = eyesColor;
//     inputWizardEyes.value = eyesColor;
//     return eyesColor;
//   };
//   var changeFireballColor = function () {
//     var fireballColor = FIREBALL_COLOR[window.utils.getRandomArrayElement(FIREBALL_COLOR)];
//     setupFireball.style.background = fireballColor;
//     inputFireball.value = fireballColor;

//   var onCoatClick = function () {
//     coatColor = changeCoatColor();
//     window.updateWizards();
//   };
//   var onEyesClick = function () {
//     eyesColor = changeEyesColor();
//     updateWizards();
//   };
//   var onFireballClick = function () {
//     changeFireballColor();
//   };
//   };
// })();
