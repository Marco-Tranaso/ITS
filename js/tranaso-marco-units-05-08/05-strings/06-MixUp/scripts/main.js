function mixUp(str1,str2){
    return str1.replace(str1.charAt(0), str2.charAt(0) ) + " " + str2.replace(str2.charAt(0), str1.charAt(0));
}
console.log(mixUp("mix", "pod"));