// function user(first, last){
//   this.firstName = first;
//   this.lastName = last;
// }

// user.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle);

class Bicycle extends Vehicle {
  // constructor(name, wheel){
  //   super(name, wheel)
  // }
}

const myBicycle = new Bicycle('삼천리', 2);
console.log(myBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license){
    super(name, wheel)
    this.license = license
  }
}

const myCar = new Car('벤츠', 4, true)
console.log(myCar)