import '../styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

/* Lesson example code below this line */

function Person() {
  this.greet = function () {
    console.log('hello there !!');
  };
}

let john = new Person();

john.greet();

let jane = new Person();

jane.greet();
