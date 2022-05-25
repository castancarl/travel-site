/* 
-----------------------------------FINALL BEFORE MAKING IT RECYCABLE
*/

import throttle from 'lodash/throttle';
// debounce = do sth once after we finally stopped resizing after set miliseconds  = for listen to changes in  window.innerHeight only for finished changes
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    // to avoid constant queries to browser we put window.innerHeight to variable
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    // for listen resizes window.innerHeight
    window.addEventListener(
      'resize',
      debounce(() => {
        console.log('Resize just ran');
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  calcCaller() {
    console.log('Scroll funtion ran');
    this.itemsToReveal.forEach((el) => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    // console.log(el.getBoundingClientRect().y);
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log('Element was calculated');
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < 75) {
        el.classList.add('reveal-item--is-visible');
        el.isRevealed = true;
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => {
      // początkowo dodajemy klasę reveal-item (BARDZIEJ powinno być ITEM-TO-REVEAL)
      el.classList.add('reveal-item');
      // Oznaczamy stan itemu jako NIEODKRYTY
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
