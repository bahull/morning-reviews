//The following is an example of the major topics covered, I referenced these while live typing examples on repl.it
//This review lasted a bit longer the alotted time due to questions that were asked
//There are several problems in here that are written incorrectly to demonstrate common mistakes and to show how to fix them

// Destructuring!

let newArray = [1, 2, 3, 4];

const [ a , b , y ] = newArray;

// console.log(y);

let batmanNemesis = {
  worst: "The Joker",
  secondWorst: "The Riddler",
  thirdWorst: "Two-Face"
};

const { worst, secondWorst } = batmanNemesis;

// console.log(worst);

const truthyFalsy  = ({number,string}) => number || string;

// truthyFalsy({number: 0,string: "Im a string!"})

// Additional resources can be found at 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// ----------------------------------------------

// Deleting properties from and looping through objects

let batmanToolbelt = {
  batarang: "explosive",
  batlgrapple: "flying through the sky",
  bolas: "tie em up",
  tranquilizer: "Night, night",
  superStrength: "Batman isn't Superman"
}

function whatDoesntMatch(obj){
  for(let item in obj){
    if(item === "superStrength") delete obj[item]
  }
  return obj
}

// whatDoesntMatch(batmanToolbelt)

let animals = {snake: 2, 
     cougar: 3, 
     kangaroo: 4
  
};

function startsWithK(obj){
  for(let item in obj){
    if(item.indexOf("k") === 0) delete obj[item];
  }
  return obj;
}

// startsWithK(animals);


let noTreasure = {one: 'happiness but no money', 
                  two: 'puppies are always a treasure', 
                  three: 'rocks, lots of rocks'}

function hiddenTreasure(obj){
  for(let treasure in obj){
    if(!obj[treasure].includes("treasure")){
      delete obj[treasure]
    }
  }
  return obj
}

// hiddenTreasure(noTreasure)

// Additional resources :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement

// ---------------------------------------------------------------------------------------------------

// Object Assign

let initialClass = {
  className: "DM-10",
  startDate: "11-28-2017"
}


//Object.assign method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.


let newClass = Object.assign({}, initialClass, {className: "DM-11", startDate: "1-22-2018"})

// console.log(newClass, initialClass)

// Additional resources https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// ---------------------------------------------------------------------------------------------------

// Arrow Functions and higher-order methods

//Arrow functions create a lexical binding of "this", used to maintain context of "this"

// es6 arr.map((curr, index, array) => action goes here);
// es5 arr.map(function(curr, index, array){ 
//                   action goes here
//                   });

// filter((curr, index, array) => action goes here);

// reduce((total, curr, currIndex, arr) => action goes here, intialValue)



/*
  Use a high order method to get sum of all the order totals with the sales tax included
*/

// let ordersTotal= orders.map(order =>  {
// return  order.price + (order.price*order.tax)
  
// });
// console.log(ordersTotal);



const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

let evenNumbers = mixedNumbers.filter(curr => curr % 2 ===0);
// console.log(evenNumbers);


let newArr = [1, 2, 3];
let changedArr = newArr.reduce((total, curr, currIndex, arr) => total + curr, 4);
// console.log(changedArr);


// Additional resources: https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209


// ---------------------------------------------------------------------------------------------------

// Object Constructors | Prototypes | Classes | Constructors | Super

// "this" is the object that "owns" the code.
// "this" when used in an object, is the object itself.
// In a constructor function "this" does not have a value. It is a substitute for the new object.
// The value of this will become the new object when a new object is created.


function Car(make, miles, year, model) {
  this.make = make;
  this.miles = miles;
  this.year = year;
  this.model = model;
}

Car.prototype.drive = function(miles) {
  return this.miles += miles;
}


const porsche = new Car('porsche', 12, 1987, 'carerra');
// console.log(porsche)
// porsche.drive(6)
// console.log(porsche)

// Classes
class Person{
  constructor(first_name, last_name, email){
    this.first_name = first_name, 
    this.last_name = last_name, 
    this.email = email
  }
  makeWidget(){
    return `${this.first_name} ${this.last_name} Widget`;
  }
}

let bryce = new Person("Bryce", "Hull", "Not_Bryces_Real_Email");

// console.log(bryce)
// bryce.makeWidget()

class Alien extends Person{
  constructor(first_name, last_name, email, alienRace){
    super(first_name, last_name, email)
    this.alienRace = alienRace,
    this.alienStatus = false
  }
  becomeAlien(){
    this.alienStatus = true;
    return this;
  }
}


let steven = new Alien("Steven", "Isbell", "Not_Giving_It_Away","Reptilian")
// console.log(steven)
// steven.becomeAlien()
// console.log(steven)
// steven.makeWidget()

// Additional resources:
// Super: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
