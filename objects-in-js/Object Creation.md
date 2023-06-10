# There are mainly 3 ways to create objects in Javascript:

### First way to create an Object: object constructor
```
const Person = {
  name: '',
  setName(n) {
    this.name = n;
  }
}

const rahul = Object.create(Person);
rahul.setName('Rahul');

Person.__proto__.getName = function () {
  console.log('Name is: ', this.name);
}
console.log(rahul.__proto__ === Person); // true
console.log(rahul.getName()); // Name is: Rahul
```



### Second way to create an Object: function constructor
```
function Person(name){
  this.name = name;
  defining method inside the function will result in creation of same method with every instance creation and hence its better to keep it out in prototype.
  this.getName = function () {
    console.log("name is: ", this.name);
  }
}

const rahul = new Person(';Rahukl');

console.log('Prototype', Person.prototype);
console.log('Proto', rahul.__proto__);

rahul.setName('Rahul');
rahul.getName();
```

<i> Defining methods on the prototype allows you to add or modify methods even after instances have been created. Any changes made to the prototype will be reflected in all existing instances, providing a convenient way to update the behavior of objects dynamically.</i>

```
Person.prototype.setName = function (name) {
  this.name = name
};

Person.prototype.getName = function() {
  console.log("name is: ", this.name);
}

const rahul = new Person(';Rahukl');

console.log('Prototype', Person.prototype);
console.log('Proto', rahul.__proto__);

rahul.setName('Rahul');
rahul.getName();
```

### Third way to create an Object: class
```
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log("name is: ", this.name);
  }
  setName(name) {
    this.name = name;
  }
}

const rahul = new Person(';Rahukl');

console.log('Prototype', Person.prototype);
console.log('Proto', rahul.__proto__);

rahul.setName('Rahul');
rahul.getName();
```
