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
    return message;
}

for (let i = 60; i <= 100; i++) {
    let grade = assignGrade(Math.floor(i / 10));
    console.log(`For ${i}, you got a ${grade}.`);
}
