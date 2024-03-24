// Function to calculate points based on speed
function calculateDemeritPoints(speed) {
    // Define the speed limit and demerit point increment
    const speedLimit = 70;
    const demeritPointIncrement = 5;

    // Calculate the speed above the limit
    const speedAboveLimit = speed - speedLimit;

    // Check if the speed is within the limit
    if (speed <= speedLimit) {
        // If within the limit, print "Ok"
        console.log("Ok");
    } else {
        // If over the limit, calculate demerit points
        const demeritPoints = Math.floor(speedAboveLimit / demeritPointIncrement);
        // Print the number of demerit points
        console.log("Points:", demeritPoints);
    }

    // Check if demerit points exceed the limit for license suspension
    if (speedAboveLimit / demeritPointIncrement > 12) {
        // If exceeding the limit, print "License suspended"
        console.log("License suspended");
    }
}

