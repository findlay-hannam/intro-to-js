const animal = {
  countLegs: function() {
    console.log(4);
  },
  makeNoise: function() {
    console.log('Meow');
  }
};

const dog = {
  makeNoise: function() {
    console.log('Woof!');
  }
}

dog.__proto__ = animal;

// Use a property defined on the object
dog.makeNoise();

// Use a property defined on its prototype
dog.countLegs();

// Use a property defined on its prototype's prototype (Object)
console.log(dog.toString());
