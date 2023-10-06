
// - creiamo un ciclo che stampi i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
    let n = i + 1;
    // console.log(n)
    
// n % 3 === 0 && n % 5 === 0
    if (n % 15 === 0) {
        console.log('fizzbuzz');
    } else if ( n % 3 === 0) {
        console.log('fizz');
    } else if (n % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(n);
    }  

    

}