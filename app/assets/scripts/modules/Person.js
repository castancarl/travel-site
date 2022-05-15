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
