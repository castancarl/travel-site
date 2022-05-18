/* 
-----------------------------------------------------EXPORT IMPORT 
*/

export default MobileMenu;
import MobileMenu from './modules/MobileMenu';
// only import module file itself won't do anything. We need to create a OBJECT that use this CLASS so:

new MobileMenu();
or;
let mobileMenu = new MobileMenu();

class MobileMenu {
  constructor() {
    this.greet();
  }

  greet() {
    alert('hello');
  }
}

/* 
-----------------------------------------------------TRADITIONAL CODING
*/

class MobileMenu {
  constructor() {
    document
      .querySelector('.site-header__menu-icon')
      .addEventListener('click', function () {
        console.log('The top right icon was clicked.');
      });
  }
}

// A. Selecting elements from the DOM
// B. Event handling
// C. Defining functionality

/* 
------------------------------------------------------ORGANIZED CODING
*/

class MobileMenu {
  // first create OBJECT
  // web browser is going to look out for special mehod name CONSTRUCTOR to run it
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    // we have to call any others function manualy
    this.events();
  }

  // now create all EVENTS we want to watch for
  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
    // addEventListener modify 'this' keyword to point towards the DOM element that was just click on.
    // so we use arrow function which doesn't change this keyword
    // in other words - addEventListener is not receiving a direct reference to our toggleTheMenu method.
    // instead we're passing arrow function that actually going to execute our method
  }

  // now create all  METHODS that OBJECT will do at certain situation EVENTS
  toggleTheMenu() {
    console.log('The top right icon was clicked.');
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
  }
}
