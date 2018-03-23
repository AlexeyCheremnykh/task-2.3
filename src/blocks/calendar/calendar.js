class Calendar {
  constructor(elem, id) {
    this._id = id;
    this._selectedDate = (new Date()).getDate();
    this._$block = $(elem);
    this._$datepicker = this._$block.children('.js-calendar__datepicker');
    this._$day = this._$block.children('.js-calendar__day');
    this._$todayBtn = this._$block.children('.js-calendar__today');
  }

  initElement() {
    this._$datepicker.datepicker({
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      firstDay: 1,
      showOtherMonths: true,
      onSelect: () => {
        this._selectedDate = this._$datepicker.datepicker('getDate');
        this._$day.text($.datepicker.formatDate('d', this._selectedDate));
      },
    });

    this._$day.text(this._selectedDate);
    return this;
  }

  initEventListeners() {
    const self = this;

    function setTodaysDate() {
      self._$datepicker.datepicker('setDate', new Date());
      self._$day.text($.datepicker.formatDate('d', new Date()));
    }

    this._$todayBtn.on(`click.calendar:${this._id}.today`, setTodaysDate);
    return this;
  }
}

const $calendar = $('.js-calendar');
let id = 0;
$calendar.each((index, elem) => {
  const calendar = new Calendar(elem, id);
  calendar.initElement().initEventListeners();
  id += 1;
});
