// FIZZBUZZ

// Scrivere un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    
    if (i % 3 > 0 && i % 5 > 0) {  
        
        console.log('Iterazione #' , i);

    } else if (i % 3 == 0) { // Condizione per cui i multipli di 3 risultino in console come "Fizz"

        console.log('Fizz');

    }

}

