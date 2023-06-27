let Arreglo6= [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ]
    // a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
    // b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach

    for (let index = 0; index < Arreglo6.length; index++) {
        for (let index2 = 0; index2 < Arreglo6[index].length; index2++) {
            for (let index3 = 0; index3 < Arreglo6[index][index2].length; index3++) {
console.log(Arreglo6[index] [index2] [index3]);                
            }
        }
        
    }
    
console.log("segunda parte");
let i
let j
let a 

    Arreglo6.forEach(i=>{
        i.forEach(j=>{
            j.forEach(a=>{
                console.log(a);
            })
        })
    })