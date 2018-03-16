class Slider {
  constructor(elem, id) {
    this._id = id;
    this._$slider = $(elem);
    this._$sliderLine = $(elem).children('.js-slider__line');
  }

  initElement() {
    if (this._$slider.hasClass('slider_type_not-labeled')) {
      this._$sliderLine
        .slider({
          min: this._$slider.data('min'),
          max: this._$slider.data('max'),
        })
        .slider('float');
    } else {
      this._$sliderLine
        .slider({
          range: 'min',
          min: this._$slider.data('min'),
          max: this._$slider.data('max'),
          step: this._$slider.data('step'),
        })
        .slider('pips', {
          rest: 'label',
        });
    }

    return this;
  }
}

const $slider = $('.js-slider');
let id = 0;
$slider.each((index, elem) => {
  const slider = new Slider(elem, id);
  slider.initElement();
  id += 1;
});
