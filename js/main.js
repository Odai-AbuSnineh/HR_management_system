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


let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior", "./assets/class10-character/Ghazi.jpg")
let Lana = new Employee("Lana Ali", "Finance", "Senior", "./assets/class10-character/Lana.jpg")
let Tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/class10-character/Tamara.jpg")
let Safi = new Employee("Safi Walid", "Administration", "Mid-Senior", "./assets/class10-character/Safi.jpg")
let Omar = new Employee("Omar Zaid", "Development", "Senior", "./assets/class10-character/Omar.jpg")
let Rana = new Employee("Rana Ahmad", "Development", "Junior", "./assets/class10-character/Rana.jpg")
let Hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/class10-character/Hadi.jpg")

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



Employee.prototype.renderEmployees = function () {

  let body = document.getElementsByTagName("body")[0];





  // create main container


  let main = document.createElement("div");
  main.id = "main";
  main.style.backgroundColor = "#1134592a";
  main.style.display = "flex";
  main.style.flexDirection = "row";
  main.style.flexWrap = "nowrap";
  main.style.alignItems = "center";
  main.style.height = "75vh"
  body.appendChild(main)



  Employee.prototype.renderEmployees = function () {


    let divCard = document.createElement("div");
    divCard.setAttribute("width", "100px");
    divCard.setAttribute("class", "employee");
    divCard.style.color = "white";
    divCard.style.padding = "15px";
    divCard.style.margin = "0 5px";
    divCard.style.height = "50%";
    divCard.style.display = "flex";
    divCard.style.flexDirection = "column";
    divCard.style.flexWrap = "nowrap";
    divCard.style.alignItems = "center";
    main.appendChild(divCard);

    if (this.department === "Finance") {
      divCard.style.backgroundColor = "red";
    } else if (this.department === "Administration") {
      divCard.style.backgroundColor = "blue";
    } else if (this.department === "Development") {
      divCard.style.backgroundColor = "green";
    } else if (this.department === "Marketing") {
      divCard.style.backgroundColor = "black";
    }


    let cardImage = document.createElement("img");
    cardImage.src = this.image;
    cardImage.alt = this.name;
    cardImage.setAttribute("width", "150px")
    divCard.appendChild(cardImage);


    let cardtext = document.createElement("p");
    cardtext.textContent = `Name: ${this.name} -ID: ${this.uniqueID} Department: ${this.department} -Level: ${this.level} -Salary: ${Math.trunc(this.finalSalary)}`
    cardtext.style.fontSize = "12px"
    divCard.appendChild(cardtext)

    // let divFinance = document.getElementsByClassName("employee")[0];
    // divFinance[0].styl.backgroundColor = "red"
  }

}





for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].renderEmployees();
}
Ghazi.renderEmployees()