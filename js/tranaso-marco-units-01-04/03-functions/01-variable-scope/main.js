
let globalNumber = 10;

function addNumbers(localNumber) {
    let sum = globalNumber + localNumber;
    console.log(`Global number ${globalNumber}`);
    console.log(`Local number ${localNumber}`);
    console.log(`Sum ${sum}`);
    return sum;
}

addNumbers(5);  
addNumbers(15); 
addNumbers(20); 