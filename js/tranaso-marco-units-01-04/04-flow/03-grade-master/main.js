function assignGrade(score){
    let message;
    switch (score){
        case 10:
        message = 'A';
        break;
        case 9:
        message = 'B';
        break;
        case 8:
        message = 'C';
        break;
        case 7:
        message = 'D';
        break;
        case 6:
        message = 'E';
        break;
    }
    console.log(message);
}
assignGrade(10)
assignGrade(8)
assignGrade(7)