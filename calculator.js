// 5-> 1 point 
// Math.floor(1.3)
// 12 point -> suspended


carSpeed(100);

function carSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed > speedLimit + kmPerPoint){
        console.log("Ok");
        return;
        
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12){
        console.log("License Suspended");
    } else {
        console.log("Points:", points);
        
    }
}