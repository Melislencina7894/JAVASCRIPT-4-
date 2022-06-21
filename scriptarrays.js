document.getElementById("funcion1").onclick = uno;
document.getElementById("funcion2").onclick = dos;
document.getElementById("funcion3").onclick = tres;



// 1. Crear un array con números del 1 al 8, luego agregar el número 9 al final, 
// cambiar el número 5 por un 53 y el 7 por un 77.


function uno () {
let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
console.log (numeros.lenght);


numeros [numeros.length]= 9; 
//numeros.push (9); 
//numeros [8] = 9 

numeros [4]= 53;

numeros [6] =77; 

console. log (numeros);
alert ("El resultado se muestra por consola.")
}



//let vector = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//    if(vector [i] = 5) vector[i] = 1;
//}

// 2. Recorrer el array del punto 1 y mostrar un mensaje sólo si el número es par. Por ejemplo: 2 es un número par.

function dos () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
    for ( let  i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){
        console.log (numeros[i] + " es un número par");        
          } 
    } 
    }
    alert ("El resultado se muestra por consola.")



/*opcional 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let numerosFiltrados = numeros.filter (function (num){
if (num % 2 == 0){
      console.log (num + " es un número par");
        }
})*/


// 3. Recorrer el array del punto 1 y generar un nuevo array filtrado solo con los números mayores a 5 y menores a 60.

function tres () {
let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const numerosFiltrados = numeros.filter (function (numeros ){
    if (numeros > 5 && numeros < 60) {
        return "true"
    }  
} ); 
console.log (numerosFiltrados)
alert ("El resultado se muestra por consola.")
}
