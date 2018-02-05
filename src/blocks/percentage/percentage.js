class Percentage {
  constructor(elem, id) {
    this._id = id;
    this._$percentage = $(elem);
    this._$value = $(elem).children('.js-percentage__value');
  }

  initElement() {
    this._$percentage.circleProgress({
      value: parseInt(this._$value.text(), 10) / 100,
      size: 95,
      fill: '#e75735',
      thickness: 6,
      emptyFill: 'rgba(255, 255, 255, 1)',
      startAngle: -Math.PI / 2,
      insertMode: 'prepend',
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
