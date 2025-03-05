function printReverse(string){
    console.log(string.split("").reverse().join(""));
}

printReverse("ciao")


// opzione 2

// function printReverse(string) {
//     let reversedString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i];
//     }
//     console.log(reversedString);
// }

// printReverse("ciao"); 
