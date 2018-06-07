'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TITLE_GAP = 80;
var BAR_WIDTH = 40;
var BAR_GAP = 40;
var CHART_HEIGHT = 150;
var bottomCloudPosition = CLOUD_Y + CLOUD_HEIGHT;
var titlePosition = CLOUD_X + GAP + TITLE_GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, baseline, color) {
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, x, y, a, b, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, a, b);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var randomColor = 'hsl(240, ' + Math.floor(Math.random() * 80 + 20) + '%, 50%)';
  return randomColor;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  renderText(ctx, 'Ура вы победили!', titlePosition, FONT_GAP, 'hanging', '#000');
  renderText(ctx, 'Список результатов:', titlePosition, FONT_GAP * 2, 'hanging', '#000');

  var maxTime = getMaxElement(times) || 1;

  for (var i = 0; i < players.length; i++) {
    var barHeight = (times[i] * CHART_HEIGHT) / maxTime;
    var barPosition = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;

    renderText(ctx, players[i], barPosition, bottomCloudPosition - FONT_GAP, 'bottom', '#000');
    renderText(ctx, Math.floor(times[i]), barPosition, bottomCloudPosition - barHeight - FONT_GAP * 2.5, 'bottom', '#000');

    var colorBar = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();

    renderBar(ctx, barPosition, CLOUD_HEIGHT - BAR_GAP - barHeight, BAR_WIDTH, barHeight, colorBar);
  }
};

