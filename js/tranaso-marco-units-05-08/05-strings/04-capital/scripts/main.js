function capital(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capital("hello world"));

function capitalAllWords(str) {
    let words = str.split(" "); 
    let result = " ";
    
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result += " ";
        console.log(words.length)
    }
    
    return result;
}

console.log(capitalAllWords("hello world"));