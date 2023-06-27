// Dado el arreglo [1,2,3,4,5,6]:
let arregloPrincipal=[1,2,3,4,5,6];
console.log("Parte 1");
console.log("A");
// a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
let indexx=0
while (indexx<arregloPrincipal.length) {
    console.log(arregloPrincipal[indexx]);
    indexx++
}
console.log("B");
// b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
for (let index = 0; index < arregloPrincipal.length; index++) {
    console.log(arregloPrincipal[index]);
}
console.log("C");
// c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
let arregloCopia=[]
let sumaa
for (let index = 0; index < arregloPrincipal.length; index++) {
    sumaa=arregloPrincipal[index]+1
    arregloCopia.push(sumaa)    
}
for (let index2 = 0; index2 < arregloCopia.length; index2++) {
console.log(arregloCopia[index2]);    
}
console.log("D");
// d) Calcular el promedio de todos los elementos del arreglo
let contador=0
let division=0
for (let index = 0; index < arregloPrincipal.length; index++) {
    contador=contador +arregloPrincipal[index]  
    division=contador/arregloPrincipal.length
}
console.log(division);
console.log("Parte 2");
// 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
// cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
// (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
// elementos del arreglo.
let cadenaADN=['AATGAAC', 'GTTTTTC', 'GGTAAA', 'CCCCATGGG']
let A=""
let G=""
let C=""
let T=""
for (let index = 0; index < cadenaADN.length; index++) {
let Cadena=cadenaADN[index]    
for (let index2 = 0; index2 < Cadena.length; index2++) {
let base=Cadena[index2]
    if (base==='A') {
        A=A+"A"
    }else if (base==='G') {
        G=G+"G"
    }else if (base==='C') {
        C=C+"C"
    }else if (base==='T') {
        T=T+"T"
    }
}
}
console.log("Esta conformada por: ",A);
console.log("Esta conformada por: ",G);
console.log("Esta conformada por: ",C);
console.log("Esta conformada por: ",T);

console.log("Parte 3");
// 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
// elementos del arreglo.
function MenorArreglo() {
alert("Ingrese 4 numeros los cuales usted desee ")
let IngresoNUmero1=parseInt(prompt("primer numero"))
let IngresoNUmero2=parseInt(prompt("segundo numero"))
let IngresoNUmero3=parseInt(prompt("tercer numero"))
let IngresoNUmero4=parseInt(prompt("cuarto numero"))
let ArregloVacio=[]
ArregloVacio.push(IngresoNUmero1,IngresoNUmero2,IngresoNUmero3,IngresoNUmero4)
for (let index22 = 0; index22 < ArregloVacio.length; index22++) {
if (IngresoNUmero1<IngresoNUmero2 && IngresoNUmero1<IngresoNUmero3 && IngresoNUmero1<IngresoNUmero4) {
    console.log("El numero ",IngresoNUmero1, " es el menor de todos los 4 numeros");
}else if (IngresoNUmero2<IngresoNUmero1 && IngresoNUmero2<IngresoNUmero3 && IngresoNUmero2<IngresoNUmero4) {
    console.log("El numero ",IngresoNUmero2, " es el menor de todos los 4 numeros");
}else if (IngresoNUmero3<IngresoNUmero1 && IngresoNUmero3<IngresoNUmero2 && IngresoNUmero3<IngresoNUmero4) {
    console.log("El numero ",IngresoNUmero3, " es el menor de todos los 4 numeros");
}else if (IngresoNUmero4<IngresoNUmero1 && IngresoNUmero4<IngresoNUmero2 && IngresoNUmero4<IngresoNUmero3) {
    console.log("El numero ",IngresoNUmero4, " es el menor de todos los 4 numeros");
}
}
}
MenorArreglo()
// 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
// él.
console.log("Parte 4");
function PrimosNaturales() {
alert("Ingrese 4 numeros los cuales usted desee ")
let IngresoNaturales1=parseFloat(prompt("primer numero"))
let IngresoNaturales2=parseFloat(prompt("Segundo numero"))
let IngresoNaturales3=parseFloat(prompt("tercero numero"))
let IngresoNaturales4=parseFloat(prompt("cuarto numero"))
let ArregloVacio2=[]
ArregloVacio2.push(IngresoNaturales1,IngresoNaturales2,IngresoNaturales3,IngresoNaturales4)
    for (let index33 = 0; index33 < ArregloVacio2.length; index33++) {
        if (ArregloVacio2[index33]%2!=0 ) {
            console.log(ArregloVacio2[index33]);
        }
    }
}
PrimosNaturales()
// 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
// nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
// edad.
console.log("Parte 5");
function IngresoDatos(numeroPersonas) {
    let mayorEdad=[]
    for (let index = 0; index < numeroPersonas; index++) {
        let nombre=prompt("ingrese su nombre ")
        let edad=parseInt(prompt("ingrese su edad "))
        if (edad>=18) {
            mayorEdad.push(nombre)
        }
    }
    return mayorEdad
}
let numeroPersonas=parseInt(prompt("ingrese la cantidad de usuarios"))
let mayoria=IngresoDatos(numeroPersonas)
console.log("las personas mayores de edad son: ",mayoria);
console.log("las personas mayores edad son: ",mayoria.length);
// 6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
// “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
// queden en el arreglo que les corresponde. Use ciclos.
console.log("parte 6");
let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
for (let index = 0; index < valle.length; index++) {
valle.splice(3,1, "Palmira")   
}
for (let index = 0; index < quindio.length; index++) {
quindio.splice(2,1, "Salento")    
}
console.log(valle);
console.log(quindio);


// 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
// “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
// verduras) queden en el arreglo que les corresponde. Use ciclos.
console.log("parte 7");
arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"]
arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"]
for (let index = 0; index < arreglo1.length; index++) {
arreglo1.splice(0,1, "Lechuga")
arreglo1.splice( 2,1, "Perejil")
}
for (let index = 0; index < arreglo2.length; index++) {
    arreglo2.splice(2,1, "Pera")
    arreglo2.splice( 3,1, "Limon")
    
}
console.log(arreglo1);
console.log(arreglo2);
// 8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
// debe pedir al usuario que introduzca el arreglo.
console.log("Parte 8");
function MayorArreglo() {
    alert("Ingrese 4 numeros los cuales usted desee ")
    let IngresoNUmero1=parseInt(prompt("primer numero"))
    let IngresoNUmero2=parseInt(prompt("segundo numero"))
    let IngresoNUmero3=parseInt(prompt("tercer numero"))
    let IngresoNUmero4=parseInt(prompt("cuarto numero"))
    let ArregloVacio=[]
    ArregloVacio.push(IngresoNUmero1,IngresoNUmero2,IngresoNUmero3,IngresoNUmero4)
    for (let index23 = 0; index23 < ArregloVacio.length; index23++) {
    if (IngresoNUmero1>IngresoNUmero2 && IngresoNUmero1>IngresoNUmero3 && IngresoNUmero1>IngresoNUmero4) {
        console.log("El numero ",IngresoNUmero1, " es el mayor de todos los 4 numeros");
    }else if (IngresoNUmero2>IngresoNUmero1 && IngresoNUmero2>IngresoNUmero3 && IngresoNUmero2>IngresoNUmero4) {
        console.log("El numero ",IngresoNUmero2, " es el mayor de todos los 4 numeros");
    }else if (IngresoNUmero3>IngresoNUmero1 && IngresoNUmero3>IngresoNUmero2 && IngresoNUmero3>IngresoNUmero4) {
        console.log("El numero ",IngresoNUmero3, " es el mayor de todos los 4 numeros");
    }else if (IngresoNUmero4>IngresoNUmero1 && IngresoNUmero4>IngresoNUmero2 && IngresoNUmero4>IngresoNUmero3) {
        console.log("El numero ",IngresoNUmero4, " es el mayor de todos los 4 numeros");
    }
    }
    }
    MayorArreglo()
// 9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
// promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.
console.log("Parte 9");
function IngresoNumero() {
let Ingreso1=parseInt(prompt("Ingrese la primera cantidad de numeros que desea"))
let arregloV1=[]
let arregloV2=[]
let acumuladora=0
for (let index = 0; index < Ingreso1; index++) {
    let numero=parseInt(prompt("Ingrese un numero"))   
    acumuladora=acumuladora+numero/Ingreso1
}arregloV1.push(acumuladora)
let Ingreso2=parseInt(prompt("Ingrese la segunda cantidad de numeros que desea"))
let acumuladora2=0
for (let index2 = 0; index2 < Ingreso2; index2++) {
    let numero2=parseInt(prompt("Ingrese un numero"))   
    acumuladora2=acumuladora2+numero2/Ingreso2
}arregloV2.push(acumuladora2)
if (arregloV1>arregloV2) {
    console.log("el arreglos mayor es: ",arregloV1);
}else{
    console.log("el arreglo mayor es: ",arregloV2);
}
}
IngresoNumero()
// 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.
console.log("Parte 10");
function LaC() {
let Nombre=parseInt(prompt("Ingrese la cantidad de nombres que desea "))
let Vacio=[]
for (let index = 0; index < Nombre; index++) {
let nombres=prompt("Ingrse su nombre querido usuario")    
Vacio.push(nombres)
}
let acumuladora=0
for (let index2 = 0; index2 < Vacio.length; index2++) {
for (let index3 = 0; index3 < Vacio[index2].length; index3++) {
    if (Vacio[index2][index3]==="c") {
        acumuladora=acumuladora+1
    }}}   console.log("en los nombres ingresados existen ",acumuladora," C");}
LaC()

// 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
// impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.
function Nimpares() {
let impares=parseInt(prompt("Ingrese la cantidad de numeros que desea "))
let Vaaaa=[]
for (let index = 0; index < impares; index++) {
let ingresoNum=parseInt(prompt("Ingrese un numero"))  
Vaaaa.push(ingresoNum) 
}
for (let index = 0; index < Vaaaa.length; index++) {
if (Vaaaa[index]%2!=0) {
    console.log("Los numeros impares del arreglo son",Vaaaa[index]);
}    
}
}
Nimpares() 
