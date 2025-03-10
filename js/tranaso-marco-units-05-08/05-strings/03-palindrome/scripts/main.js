function isPalindrome(string1){
    let string2=string1.split("").reverse().join("");
    return string2==string1;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("madame"));