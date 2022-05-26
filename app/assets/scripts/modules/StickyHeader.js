import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.events();
  }

  events() {
    window.addEventListener(
      'scroll',
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      'resize',
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  runOnScroll() {
    if (window.scrollY > 60) {
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }

    this.pageSections.forEach((el) => this.calcSection(el));
  }

  calcSection(el) {
    // if you scroll down far enough so you can at least see the very top edge of the secion (if the top edge is in VP)
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      let scrollPercent =
        (el.getBoudingClientRect().y / this.browserHeight) * 100;
    }
  }
}

export default StickyHeader;
