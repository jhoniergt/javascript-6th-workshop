// // Global Scope
//primera parte del codigo
// var globalVariable = "Soy una variable global.";

// function testScope() {
//segunda parte
//   // Function Scope
//   var functionVariable = "Soy una variable local.";

//   if (true) {
//     // Block Scope
//tercera parte
//     let blockVariable = "Soy una variable de bloque.";
//     console.log("Dentro del bloque:", blockVariable);
//   }

//   console.log("Dentro de la función:", functionVariable);
// }
//cuarta parte
// console.log("Fuera de la función:", globalVariable);
// testScope();

let primeraparte = prompt("a que variable puedes acceder en la primer parte del codigo?(a) globalvariable / b) FunctionVariable / c) blockvariable) ")
    if (primeraparte.toLowerCase() == "a" o "b") {
        alert("Escogiste la opcion correcta por que variables declaradas con var, pueden ser acedidas dentro y fuera del bloque")
    } else {
        alert("Escogiste la opcion incorrecta porque la unica ....")
    }

// let segundaparte = prompt("Es posible acceder a globalVariable, FunctionVarible or blockvariable en la segunda parte del codigo? ")
// let terceraparte = prompt("Es posible acceder a globalVariable, FunctionVarible or blockvariable en la tercera parte del codigo? ")
// let cuartaparte = prompt("Es posible acceder a globalVariable, FunctionVarible or blockvariable en la quarta parte del codigo? ")
