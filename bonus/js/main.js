// BONUS

// variables

const wrapper = document.getElementById("container");

// Stampare FizzBuzz nel container

for (let i = 1; i <= 100; i++){
        
    const text = document.createElement('div');
    text.classList.add('square');
    wrapper.append(text);


    if (i % 3 == 0 && i % 5 == 0) { // Condizione per cui i multipli di 3 E 5 risultino in console come "FizzBuzz"

        console.log('FizzBuzz');
        text.append('FizzBuzz');
        text.classList.add('fizzbuzz')

    } else if (i % 3 == 0) { // Condizione per cui i multipli di 3 risultino in console come "Fizz"

        console.log('Fizz');
        text.append('Fizz');
        text.classList.add('fizz')
    
    } else if (i % 5 == 0 ) { // Condizione per cui i multipli di 5 risultino in console come "Buzz"
        
        console.log('Buzz');
        text.append('Buzz');
        text.classList.add('buzz')

    
    } else { // Condizione standard
        
        console.log('Iterazione #' , i);
        text.append(i);

    }    
  
}