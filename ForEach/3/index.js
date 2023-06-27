let arreglo7= [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
// a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
// forEach.
// b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
// para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach
for (let index = 0; index < arreglo7.length; index++) {
for (let index2 = 0; index2 < arreglo7[index].length; index2++) {
if (arreglo7[index][index2]%2!=0 ) {
    console.log(arreglo7[index][index2]);
}
}    
}
console.log("segunda parte");
let acumuladora=0;
let r
let f
arreglo7.forEach(r=>{
    r.forEach(f=>{
        acumuladora=acumuladora+f
        console.log(acumuladora);
    })
})