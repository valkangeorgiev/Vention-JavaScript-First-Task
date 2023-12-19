let pin = 1909;

for (let i = 1; i <= 4 ; i++) {
    
    let guess = prompt("Please make your guess");

    if(guess == pin){

        console.log('That was correct')
        break;
    } 
    else
    {
        console.log(`Sorry, that was wrong. Please try again. You have ${i} more tries.`)
    }
    
}
