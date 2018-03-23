class Slider {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
    this._$sliderLine = this._$block.children('.js-slider__line');
  }

  initElement() {
    if (this._$block.hasClass('slider_type_not-labeled')) {
      this._$sliderLine
        .slider({
          min: this._$block.data('min'),
          max: this._$block.data('max'),
        })
        .slider('float');
    } else {
      this._$sliderLine
        .slider({
          range: 'min',
          min: this._$block.data('min'),
          max: this._$block.data('max'),
          step: this._$block.data('step'),
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
