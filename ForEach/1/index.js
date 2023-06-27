let Arreglo5= [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
// a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
// b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach

for (let index = 0; index < Arreglo5.length; index++) {
    for (let index1 = 0; index1< Arreglo5[index].length; index1++) {
console.log(Arreglo5[index][index1]);        
    }   
}
//parte b
console.log("segunda parte");
let index2
let index3
Arreglo5.forEach(index2 => {
    index2.forEach(index3 =>{
        console.log(index3);
    })
}
    
    )