function useful() {
    console.log("This function does something useful!");
}

let id = setTimeout(useful, 10000);

function cancelUseful() {
    clearTimeout(id);
    console.log("Function cancelled");
}

setTimeout(cancelUseful, 5000);
