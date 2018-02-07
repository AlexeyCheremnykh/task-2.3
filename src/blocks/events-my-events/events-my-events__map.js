class EventsMap {
  constructor(elem, id) {
    this._id = id;
    this._$location = $(elem).children('.events-my-events__location');
    this._$toggle = $(elem).children('.events-my-events__map-toggle');
  }

  initEventListeners() {
    const self = this;

    const isEnabled = function checkIfToggleIsEnabled($toggle) {
      const $checkedCheckbox = $toggle.children('.toggle__auxiliary-checkbox:checked');
      return $checkedCheckbox.length !== 0;
    };

    const toggleMap = function hideOrShowMyEventsMap() {
      if (isEnabled(self._$toggle)) {
        self._$location.slideDown(250);
      } else {
        self._$location.slideUp(250);
      }
    };

    const $auxiliaryCheckBox = this._$toggle.children('.toggle__auxiliary-checkbox');
    $auxiliaryCheckBox.on(`change.eventsMap:${this._id}.toggle.checkbox`, toggleMap);
    return this;
  }
}

const $eventsMap = $('.events-my-events__map');
let id = 0;
$eventsMap.each((index, elem) => {
  const eventsMap = new EventsMap(elem, id);
  id += 1;
  eventsMap.initEventListeners();
});
