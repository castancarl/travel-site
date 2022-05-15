import '../styles/styles.css';

import Person from './modules/Person';

if (module.hot) {
  module.hot.accept();
}

/* Lesson example code below this line */

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes zero taxes.');
  }
}

let john = new Person('JOHN', 'BLUE'); /* now 'this' = john */

john.greet();

let jane = new Adult('JANE', 'lime');

jane.greet();
jane.payTaxes();
