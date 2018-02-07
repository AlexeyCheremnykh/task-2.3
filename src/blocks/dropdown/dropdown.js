class Dropdown {
  constructor(elem, id) {
    this._id = id;
    this._$dropdown = $(elem);
  }

  initElement() {
    if (this._$dropdown.hasClass('js-dropdown-multiple')) {
      this._$dropdown.select2({
        multiple: true,
      });
      this._$dropdown.val('').change();
    } else {
      this._$dropdown.select2({
        placeholder: 'Choose An Option',
        minimumResultsForSearch: -1,
      });
    }

    return this;
  }
}

const $dropdown = $('.js-dropdown');
let id = 0;
$dropdown.each((index, elem) => {
  const dropdown = new Dropdown(elem, id);
  dropdown.initElement();
  id += 1;
});
