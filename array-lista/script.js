console.log('js ok');

const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino' , 'cocomero', 'limone', 'fragola'];
console.log(frigo);


frigo.push("pesca");

console.log(frigo);

let isCocomero = false;

for (i = 0; i < frigo.length && isCocomero === false; i++){

    if (frigo[i] === "cocomero"){
        isCocomero = true;
    }



}


if (isCocomero === true){
    console.log("Cocomero Trovato");

}else{
    console.log("cocomero non trovato");
}

