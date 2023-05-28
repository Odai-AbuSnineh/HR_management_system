"use strict";

function creatingID() {
  var min = 1000;
  var max = 1100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.Replace all object literals for the HR-management-system with a single constructor function.

const allEmployee = [];

function Employee(name, department, level, image) {

  this.name = name,
    this.department = department,
    this.level = level,
    this.image = image,
    this.uniqueID = creatingID()
  this.mainSalary = function () {
    this.finalSalary = this.calculateSalary()
  }

  allEmployee.push(this)

}


let Ghazi = new Employee("Ghazi Samer", "Adminstration", "Senior", "./assets/employees-images/ghazi.JPG")
let Lana = new Employee("Lana Ali", "Finance", "Senior", "./assets/employees-images/lana.JPG")
let Tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/employees-images/tamara.JPG")
let Safi = new Employee("Safi Walid", "Adminstation", "Mid-Senior", "./assets/employees-images/safi.JPG")
let Omar = new Employee("Omar Zaid", "Development", "Senior", "./assets/employees-images/omar.JPG")
let Rana = new Employee("Rana Ahmad", "Development", "Junior", "./assets/employees-images/rana.JPG")
let Hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/employees-images/hadi.JPG")

console.log(allEmployee);

// 3.keeping the methods that are responsible for generating employeeID and calculating the salary.
Employee.prototype.calculateSalary = function () {

  let minSalary, maxSalary;

  if (this.level === 'Senior') {
    minSalary = 1500;
    maxSalary = 2000;
  } else if (this.level === 'Mid-Senior') {
    minSalary = 1000;
    maxSalary = 1500;
  } else if (this.level === 'Junior') {
    minSalary = 500;
    maxSalary = 1000;
  }

  const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;

  // calculate the net salary where the tax percent is 7.5
  const netSalary = salary - (salary * 0.075);

  return netSalary;

}


for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].mainSalary();
}
// 2.Refactoring the render method to be a prototype method to render each employee name, department, and employee salary

Employee.prototype.renderEmployees = function () {

  document.write(`<p> Employee name: ${this.name} </p>`)
  document.write(`<p> Department: ${this.department} </p>`)
  document.write(`<p> Employee salary: ${Math.trunc(this.finalSalary)} </p><br>`)

};



for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].renderEmployees();
}




