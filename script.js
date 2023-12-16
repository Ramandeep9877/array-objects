let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((item) => item.profession == "developer" ? console.log(item) : null);
}

// 2. Add Data
function addData() {
  let f_name = prompt("Enter your Name");
  let age = prompt("Enter your age");
  let proffesion = prompt("Enteryour proffesion");
  data.push({
    f_name,
    age,
    proffesion,
  });
console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter((item) => item.profession != "admin");
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let data2 = [
    { name: "jony", age: 24, profession: "developer" },
    { name: "dane", age: 27, profession: "admin" },
  ];
  let conctaed = data.concat(data2);
  data = conctaed
  console.log(data);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach(item => sum +=parseInt(item.age));
  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      console.log("Person greater than 25 existes");
      break;
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProffesionarr = [];
  data.forEach(item => {
    if (!uniqueProffionsarr.includes(item.profession)) {
      uniqueProffionsarr.push(item.profession);
    }
  })
  nconsole.log(uniqueProffionsarr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach(item => {
    if (item.name == "john") {
      item.proffesion = "Manager";
    }
  })
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devcount=data.filter(item=>item.proffesion=="developer").length;
  let admincount=data.filter(item=>item.proffesion=="admin").length;
  console.log('Developers: ${devcount} | Admins: ${admincount}')
 }
