console.log('js ok');


// Scaletta

/*

- chiediamo all'utente in numero di elementi da contenere
- creiamo un array 
- inseriamo nell'array il numero di elementi che l'utente ci ha chiesto
- chiediamo all'utente il numero di elementi dell'array che dobbiamo stampare
- stampiamo il numero degli elementi in console



*/


const numOfElements = parseInt(prompt("Quanti elementi vuoi che contenga l'array?", "20")); 

const numOfShowedElement = parseInt(prompt("Quanti elementi vuoi che stampi in console", "3")); 

let array = [];

for (i = 0; i < numOfElements; i++){

    array.push(Math.floor(Math.random() * 100) + 1);

}
console.log(array);



console.log(array.slice(-numOfShowedElement));

