function squareNumber(number){
    let number_squared=number**2;
    console.log(`The result of squaring the ${number} is ${number_squared}`);
}
squareNumber(2);

function halfNumber(number){
    let half_number=number/2;
    console.log(`The result of the half number of ${number} is ${half_number}`);
}
halfNumber(2);

function percentOf(n1,n2){
    let percentage=n1/n2*100;
    console.log(`${n1} is ${percentage}% of ${n2}`);
}
percentOf(2,4);

function areaOfCircle(radius){
    let area=(radius**2)*Math.PI;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
}
areaOfCircle(2);