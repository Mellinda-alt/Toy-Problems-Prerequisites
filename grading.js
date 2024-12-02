function calculateGrade(mark) {
    if(mark < 0 || mark > 100 || isNaN(mark) || typeof mark !== 
    'number'){
        return 'Invalid Mark.'
    } else if (mark > 79){
        return 'A';
    } else if (mark >= 60){
        return 'B';
    } else if(mark >= 59){
        return 'C';
    } else if (mark >= 40){
        return 'D';
    } else {
        return 'E';
    }
}

console.log(calculateGrade(80));
