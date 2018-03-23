class SpinnerInput {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
  }

  initElement() {
    this._$block.spinner({
      min: 0,
    });
  }
}

const $spinnerInput = $('.js-spinner__input');
let id = 0;
$spinnerInput.each((index, elem) => {
  const spinnerInput = new SpinnerInput(elem, id);
  spinnerInput.initElement();
  id += 1;
});
