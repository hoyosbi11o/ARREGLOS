 //SECCION PRIMERA
 console.log("PRIMERA SECCION");
 console.log('parte 1: ');
 let j = [200, -100, 45, 78, 32] 
//   imprimir los elementos de indice 2 y 4
console.log(j[2]);
console.log(j[4]);
console.log('parte 2: ');
let f = ["ab", "cd", "ef", "gh"];
//  imprimir los elementos cd y gh.
console.log(f[1]);
console.log(f[3]);
console.log('parte 3: ');
let aux = [10, true, "k200", 20.7]
//  imprimir todos sus elementos usando la
// operacion de recorrido con foreach
let z
aux.forEach(z=>{
    console.log(z);
})
console.log('parte 4: ');
let k = [17, 4, 64, 79, 109, 112] 
//  recorrer cada elemento con foreach e
// imprimir los elementos que sean números impares
let p
k.forEach(p=>{
    if (p%2!=0) {
        console.log(p);
    }
})
console.log('parte 5: ');
let h = [true, true, false,true, false];
//  cambiar el elemento de índice 2 por
// true, cambiar el elemento de índice 3 por false.
h[2]=true
console.log(h[2]);
h[3]=false
console.log(h[3]);
console.log('parte 6: ');
let w = ["wc", "jp", "zx", "qr"];
// cambiar el elemento "jp" por true, cambiar
// el elemento "qr" por 30
w[1]=true
console.log(w[1]);
w[3]=30
console.log(w[3]);
console.log("parte 7: ");
// 7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
// imprimiendo cada uno de sus elementos.
let arreglo8= [2, 5, 7, 9];
for (let index = 0; index < arreglo8.length; index++) {
    console.log(arreglo8[index]);    
}
console.log("parte 8: ");
// 8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
// arreglo.
let arregloVacio=[]
let ingreso=prompt("Ingrese lo que desee") ; 
arregloVacio.push(ingreso);
for (let index2 = 0; index2 < arregloVacio.length; index2++) {  
    console.log("Palabra ",arregloVacio[index2]," tiene ",arregloVacio[index2].length, "letras"); 
    }
    console.log("parte 9: ");
// 9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]

let arreglo10= [70, 44, 54, 89, 100];
let resultado=arreglo10.indexOf(44)
let resultado1=arreglo10.indexOf(89)
let resultado2=arreglo10.indexOf(70)
console.log(resultado,resultado1,resultado2);

//SEGUNDA SECCION
console.log("SEGUNDA SECCION");
console.log("Parte 1");
    // imprima el número de elementos de los siguientes arreglos usando la propiedad length
    console.log("A");
 let arreglo1=[1,2,3,4,5,6,7,8,9,10]
 console.log(arreglo1.length);
 console.log("B");
let arreglo2= [] 
console.log(arreglo2.length);
console.log("C");
let arreglo3= ["a", true, -1] 
console.log(arreglo3.length);
console.log("D");
let arreglo4=[2, 4, 5, 7, 1, 34, 89, 0]
console.log(arreglo4.length);
console.log("Parte 2");
// 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
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
    let b =[]
    for (let index = 0; index < ar.length; index++) {
        b.push(ar[index])
    }
    console.log("La copia ",b," el original ",ar);
    // 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.
     console.log("Parte 5");
    let br = ["abc", 4, 88, 99];
    let ba=["abc", 4, 88, 99];
    let ingreso2=prompt("Ingrese lo que desee") ; 
    br.push(ingreso2);
    console.log("Origicial ",ba," la modificada ",br); 

    // 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos
    console.log("Parte 6");
    let arreglO= ["x", "y", "z", 0, 1, 2, 3] ;
    for (let index = 0; index < arreglO.length; index++) {
console.log(arreglO[index]);
    }
    // 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e
    // imprimir todos sus elementos aumentados en 1
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

    // 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
    console.log("Parte 9");
    let arrEglo= ["a", "b", "c", "d", "e", "f", "g"];
    let IngresoLetra=prompt("Ingrese alguna letra del abecedario")
    for (let index3 = 0; index3 < arrEglo.length; index3++) {
if (IngresoLetra===arrEglo[index3]) {
    console.log("Su letra ",IngresoLetra, " esta en nuestra base de datos");
}
 }

//SECCION TRES
console.log("SECCION TRES");
let  ARreglo= [3, 50, 70, 600, 40];
// 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
    console.log("Parte 1");
let a;
ARreglo.forEach(a =>{
    console.log(a);
})
// 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
    console.log("Parte 2");
    let be;
    let contador2;
ARreglo.forEach(be =>{
contador=be*3
console.log(contador);
})
// 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
console.log("Parte 3");
let indice=0
while (indice<ARreglo.length) {
    console.log(ARreglo[indice]);
    indice++
}
// 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares
console.log("Parte 4");
for (let index = 0; index < ARreglo.length; index++) {
if (ARreglo[index]%2===0) {
    console.log(ARreglo[index]);
}   
}
// 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo
console.log("Parte 5");
let nombre=["Maria", "Pedro", "Juan", "Pablo", "Diana"];
for (let index = 0; index < nombre.length; index++) {
if (nombre[index].includes("Juan")) {
console.log("Contiene el nombre Juan");
}
}
// 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria
console.log("Parte 6");
let nombre2= ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] ;
let contador6=0;
for (let index = 0; index < nombre2.length; index++) {
if (nombre2[index].includes("Maria")) {
    contador6=contador6+1

}}    console.log("El nombre Maria esta: ",contador6);
// 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora
console.log("Parte 7");
let o;
let contador12=0;
let recorrido= [15, 7, 9, 12, 1];
recorrido.forEach(o =>{
contador12=contador12+o;
})
console.log("El resultado de la suma es: ",contador12)
// 8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la variable contadora
console.log("Parte 8");
let q;
let contador13=0;
let recorrido2=[-2, 8, 99, 1, 7];
recorrido2.forEach(q=>{
    q=q*q
    console.log(q);
    contador13=contador13+q
})
console.log("El resultado de la suma es: ",contador13)
// 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora.
console.log("Parte 9");
let letras = [true, true, false, true, false, false];
let indicee=0;
let suma=0
while (indicee<letras.length) {
    indicee++
    if (letras[indicee]===false) {
        suma=suma+1
    }
}
console.log("El arreglo contiene ",suma,"veces la palabra false")
// 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso.
console.log("Parte 10");
let adso= ["z", "p", "s", "z", "o", "b", "a", "w","d"];
let adso2="adso"
for (let indexx = 0; indexx < adso2.length; indexx++) {  
for (let index = 0; index < adso.length; index++) {
if (adso[index].includes(adso2[indexx])) {
    console.log("La cadena contiene la palabra ADSO");
}
}
}

// 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...)
console.log("Parte 11");
let multiplicados=[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let cinco
for (let index = 0; index < multiplicados.length; index++) {
cinco=multiplicados[index]*5
console.log("La multiplicacion es ",multiplicados[index],"*5, y el resultado es ",cinco);    
}
// 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar cuales numeros con consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.
console.log("Parte 12");
let numeroContinuos=[5, 7, 90, 2, 5, 3, 8, 99];
let aa
let bb
numeroContinuos.forEach((aa)=>{
numeroContinuos.forEach((bb)=>{
    if (aa+1==bb) {
        console.log(aa,bb);
    }
})
})

       
    