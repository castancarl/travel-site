class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideInitially();
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      console.log('Scroll funtion ran');
      this.itemsToReveal.forEach((el) => this.calculateIfScrolledTo(el));
    });
  }

  calculateIfScrolledTo(el) {
    console.log(el.getBoundingClientRect().y);
    /* it is a measure of how far the top edge of an ELEMENT is from the top edge of the CURRENT BOUNDING RECTANGLE - in this case browser's viewport */

    let scrollPercent =
      (el.getBoundingClientRect().y / window.innerHeight) * 100;
    if (scrollPercent < 75) {
      el.classList.add('reveal-item--is-visible');
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => el.classList.add('reveal-item'));
  }
}

/* 
-------------------------------TRADITIONAL ANONYMOUS FUNCTION instead above  ARROW FUNCTION
*/
//   hideInitially() {
//     this.itemsToReveal.forEach(function (el) {
//       el.classList.add('reveal-item');
//     });

// we have to add forEach() becouse itemsToReveal is collection of object Array
// for each of feature-item(in Array) run function ()
// we transform clasical anonymous function (el) {} to arrow function and because it has one parameter we can ommit () , next becouse is one line function we ommit {}

export default RevealOnScroll;

/* 
---------------------------LODASH --> TO IMPROVE EFFICIENTY OUR CODE---------------
*/

// zaimportuj funkcję (methode) throttle z biblioteki (paczki) lodash/throttle (nie całą bibliotekę loadash)

// FUNCKCJA throttle ma 2 argumenty (funkcja którą chcemy uruchomić, ile milisecund czekać żeby funkcja uruchomiła się ponownie )
import { throttle } from 'lodash/throttle';

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    // for every second that the user scrolls the page , our calcCaller() is only going to be called five times at the most 200/1000
    // bind(this) --> to make sure that no matter how this function is called , the this keyword will still be pointing towards our overall(obejmujący) object
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
  }

  calcCaller() {
    console.log('Scroll funtion ran');
    this.itemsToReveal.forEach((el) => this.calculateIfScrolledTo(el));
  }

  calculateIfScrolledTo(el) {
    console.log('Element was calculated');
    let scrollPercent =
      (el.getBoundingClientRect().y / window.innerHeight) * 100;
    if (scrollPercent < 75) {
      el.classList.add('reveal-item--is-visible');
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => el.classList.add('reveal-item'));
  }
}

/* 
------------------ TURN OFF CALCULATEifSCROLLEDTO WHEN ELEMENT IS ALREADY VISIBLE 
*/

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
  }

  calcCaller() {
    console.log('Scroll funtion ran');
    this.itemsToReveal.forEach((el) => {
      // tylko jeśli DŹWIGNIA NIE ZOSTAŁA PRZESUNIĘTA NA 'TRUE' WYKONAJ
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    console.log('Element was calculated');
    let scrollPercent =
      (el.getBoundingClientRect().y / window.innerHeight) * 100;
    if (scrollPercent < 75) {
      el.classList.add('reveal-item--is-visible');
      //   teraz musimy oznaczyć stan itemu jak ODKRYTY
      el.isRevealed = true;
      if (el.isLastItem) {
        window.removeEventListener('scroll', this.scrollThrottle);
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
    // Po skończeniu powyższej LOOP , weż ostatni element z tablicy którym jest --> itemsToReveal[długość tablicy - 1] następnie TACK ON AND ADD nową PROPERTY do tego elementu --> isLastItem z wartością ustawioną na = TRUE
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    //  PO PROSTU OZNACZAMY KTÓRY ELEMENT JEST OSTATNI DO ODKRYCIA
  }
}
