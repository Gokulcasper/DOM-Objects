const person = {
  Name: "Gokul",
  place: "Namakkal",
  greetuser() {
    return `Hi..! My Name Is ${this.Name} I'm Comming From ${this.place}`;
  },
};
// person.Name = "Raj";
// person.place = "Salem";

// const personOne = person.greetuser();
// console.log(personOne);

// document.body.innerHTML = `<h1>${personOne}</h1>`;

//----------------------------------------------------

const InputName = prompt("What is your Name : ");
const InputPlace = prompt("Where are you From : ");

person.Name = InputName;
person.place = InputPlace;

const personOne = person.greetuser();
console.log(personOne);

document.body.innerHTML = `<h1>${personOne}</h1>`;

// document.write(person.greetuser());
