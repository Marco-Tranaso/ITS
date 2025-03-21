let string = "Abracadabra";
let string_to_array = Array.from(string); 
string_to_array.splice(3, 1, "X"); 
let new_str = string_to_array.join(""); 
console.log(new_str);
