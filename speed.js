const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function speedDetector(speed) {
    if (speed < 0 || isNaN(speed)) {
        console.log("invalid speed");
        return;
        
    }

    const speedLimit = 70;

    const demeritPoints = ((speed - speedLimit) / 5);


    if(speed < 70){
        console.log(`Ok`);
        
    } else if (demeritPoints >= 12){
        console.log(`License suspended`);
        
    } else {
        console.log(`Points ${demeritPoints}`);
        
    }
    
};

rl.question("What speed: ", (input) =>{
    const speed = parseFloat(input);
    speedDetector(speed);
    rl.close();
})
