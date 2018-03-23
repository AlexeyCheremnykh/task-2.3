class VideosContainer {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
  }

  initElement() {
    this._$block.tabs();
  }
}

const $videosContainer = $('.js-videos__content');
let id = 0;
$videosContainer.each((index, elem) => {
  const videosContainer = new VideosContainer(elem, id);
  videosContainer.initElement();
  id += 1;
});
