function printReverse(string){
    return string.split("").reverse().join("");
}
let string = "foobar";
console.log(printReverse(string));

// version 2

// function reverse(str) {
//     let reversedStr = '';
    
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
    
//     return reversedStr;
//   }
  
//   console.log(reverse("foobar"));
  