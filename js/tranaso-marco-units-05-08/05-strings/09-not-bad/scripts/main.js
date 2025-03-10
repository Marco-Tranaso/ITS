function notBad(string) {
    stringa_normale=string
    if (string.search("not") == -1) {
        console.log(stringa_normale)
    }

    else if (string.search("not") < string.search("bad")) {
        stringa1=string.split(" is ")
        console.log(stringa1[0] + " " + "is good");
    }

}
notBad("This dinner is not that bad")
notBad("This dinner is not so bad")
notBad("This dinner is bad")
notBad("Thr brekfast was so bad")
