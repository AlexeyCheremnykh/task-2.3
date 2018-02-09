class SpinnerInput {
  constructor(elem, id) {
    this._id = id;
    this._$spinnerInput = $(elem);
  }

  initElement() {
    this._$spinnerInput.spinner({
      min: 0,
    });
  }
}

const $spinnerInput = $('.spinner__input');
let id = 0;
$spinnerInput.each((index, elem) => {
  const spinnerInput = new SpinnerInput(elem, id);
  spinnerInput.initElement();
  id += 1;
});
