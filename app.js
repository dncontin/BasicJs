// Variables
var x = 5;
var y = 6;
var z = x +y;

console.log("El valor es : "+z);


//Identificadores
/*
  Nombre a 1 _ $
  comenzar con una letra
  pueden comenzar ocn $ o _
  senibles a may min
  no podemos usar como nombre una palabra reservada
*/


// Tipos de datos
//podemos usar la misma variable para != tipos de daots

var lenght = 16;
var lastname = "Pepe";
var x = {firstName: "Pepe", lastName: "Argento"}; //object

var a; //undefined
a=5;
console.log(a);

a= "Pepe";
console.log(a);

//comillas
/*
''
´´
""
*/

var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC60';

var answer1 = "It's alright";
var answer2 = "He is called 'Fernando'";
var answer3 = 'He is called "Francisco"';


console.log(carName1);
console.log(carName2);
console.log(answer1);
console.log(answer2);
console.log(answer3);

//números
var x1 = 34.00;
var x2 = 34;
console.log(x1);
console.log(x2);

console.log(x1+x2);

var y = 123e5; //12300000
console.log(y);
var z = 123e-5;//0.00123
console.log(z);

//arrays son base 0
var cars =["Ford","Volvo","BMW"];
console.log(cars[1]);


//objetos
var person = {firstName:"Pepe", lastName:"Argento", age:25, eyeColor: "Blue"};

//template literals (${expresion})

let f = 'hola';
let b = 'Mundo';
console.log('Mi primera app '+ f + ' '+b);

let h = `Mi primera app ${f} ${b} con template literals`;
console.log(h);

//function nombre (){};

function myFunction(p1,p2){
  return p1*p2;
};

console.log(myFunction(3,4));


var xa = myFunction(4,3);
console.log(xa);

var xb = myFunction(5,8);
console.log(xb);

function myFunction (a,b){
  return a-b;
}
