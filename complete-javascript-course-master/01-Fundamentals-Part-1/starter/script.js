//^--->  Lecture : Hello World 
//^ ------------------------

//&-NOTE-1  >>> We have three way to open up the chrome developer tools :
//&----- : First = Ctrl + Shift + I , Second = Open with inspect , Third = open with Chrome control > moretools > Developers tools , and open with F12


//&--NOTE-2  >>> We can also go to the pervios commands code in the console with up arrow just like that .

//&---NOTE-3 >>> 

//~---> Start of the coding ::::


// alert("Hello world");

// let js = 'amazing';

// if (js === 'amazing') alert('Javascript is FUN');

// js = 'boring';

// if (js === 'amazing') alert('Javascript is FUN');


//^--->  Lecture : A Breif Introduction of the Javascript 
//^ ------------------------



//&-NOTE-1  >>> 



//~---> Start of the coding ::::







//^--->  Lecture : JS Strings and Template literals
//^ ------------------------



//&-NOTE-1  >


/*
*
  *
  *
  *
  *
  *
  *
  *
*/

//~---> Start of the coding ::::


// console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"


// const firstName = 'Mobin';
// const job = 'Jonior Front end developer'
// const birthYear = 2002;
// const year = 2023;

// const mobin = "I'm " + firstName + ", a " + (year - birthYear) + 'years old ' + job + '!';

// console.log(mobin);

// const mobinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(mobinNew);

// console.log(`Hello I'm
// Mobin
// Karam
// from another country's`)




//^--->  Lecture : JS Taking Decision if else Statements
//^ ------------------------



//&-NOTE-1  >


/*
*
  *
  *
  *
  *
  *
  *
  *
*/

//~---> Start of the coding ::::


// const age = 21;
// const toEndOfLife = age >= 30;

// if (toEndOfLife) { //if () that mean if in the parantez is true every things in the brakets its Run .
//   console.log('The Program Is RUNNIG ✅')
// } else {
//   console.log('The Program NOT RUN ⛔')
// }


// const birthYear = 2002;
// let century;
// if (birthYear <= 2020) {
//    century = 20;
// } else {
//    century = 21;
// }
// console.log(century)





//^--->  Lecture : JS  Type Conversion and Coercion
//^ ------------------------

//&-NOTE-1  >

/*
*
  *
  *
  *
  *
  *
  *
  *
*/

//~---> Start of the coding ::::

const birthYear = "2002";
const num = 210;
console.log(birthYear, (Number(birthYear) + 10), String(num));
console.log('10' - '3' - '5' - 1 + '5');





//^----> Challeng number One -----------

//* ----> Data 1 :

// const markHeight = 1.69;
// const markMass = 78;

// const johnHeight = 1.95;
// const johnMass = 92;
//! ----> Data 2 :

// const markHeight = 1.88;
// const markMass = 95;

// const johnHeight = 1.76;
// const johnMass = 85;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);
//?------ make Boolien ------
// const markHigherBMI = (johnBMI < markBMI);
// console.log(johnBMI, markBMI, markHigherBMI);

//^----> Challeng number Two -----------
// const higher = markBMI > johnBMI;
// if (higher) {
//   console.log(`Mark BMI ${markBMI} is  higher than John BMI ${johnBMI}.`)
// } else {
//   console.log(`John BMI ${johnBMI} is higher than Mark BMI ${markBMI}.`)
