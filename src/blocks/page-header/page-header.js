class PageHeader {
  constructor(elem, id) {
    this._id = id;
    this._$header = $(elem);
    this._$menuIcon = $(elem).find('.js-page-header__menu-icon');
    this._$nav = $(elem).find('.js-page-header__nav');
  }

  initEventListeners() {
    const self = this;

    const hideNav = function hideSiteNavigationInMenu(mediaQuery) {
      if (mediaQuery.matches) {
        self._$nav.addClass('page-header__nav_closed');
      }
    };

    const showNav = function showSiteNavigation(mediaQuery) {
      if (mediaQuery.matches) {
        self._$nav.removeClass('page-header__nav_closed page-header__nav_open');
      }
    };

    const hideNavMedia = window.matchMedia('(max-width: 765px)');
    hideNavMedia.addListener(hideNav);

    const showNavMedia = window.matchMedia('(min-width: 765px)');
    showNavMedia.addListener(showNav);

    const toggleNav = function showOrHideSiteNavigation() {
      if (self._$nav.hasClass('page-header__nav_closed')) {
        self._$nav.removeClass('page-header__nav_closed').addClass('page-header__nav_open');
      } else {
        self._$nav.removeClass('page-header__nav_open').addClass('page-header__nav_closed');
      }
    };

    this._$menuIcon.on('click', toggleNav);
  }
}

const $header = $('.js-page-header');
let id = 0;
$header.each((index, elem) => {
  const header = new PageHeader(elem, id);
  header.initEventListeners();
  id += 1;
});
