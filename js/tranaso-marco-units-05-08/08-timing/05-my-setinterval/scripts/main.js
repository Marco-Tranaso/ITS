function mySetInterval(callback, delay) {
    let count = 0;

    function doIt() {
        if (count < 15) {
            callback();
            count++;
            setTimeout(doIt, delay);
        }
    }

    doIt();
}

mySetInterval(function() {
    console.log("Esecuzione numero:", new Date().toLocaleTimeString());
}, 1000);
