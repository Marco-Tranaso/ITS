function merger(a, b) {
    if (typeof a==="number" && typeof b==="number") {
        return a + b;
    } 
    if (typeof a==="string" && typeof b==="string") {
        return a + b;
    }
    return null;
}
console.log(merger(5, 10));        
console.log(merger("Hello, ","World!"));  
console.log(merger(3,"testo"));    
console.log(merger("123", "456")); 
console.log(merger(true,false));  
console.log(merger(7.5,2.5));        
