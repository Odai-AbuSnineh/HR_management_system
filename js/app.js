'use strict';



//1. displaying the employees using a literal object
let Ghazi = {
  fullName: "Ghazi Samer",
  theDepartment: "Administration",
  theLevel: "Senior",
  imgURL: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Senior"))
};
let Lana = {
  fullName: "Lana Ali",
  theDepartment: "Finance",
  theLevel: "Senior",
  imgURL: "https://images.pexels.com/photos/5997309/pexels-photo-5997309.jpeg?auto=compress&cs=tinysrgb&w=1600",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Senior"))
};
let Tamara = {
  fullName: "Tamara Ayoub",
  theDepartment: "Marketing",
  theLevel: "Senior",
  imgURL: "https://images.pexels.com/photos/16765737/pexels-photo-16765737/free-photo-of-woman-in-coat-taking-pictures-with-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Senior"))
};
let Safi = {
  fullName: "Safi Walid",
  theDepartment: "Administration",
  theLevel: "Mid-Senior",
  imgURL: "https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Mid-Senior"))
};
let Omar = {
  fullName: "Omar Zaid",
  theDepartment: "Development",
  theLevel: "Senior",
  imgURL: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Senior"))
};
let Rana = {
  fullName: "Rana Ahmad",
  theDepartment: "Development",
  theLevel: "Junior",
  imgURL: "https://images.pexels.com/photos/8550497/pexels-photo-8550497.jpeg?auto=compress&cs=tinysrgb&w=1600",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Junior"))
};
let Hadi = {
  fullName: "Hadi Ahmad",
  theDepartment: "Finance",
  theLevel: "Mid-Senior",
  imgURL: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  uniqueID: creatingID(),
  mainSalary: Math.trunc(calculateSalary("Mid-Senior"))
};



//2. Create a method to generate a unique four digits employee id number
function creatingID() {
  var min = 1000;
  var max = 1100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(creatingID());


//3.  creating a method for calculating the salary
function calculateSalary(level) {
  let minSalary, maxSalary;

  if (level === 'Senior') {
    minSalary = 1500;
    maxSalary = 2000;
  } else if (level === 'Mid-Senior') {
    minSalary = 1000;
    maxSalary = 1500;
  } else if (level === 'Junior') {
    minSalary = 500;
    maxSalary = 1000;
  }

  const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;

  //4. calculate the net salary where the tax percent is 7.5
  const netSalary = salary - (salary * 0.075);

  return netSalary;
}



// 5. creating a render method to render each employee's name with their salary
var renderMethod = document.getElementById("1000");
renderMethod.innerHTML = `Employee name: ${Ghazi.fullName},<br> Employee salary: ${Ghazi.mainSalary}`;

var renderMethod = document.getElementById("1001");
renderMethod.innerHTML = `Employee name: ${Lana.fullName},<br> Employee salary: ${Lana.mainSalary}`;

var renderMethod = document.getElementById("1002");
renderMethod.innerHTML = `Employee name: ${Tamara.fullName},<br> Employee salary: ${Tamara.mainSalary}`;

var renderMethod = document.getElementById("1003");
renderMethod.innerHTML = `Employee name: ${Safi.fullName},<br> Employee salary: ${Safi.mainSalary}`;

var renderMethod = document.getElementById("1004");
renderMethod.innerHTML = `Employee name: ${Omar.fullName},<br> Employee salary: ${Omar.mainSalary}`;

var renderMethod = document.getElementById("1005");
renderMethod.innerHTML = `Employee name: ${Rana.fullName},<br> Employee salary: ${Rana.mainSalary}`;

var renderMethod = document.getElementById("1006");
renderMethod.innerHTML = `Employee name: ${Hadi.fullName},<br> Employee salary: ${Hadi.mainSalary}`;




