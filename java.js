alert ("¡Bienvenido!")




//Calculador de Peso
const division = (a,b) => a / b
let peso = Number(prompt("¿Cuánto pesas?"));
let altura =  Number (prompt ("¿Cuánto medís?"))


const imc = (peso, altura) => {
  return  Math.round(((division (peso,altura ** 2))*10000))
};
 


console.log (imc (peso,altura))
