var numbers =[4,9,16,25];

function myFn (){
  console.log(numbers.map(Math.sqrt));
};

myFn();

//funciones arrow

var helloFn = ()=>{
  console.log('Hola con funciones arrow');
}

helloFn();

var helloFun = name=>{
  console.log(`Hola ${name} con funciones arrow`);
}

helloFun("pepe");

console.log(numbers.map(numbers => numbers.length));

var materiales = [
  'Hidrogeno',
  'Helio',
  'Litio',
  'Cromo'
];

console.log(materiales.map(materiales => materiales.length));
