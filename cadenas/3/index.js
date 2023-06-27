let cadena3="Javascript es genial"
let contador=0;
// .Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
// compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
for (let index = 0; index < cadena3.length; index++) {
if (cadena3[index]===" ") {
    contador=contador+1
}}
contador++
console.log('su cadena contiene ',contador," letras");