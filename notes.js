// EXAMPLE 1

function person(name, color) {
  console.log(
    'hello, my name is ' + name + ' and my favourite color is ' + color
  );
}

let mark = {
  name: 'MARK',
  color: 'BLUE',
};

person(mark.name, mark.color);

// EXAMPLE 2

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

// EXAMPLE 3
