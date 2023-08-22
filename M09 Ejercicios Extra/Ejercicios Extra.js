/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
var arrayNuevo = [];
for(var clave in objeto){
   arrayNuevo.push([clave, objeto[clave]])
}
return arrayNuevo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // STR "a  l  a  l"  4
   //KEY   0  1  2  3
   // {a: 2, l: 2}
   var objeto = {};

   for (var i = 0; i < string.length ; i++){
      if (objeto.hasOwnProperty(string[i])){   //acá decimos que si el valor de la vuelta de ireracion ya esta en el objeto que se ejecute el siguiente bucle
         objeto[string[i]] = objeto[string[i]] + 1;  //acá decimos que si "a" es = a "a" le sumemos 1
      }else {
         objeto[string[i]] = 1;  // de lo contrario que el valor de la iteracion sea igual a 1
      }
   }
   return objeto;
}

//var string = "soyHENRY"
//contenedorMin = soy
//contenedorMay = HENRY
function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
var mayuscula = "";
var minuscula = "";

for (var i = 0; i < string.length; i++){
   if(string[i] === string[i].toLowerCase()){  // acá decimos si, el valor de la iteracion que vendria a ser s es igual al valor de la iteracion s pero en minuscula
      minuscula = minuscula + string[i]    // si es asi, ponerlo en minuscula
   } else {
      mayuscula = mayuscula + string[i]  // de lo contrario poner en mayusculas
   }
}
return mayuscula + minuscula;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseToArray = frase.split(" ");             // metemos en una variable la frase convertida en array
   var arrayFinal = fraseToArray.map(function(ele){ // usamos map para que devuelva el elemento con lo que le hicimos al arrayFinal
      return ele.split("").reverse().join("");    // acá estamos separando el elemento ej: "the" a "t" "h" "e", con el reverse estamos dando vuelva la palabra y con el join juntamos las letras de nuevo quedando eht.
   });
   return arrayFinal.join(" ");  // acá el join separa las palabras recividas por arrayFinal.
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numString = numero.toString(); //  161 ----  "161"
   var resultado = numString.split("").reverse().join("")  // ["1", "6", "1"] ---- lo dimos vuelta ["1", "6", "1"] ----- "161"
   if(numString === resultado){
      return "Es capicua";
   } else {
      "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var sinAbc = "";  // creamos una var para guardas las letras que no sean abc
   for( var i = 0 ; i < string.length ; i++){  // usamos un buvle for para recorrer la palabra letra por letra
      if(string[i] === "a" || string[i] === "b" || string[i] === "c"){  // decimos que si el valor de str es igual a "a", "b" o "c"
      continue;   // que continue
      } else {   // de lo contrario
         sinAbc +=  string[i];  // pasar el mismo valor
      }
   }
   return sinAbc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
