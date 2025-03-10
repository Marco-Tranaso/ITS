function verbing(string) {
    if (string.endsWith("ing")) {
        return string + "ly";
    }
    if (string.length > 3) {
        return string + "ing";
    }
    else {
        return string;
    }
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));