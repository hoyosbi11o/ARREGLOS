let Arreglo4= [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];
// a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
// b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
// c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
// d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
// e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
// f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo
Arreglo4[1][1]="?"
console.log(Arreglo4[1][1]);
Arreglo4[3][1]=9
console.log(Arreglo4[3][1]);
Arreglo4[0][0]="¡"
console.log(Arreglo4[0][0]);
Arreglo4[1].split(2, 1)
Arreglo4[0].split(2,1)
Arreglo4[3].split(2,1)