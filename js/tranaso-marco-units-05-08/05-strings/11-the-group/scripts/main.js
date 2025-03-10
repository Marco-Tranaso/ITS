function groupCheck(group,name){
    console.log(`${name} ${group.includes(name) ? "IS" : "is NOT"} part of the group`);
}
let group = "Mary, James and John";
let oldGuy="James";
let newGuy="Philip"
groupCheck(group,oldGuy)
groupCheck(group,newGuy)