
/*
let employee = new Object();
    employee.first_name = 'Oleh';
    employee.last_name = 'Bilyk';
    employee.full_name =  function() {
    return this.first_name + " " + this.last_name;
}

console.log(employee);

//console.log({employee});
/*
employee.salary = 2000;
employee['bonuses'] = 500;
*/
//console.log({basepay});
/*
class User {
    constructor(name) {
        this.name = name;
    }
    get name(){
    return this.name;
}
    set name(value) {
        if (value.length < 4) {
        console.log("Name is too short");    
        return;
    }
    this.name = value;
    }
}
let user = new User('Oleh');
console.log(user.name);
let user2 = new User('Dara');
user2.name = 'Bob'
*/

// Task 1
/*
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3, 
    direction: "web development" 
};

console.log(propsCount(mentor)) 
*/

// Task 2
/*
const inf = {
    name: 'Oleh',
    age: 32,
    city: 'Lviv',
    country: 'Ukraine',
    position: 'QC'
  };
  
function showProps(obj) {
    return Object.keys(obj);
}
  
const propertyValues = Object.values(inf);
  
console.log(showProps(inf));
console.log(propertyValues);
*/

// Task 3
/*
class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }
  
    showFullName() {
    return `${this.name} + ${this.surname}`;
    }
}
  
class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      return `${this.surname} + ${this.name} + ${middleName}`;
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear * this.year + 1;
      return Math.min(Math.max(course, 1), 6);
    }
  }
  
const stud1 = new Student("Oleh", "Bilyk", 2015);
console.log(stud1.showFullName("Andriyovych")); // 
console.log("Current course:" + stud1.showCourse());
*/

// Task 4

/*
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary with experience: ${salary} `);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }

    static sortWorkersBySalary(workers) {
        workers.sort((a, b) => {
            return a.showSalaryWithExperience() - b.showSalaryWithExperience();
        });

        console.log("\nSorted salary:");
        workers.forEach(worker => {
            console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
        });
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

Worker.sortWorkersBySalary([worker1, worker2, worker3]);
/*

// Task 5
/*
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    const totalArea = figures.reduce((acc, figure) => {
        const area = figure.getArea();
        console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
        return acc + area;
    }, 0);
    console.log(totalArea);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
*/


