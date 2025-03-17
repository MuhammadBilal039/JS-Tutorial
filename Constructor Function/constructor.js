// // Constructor Simple Examples in JavaScript

// // Assignment # 01
// // Ek Person constructor function banao jo name aur age ko initialize kare. Fir ek object banao aur uske values console me print karo.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const personDetail = new Person('Bilal', 22);
// console.log('personDetail: ', personDetail);

// // Assignment # 02
// // Ek Book constructor function banao jo title aur author ko store kare. Ek object create karke title aur author print karo.

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// const bookDetail = new Book(
//   'A Smarter Way to Learn JavaScript',
//   'Muhammad Bilal'
// );
// console.log('bookDetail: ', bookDetail);

// // Assignment # 03
// // Ek Animal constructor function likho jo species aur sound ko store kare. Ek function add karo jo sound ko console pe print kare.

// function Animal(species, sound) {
//   this.species = species;
//   this.sound = sound;
// }

// const animalDetail = new Animal('Bees', 'Buzzes');
// console.log('animalDetail: ', animalDetail);

// // Assignment # 04
// // Ek Student constructor function banao jo name, rollNumber, grade store kare. Ek function likho jo student ki details print kare.

// function Student(name, rollNumber, grade) {
//   this.name = name;
//   this.rollNumber = rollNumber;
//   this.grade = grade;
// }

// const studentDetail = new Student('Bilal', 39, 8);
// console.log('studentDetail: ', studentDetail);

// // Assignment # 05
// // Ek Car constructor function banao jo brand, model, year store kare. Ek function likho jo brand aur model print kare.

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// const carDetail = new Car('Toyota', 'Prius', 2015);
// console.log('carDetail: ', carDetail);

// // Assignment # 06
// // Ek Mobile constructor function likho jo brand, price, storage ko store kare. Ek method banao jo price ko print kare.

// function Mobile(brand, price, storage) {
//   this.brand = brand;
//   this.price = price;
//   this.storage = storage;
// }

// const mobileDetail = new Mobile('Iphone', 35000, '64GB');
// console.log('mobileDetail: ', mobileDetail);

// // Assignment # 07
// // Ek Movie constructor function likho jo title, director, year store kare aur ek function ho jo title aur year print kare.

// function Movie(title, director, year) {
//   this.title = title;
//   this.director = director;
//   this.year = year;
// }

// const movieDetail = new Movie('3Idots', 'abc', 2002);
// console.log('movieDetail: ', movieDetail);

// // Assignment # 08
// // Ek BankAccount constructor function likho jo accountNumber, balance store kare aur ek method likho jo balance check kare.

// function BankAccount(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;
// }

// const bankAccountDetail = new BankAccount('Bilal', 15000);
// console.log('bankAccountDetail: ', bankAccountDetail);

// // Assignment # 09
// // Ek Laptop constructor function banao jo brand, RAM, processor store kare aur ek method ho jo specs print kare.

// function Laptop(brand, RAM, processor) {
//   this.brand = brand;
//   this.RAM = RAM;
//   this.processor = processor;
// }

// const laptopDetail = new Laptop('HP', '16GB', 'core i5');
// console.log('laptopDetail: ', laptopDetail);

// // Assignment # 10
// // Ek Rectangle constructor function banao jo width aur height ko store kare aur ek method ho jo area calculate kare.

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.calculateArea = function () {
//     return this.width * this.height;
//   };
// }

// const findingArea = new Rectangle(5, 5);
// console.log('findingArea: ', findingArea.calculateArea());

// // Assignment # 11
// // Ek Bike constructor function likho jo brand, speed ko store kare aur ek method ho jo speed increment kare.

// function Bike(brand, speed) {
//   this.brand = brand;
//   this.speed = speed;

//   this.increaseSpeed = function (value) {
//     return (this.speed += value);
//   };
// }

// const bikeDetail = new Bike('Yamaha', 50);
// console.log('Bike initial Speed: ', bikeDetail.increaseSpeed(20));
// console.log('Bike initial Speed: ', bikeDetail.increaseSpeed(30));
// console.log('Bike initial Speed: ', bikeDetail.increaseSpeed(40));

// // Assignment # 12
// // Ek Player constructor function likho jo name, score store kare aur ek function ho jo score update kare.

// function Player(name, score) {
//   this.name = name;
//   this.score = score;

//   this.updateScore = function (value) {
//     return (this.score += value);
//   };
// }

// const playerDetail = new Player('Bilal', 78);
// console.log('Player Score: ', playerDetail.updateScore(25));

// // Assignment # 13
// // Ek Shop constructor function likho jo shopName, location store kare aur ek function ho jo location print kare.

// function Shop(shopName, location) {
//   this.shopName = shopName;
//   this.location = location;

//   this.printLocation = function () {
//     console.log(`Shop name is ${shopName} and its located as ${location}`);
//   };
// }

// const shopDetail = new Shop('Mobile', 'Peshawar');
// shopDetail.printLocation();

// // Assignment # 14
// // Ek Employee constructor function likho jo name, salary, position store kare aur ek function ho jo salary increment kare.

// function Employee(name, salary, position) {
//   this.name = name;
//   this.salary = salary;
//   this.position = position;

//   this.increaseSalary = function (value) {
//     return (this.salary += value);
//   };
// }

// const employeeDetail = new Employee('Bilal', 15000, 'Islamabad');
// console.log('employeeDetail: ', employeeDetail.increaseSalary(10000));
// console.log('employeeDetail: ', employeeDetail.increaseSalary(20000));
// console.log('employeeDetail: ', employeeDetail.increaseSalary(30000));
// console.log('employeeDetail: ', employeeDetail.increaseSalary(40000));

// // Assignment # 15
// // Ek Circle constructor function likho jo radius store kare aur ek function ho jo circumference calculate kare.

// function Circle(radius) {
//   this.radius = radius;

//   this.getCircumference = function () {
//     return 2 * Math.PI * this.radius;
//   };
// }

// const calculateCircle = new Circle(6);
// console.log('calculateCircle: ', calculateCircle.getCircumference().toFixed(1));

// Assignment # 16
// Ek Train constructor function likho jo trainName, seatsAvailable store kare aur ek method ho jo seat booking kare.

function Train(trainName, seatsAvailable) {
  this.trainName = trainName;
  this.seatsAvailable = seatsAvailable;

  this.bookSeats = function (seats) {
    if (seats > seatsAvailable) {
      console.log(
        `Maaf kijigha serif yahe ${seatsAvailable} seats avaiable the`
      );
    } else {
      this.seatsAvailable -= seats;
      console.log(`${seats} seat (s) successfully book in ${this.trainName}`);
      console.log(`Remaining Seats: ${this.seatsAvailable}`);
    }
  };
}

const trainDetail = new Train('Bullet Train', 37);
trainDetail.bookSeats(5);

// Assignment # 17
//  Ek Airplane constructor function likho jo flightNumber, destination store kare aur ek function ho jo flight details print kare.

function Airplane(flightNumber, destination) {
  this.flightNumber = flightNumber;
  this.destination = destination;

  this.getFlightDetail = function () {
    console.log(
      `Flight Number is ${flightNumber} and destination is ${destination}`
    );
  };
}

const airplaneDetail = new Airplane(12345, 'Islamabad');
airplaneDetail.getFlightDetail();

// Assignment # 18
// Ek GameCharacter constructor function likho jo name, health, attackPower store kare aur ek function ho jo attack kare.

function GameCharacter(name, health, attackPower) {
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;

  this.attack = function (target) {
    if (target.health > 0) {
      target.health -= this.attackPower;
      console.log(`${this.name} ne ${target.name} per hemla keya`);
      console.log(`${target.name} ke remaining health: ${target.health}`);
    } else if (target.health <= 0) {
      console.log(`${target.name} defeat hu chuka hai`);
    } else {
      console.log(`${target.name} already defeat hu chuka hai`);
    }
  };
}

const hero = new GameCharacter('Hero', 100, 30);
const villian = new GameCharacter('Villian', 60, 20);

hero.attack(villian);
villian.attack(hero);

// Assignment # 19
// Ek E-commerce Product constructor function likho jo productName, price, stock store kare aur ek function ho jo stock update kare.

function Ecommerce(productName, price, stock) {
  this.productName = productName;
  this.price = price;
  this.stock = stock;

  this.updateStock = function (value) {
    this.stock += value;
    console.log(`Updated Stock: ${this.stock}`);
  };
}

const ecommerceDetail = new Ecommerce('Laptop', 25000, 70);
ecommerceDetail.updateStock(20);
ecommerceDetail.updateStock(30);
ecommerceDetail.updateStock(60);
ecommerceDetail.updateStock(90);

// Assignment # 20
// Ek Smartphone constructor function likho jo brand, model, batteryLife store kare aur ek function ho jo battery status print kare.

function Smartphone(brand, model, batteryLife) {
  this.brand = brand;
  this.model = model;
  this.batteryLife = batteryLife;

  this.batteryStatus = function () {
    console.log(`Battery Status: ${this.batteryLife}`);
  };
}

const smartphoneDetail = new Smartphone('Iphone', 2025, 100);
const smartphoneDetailOne = new Smartphone('Iphone', 2025, 90);
smartphoneDetail.batteryStatus();
smartphoneDetailOne.batteryStatus();
