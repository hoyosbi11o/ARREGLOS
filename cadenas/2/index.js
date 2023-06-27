let cadena2= "Somos SENA";
// c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
// d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
// variable contadora para contar el número de veces que se encuentra la letra “o”

for (let index = 0; index < cadena2.length; index++) {
    if (cadena2[index].includes("E")) {
        console.log("su palabra contiene",cadena2[7]);
    }   
}
console.log("segunda parte");
let contador=0
for (let index2 = 0; index2 < cadena2.length; index2++) {
    if (cadena2[index2].includes("o")) {
        contador=contador+1
    }    
}console.log('su cadena contiene ',contador," O");