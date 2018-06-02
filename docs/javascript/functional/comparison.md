# OOP vs FP

Let's compare how we would go about creating a `Car` variable which has a method to increase its mileage (number of travelled kilometers) in Object-Oriented Programming and Functional Programming.

## OOP

``` javascript
class Car {
  constructor(make, year, mileage) {
    this.make = make;
    this.year = year;
    this.mileage = mileage;
  }

  increaseMileage(mileage) {
    this.mileage += mileage;
  }
}

var ferrari = new Car("Ferrari", 2017, 5000);
ferrari.increaseMileage(500);
console.log(ferrari);
```

## FP

``` javascript
const ferrari = {
  make: 'Ferrari',
  year: 2017,
  mileage: 5000
};

function increaseMileage(obj, mileage){
  const objCopy = _.cloneDeep(obj);
  objCopy.mileage += mileage;
  return objCopy;
}

let ferrariWithIncreasedMileage = increaseMileage(ferrari, 500);
console.log(ferrariWithIncreasedMileage);
```
