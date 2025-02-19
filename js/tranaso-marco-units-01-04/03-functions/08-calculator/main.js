function Calculator(num){
    half_num=num/2;
    square_num=half_num**2;
    area_circle=(square_num**2)*Math.PI;
    percentage_num=(area_circle/square_num)*100;

    console.log(`The half number is ${half_num}`);
    console.log(`The squared number is ${square_num}`);
    console.log(`The area of the cirle is ${area_circle}`);
    console.log(`The percentage area is of the squared result is ${percentage_num}%`);

}

Calculator(3)