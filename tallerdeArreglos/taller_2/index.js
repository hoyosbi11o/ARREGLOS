// Imprima el número de elementos de los siguientes arreglos usando la propiedad length
console.log("parte 1");
console.log("A");
let a= [1,2,3,4,5,6,7,8,9,10] 
console.log(a.length);
console.log("B");
let b= []
console.log(b.length);
console.log("C");
let c= ["a", true, -1] 
console.log(c.length);
console.log("D");
let d= [2, 4, 5, 7, 1, 34, 89, 0]
console.log(d.length);
// 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
console.log("parte 2");
let nuevo=[1,2,3,4,5,6,7,8,9,10];
// a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo
nuevo.push(345);
console.log(nuevo);
//  b) Agregue el elemento true usando push y verifique el cambio en el arreglo
console.log("B");
nuevo.push(true);
console.log(nuevo);
// c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo
console.log("C");
nuevo.push("ADSO");
console.log(nuevo);
//  d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
console.log("D");
nuevo.push(455,78,false);
console.log(nuevo);
// e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo
console.log("E");
nuevo.push("ABcd", true, 21);
console.log(nuevo);
console.log("Parte 3");
    // 3. Use splice para hacer las eliminaciones correspondientes:
    // a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
    console.log("A");
    let ARREGLO=[1, 2, false]
    ARREGLO.splice(2,1)
    console.log(ARREGLO);
    // b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
    console.log("B");
    let ARREGLO2=[99, false, 17, 45, 7, "abc", 78]
    ARREGLO2.splice(6,1)
    console.log(ARREGLO2);
    // c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
    console.log("C");
    let ARREGLO3=[-1, -55, -89- 30, 1000]
    ARREGLO3.splice(1,1)
    console.log(ARREGLO3);
    // d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un sólo llamado
    console.log("D");
    let ARREGLO4= ["zxc", 767, 1298, true, false, [3], 1]
    ARREGLO4.splice(1,4)
    console.log(ARREGLO4);
    // e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado
    console.log("E");
    let ARREGLO5= [34, ["q"], 67, 1, 99, 1/2]
    ARREGLO5.splice(3,2)
    console.log(ARREGLO5);
    console.log("Parte 4");
    // 4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
    let ar = [2, 6, 9, 0, 5];
    let br =[]
    for (let index = 0; index < ar.length; index++) {
        br.push(ar[index])}
        console.log("La copia ",b," el original ",ar);
// 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.
console.log("Parte 5");
let brr = ["abc", 4, 88, 99];
let ba=["abc", 4, 88, 99];
let ingreso2=prompt("Ingrese lo que desee") ; 
brr.push(ingreso2);
console.log("Origicial ",ba," la modificada ",br); 

// 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e
// imprimir
// todos sus elementos
console.log("Parte 6");
let arreglO= ["x", "y", "z", 0, 1, 2, 3] ;
for (let index = 0; index < arreglO.length; index++) {
console.log(arreglO[index]);
}
// 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir
// todos sus elementos
// aumentados en 1
console.log("Parte 7");
let Arreglo= [1, 17, 8, 9, 3]
let contador
for (let index = 0; index < Arreglo.length; index++) {
    contador=Arreglo[index]+1
    console.log(contador);   
}
// 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
console.log("Parte 8");
let digitacionArreglo=prompt("Ingrese lo que desee")
function PorcesoArreglos(digitacionArreglo) {
    console.log("La longitud de su cadena es: ",digitacionArreglo.length);
}
let result=PorcesoArreglos(digitacionArreglo)
// 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento
// del siguiente arreglo
// ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
console.log("Parte 9");
let arrEglo= ["a", "b", "c", "d", "e", "f", "g"];
let IngresoLetra=prompt("Ingrese alguna letra del abecedario")
for (let index3 = 0; index3 < arrEglo.length; index3++) {
if (IngresoLetra===arrEglo[index3]) {
console.log("Su letra ",IngresoLetra, " esta en nuestra base de datos");
}
}

