import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// React Related Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';

// Import React componets that we created
import MyAmazingComponent from './modules/MyAmazingComponent';

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#my-react-example'));

new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new MobileMenu();

/* ---MODAL--- */
let modal;
document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "MAREK - modal" */ './modules/Modal')
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log('There was a problem.'));
    } else {
      modal.openTheModal();
    }
  });
});

/* ---HOT ACTION--- */
if (module.hot) {
  module.hot.accept();
}
