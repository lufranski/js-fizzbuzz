// FIZZBUZZ

// Scrivere un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    
    
    if (i % 3 == 0 && i % 5 == 0) { // Condizione per cui i multipli di 3 E 5 risultino in console come "FizzBuzz"

        console.log('FizzBuzz');

    } else if (i % 5 == 0) { // Condizione per cui i multipli di 5 risultino in console come "Buzz"

        console.log('Buzz');
    
    } else if (i % 3 == 0 ) { // Condizione per cui i multipli di 3 risultino in console come "Fizz"
        
        console.log('Fizz');
    
    } else { // Condizione standard
        
        console.log('Iterazione #' , i);
    
    }    
  
}

