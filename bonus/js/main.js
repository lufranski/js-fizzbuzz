// BONUS

// variables

const wrapper = document.getElementById("container");

// Stampare FizzBuzz nel container

for (let i = 1; i <= 100; i++){
    
    
    const element = document.createElement('div');

    if (i % 3 == 0 && i % 5 == 0) { // Condizione per cui i multipli di 3 E 5 risultino in console come "FizzBuzz"

        console.log('FizzBuzz');
        wrapper.append('FizzBuzz');

    } else if (i % 3 == 0) { // Condizione per cui i multipli di 3 risultino in console come "Fizz"

        console.log('Fizz');
        wrapper.append('Fizz');
    
    } else if (i % 5 == 0 ) { // Condizione per cui i multipli di 5 risultino in console come "Buzz"
        
        console.log('Buzz');
        wrapper.append('Buzz');
    
    } else { // Condizione standard
        
        console.log('Iterazione #' , i);
        element.append(i);
        wrapper.append(element);

    }    
  
}