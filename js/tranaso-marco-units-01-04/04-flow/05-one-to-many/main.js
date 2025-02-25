function oneToMany(noun,number){
    if (number>1)
    {
    switch (noun){
        case "sheep":
        console.log(`${number} sheep`);
        break;
        case "geese":
        console.log(`${number} goose`);
        break;
        default:
        console.log(`${number} ${noun+'s'}`);
        break;
    }
}
    else{
        console.log(`${number} ${noun}`);
    }

}
oneToMany("sheep",2)
oneToMany("dog",1)
oneToMany("dog",2)
oneToMany("geese",2)