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
  main.style.justifyContent = "space-around"
  body.appendChild(main)



  Employee.prototype.renderEmployees = function () {


    // let divCard = document.createElement("div");
    // divCard.setAttribute("width", "100px");
    // divCard.setAttribute("class", "employee");
    // divCard.style.color = "white";
    // divCard.style.padding = "15px";
    // divCard.style.margin = "0 5px";
    // divCard.style.height = "50%";
    // divCard.style.display = "flex";
    // divCard.style.flexDirection = "column";
    // divCard.style.flexWrap = "nowrap";
    // divCard.style.alignItems = "center";
    // main.appendChild(divCard);

    if (this.department === "Finance") {



      let divCard1 = document.createElement("div");
      divCard1.setAttribute("width", "200vh");
      divCard1.setAttribute("class", "Finance");
      divCard1.style.color = "white";
      divCard1.style.padding = "15px";
      divCard1.style.margin = "0 5px";
      divCard1.style.width = "13vw";
      divCard1.style.height = "50%";
      divCard1.style.display = "flex";
      divCard1.style.flexDirection = "column";
      divCard1.style.flexWrap = "nowrap";
      divCard1.style.alignItems = "flex-start";
      main.appendChild(divCard1);
      divCard1.style.backgroundColor = "#35a2b6";
      let divFinance = document.createElement("div");
      divCard1.appendChild(divFinance);




      let cardImage = document.createElement("img");
      cardImage.src = this.image;
      cardImage.alt = this.name;
      cardImage.setAttribute("width", "200vh")
      divCard1.appendChild(cardImage);


      let cardtext = document.createElement("p");
      cardtext.innerHTML = `Name: ${this.name} <br> ID: ${this.uniqueID} <br> Department: <u> ${this.department} </u>  <br> Level: ${this.level} <br> Salary: ${Math.trunc(this.finalSalary)}`;
      cardtext.style.fontSize = "18px"
      divCard1.appendChild(cardtext)

    } else if (this.department === "Administration") {

      let divCard2 = document.createElement("div");
      divCard2.setAttribute("width", "200vh");
      divCard2.setAttribute("class", "Adminstration");
      divCard2.style.color = "white";
      divCard2.style.padding = "15px";
      divCard2.style.margin = "0 5px";
      divCard2.style.width = "13vw";
      divCard2.style.height = "50%";
      divCard2.style.display = "flex";
      divCard2.style.flexDirection = "column";
      divCard2.style.flexWrap = "nowrap";
      divCard2.style.alignItems = "flex-start";
      main.appendChild(divCard2);

      divCard2.style.backgroundColor = "#2f506e	";

      let cardImage = document.createElement("img");
      cardImage.src = this.image;
      cardImage.alt = this.name;
      cardImage.setAttribute("width", "200vh")
      divCard2.appendChild(cardImage);


      let cardtext = document.createElement("p");
      cardtext.innerHTML = `Name: ${this.name} <br> ID: ${this.uniqueID} <br> Department:<u> ${this.department}</u> <br> Level: ${this.level} <br> Salary: ${Math.trunc(this.finalSalary)}`;
      cardtext.style.fontSize = "16.5px"
      divCard2.appendChild(cardtext)


    } else if (this.department === "Development") {

      let divCard3 = document.createElement("div");
      divCard3.setAttribute("width", "200vh");
      divCard3.setAttribute("class", "development");
      divCard3.style.color = "white";
      divCard3.style.padding = "15px";
      divCard3.style.margin = "0 5px";
      divCard3.style.width = "13vw";
      divCard3.style.height = "50%";
      divCard3.style.display = "flex";
      divCard3.style.flexDirection = "column";
      divCard3.style.flexWrap = "nowrap";
      divCard3.style.alignItems = "flex-start";
      main.appendChild(divCard3);

      divCard3.style.backgroundColor = "#2c2d2d";

      let cardImage = document.createElement("img");
      cardImage.src = this.image;
      cardImage.alt = this.name;
      cardImage.setAttribute("width", "200vh")
      divCard3.appendChild(cardImage);


      let cardtext = document.createElement("p");
      cardtext.innerHTML = `Name: ${this.name} <br> ID: ${this.uniqueID} <br> Department: <u> ${this.department} </u>  <br> Level: ${this.level} <br> Salary: ${Math.trunc(this.finalSalary)}`;
      cardtext.style.fontSize = "17.5px"
      divCard3.appendChild(cardtext)

    } else if (this.department === "Marketing") {

      let divCard4 = document.createElement("div");
      divCard4.setAttribute("width", "200vh");
      divCard4.setAttribute("class", "Marketing");

      divCard4.style.color = "white";
      divCard4.style.padding = "15px";
      divCard4.style.margin = "0 5px";
      divCard4.style.width = "13vw";
      divCard4.style.height = "50%";
      divCard4.style.display = "flex";
      divCard4.style.flexDirection = "column";
      divCard4.style.flexWrap = "nowrap";
      divCard4.style.alignItems = "flex-start";
      main.appendChild(divCard4);

      divCard4.style.backgroundColor = "#aa9b9b";

      let cardImage = document.createElement("img");
      cardImage.src = this.image;
      cardImage.alt = this.name;
      cardImage.setAttribute("width", "200vh")
      divCard4.appendChild(cardImage);


      let cardtext = document.createElement("p");
      cardtext.innerHTML = `Name: ${this.name} <br> ID: ${this.uniqueID} <br> Department:<u> ${this.department} </u> <br> Level: ${this.level} <br> Salary: ${Math.trunc(this.finalSalary)}`;
      cardtext.style.fontSize = "17.5px"
      divCard4.appendChild(cardtext)
    }





    // let cardImage = document.createElement("img");
    // cardImage.src = this.image;
    // cardImage.alt = this.name;
    // cardImage.setAttribute("width", "150px")
    // divCard.appendChild(cardImage);


    // let cardtext = document.createElement("p");
    // cardtext.textContent = `Name: ${this.name} -ID: ${this.uniqueID} Department: ${this.department} -Level: ${this.level} -Salary: ${Math.trunc(this.finalSalary)}`
    // cardtext.style.fontSize = "12px"
    // divCard.appendChild(cardtext)

    // let divFinance = document.getElementsByClassName("employee")[0];
    // divFinance[0].styl.backgroundColor = "red"
  }

}





for (let i = 0; i < allEmployee.length; i++) {

  allEmployee[i].renderEmployees();
}
Ghazi.renderEmployees()