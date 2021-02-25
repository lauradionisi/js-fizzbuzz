// scrivi un programma che stampi i numeri da 1 a 100
// utilizzare il resto-modulo %

for (var i = 1; i <= 100; i++) {

// scrivere FizzBuzz per i multipli di 3 && 5

if (i % 3 == 0 && i % 5 == 0) {
 console.log("FizzBuzz!");
}
// scrivere Buzz per i multipli di 5

else if (i % 5 == 0) {
console.log("buzz");
}

// scrivere Fizz per i multipli di 3 
else if (i % 3 == 0) {
 console.log("fizz");
}

else {
 console.log(i);
}
}

