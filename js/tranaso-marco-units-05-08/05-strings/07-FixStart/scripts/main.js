    function fixStart(string){
        string1=string.slice(1)
        return string.charAt(0) + string1.replaceAll("a", "*");
    }

    console.log(fixStart("babble"))

