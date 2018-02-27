const constants = {
  SIZE_THICKNESS_RATIO: 19,
};

class Percentage {
  constructor(elem, id) {
    this._id = id;
    this._$percentage = $(elem);
    this._$value = $(elem).children('.js-percentage__value');
  }

  initElement() {
    const percentageValue = parseInt(this._$value.text(), 10) / 100;
    const percentageSize = parseInt(this._$percentage.css('height'), 10);
    const percentageThickness = percentageSize / constants.SIZE_THICKNESS_RATIO;

    this._$percentage.circleProgress({
      value: percentageValue,
      size: percentageSize,
      fill: '#e75735',
      thickness: percentageThickness,
      emptyFill: '#ffffff',
      startAngle: -Math.PI / 2,
    });

    return this;
  }
}

const $percentage = $('.js-percentage');
let id = 0;
$percentage.each((index, elem) => {
  const percentage = new Percentage(elem, id);
  percentage.initElement();
  id += 1;
});
