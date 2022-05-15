// 42 OBJECT ORIENTED PROGRAMING

// EXAMPLE 1 - function and OBJECT with its variables are separated

function person(name, color) {
  console.log(
    'hello, my name is ' + name + ' and my favourite color is ' + color
  );
}
/* object */
let mark = {
  name: 'MARK',
  color: 'BLUE',
};

person(mark.name, mark.color);

// EXAMPLE 2 - function(method) and variables(properties) are stored in OBJECT when refer to properties you type 'nameObject.propertyName' ex. 'mark2.name'

let mark2 = {
  name: 'MARK',
  color: 'BLUE',
  greet: function () {
    console.log(
      'hello, my name is ' +
        mark2.name +
        ' and my favourite color is ' +
        mark2.color
    );
  },
};

mark.greet();

// EXAMPLE 3- BLUEPRINT  - constructor function -- when refert to prop you type 'this.propertyName'

/* A) Stwór rodzaj (klasę, blueprint) człowiek którego różnice będą objawiać się (par1, par2 itd.).
Będzie on mógł robić (metody)
*/
function Person(fullName, favouriteColor) {
  this.name = fullName;
  this.color = favouriteColor;
  this.greet = function () {
    console.log(
      'Hello, my name is ' +
        this.name +
        ' and my favourite color is ' +
        this.color +
        '.'
    );
  };
}

/* B) Niech JOHN będzie nową osobą (PERSON) niech ma następujące cechy new Person(arg1, arg2) */

let john = new Person('JOHN', 'BLUE'); /* now 'this' = john */

/* C) Niech JOHN się przywita (wykonaj metode greet w obiekcie (osobą) JOhn  */
john.greet();

let jane = new Person('JANE', 'YELLOW');

jane.greet();

// EXAMPLE 4 - CLASS (instead constructor function)

class Person {
  constructor(fullName, favouriteColor) {
    this.name = fullName;
    this.color = favouriteColor;
  }

  greet() {
    console.log(
      'Hello, my name is ' +
        this.name +
        ' and my favourite color is ' +
        this.color +
        '.'
    );
  }
}

export default Person;
import Person from './modules/Person';

// EXAMPLE 5 - INHERITANCE WITH CLASSES

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes zero taxes.');
  }
}

let anna = new Person('anna', 'orange'); /* now 'this' = john */

anna.greet();

let kate = new Adult('kate', 'lime');

kate.greet();
kate.payTaxes();
