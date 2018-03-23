/* global google */

class Map {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
  }

  initElement() {
    this._$block
      .gmap3({
        address: this._$block.data('address'),
        zoom: 14,
      })
      .marker({
        address: this._$block.data('address'),
        icon: {
          url: 'img/map-marker-icon.png',
          anchor: new google.maps.Point(20, 56),
        },
        draggable: true,
      });

    return this;
  }
}

const $map = $('.js-location__map');
let id = 0;
$map.each((index, elem) => {
  const map = new Map(elem, id);
  map.initElement();
  id += 1;
});
