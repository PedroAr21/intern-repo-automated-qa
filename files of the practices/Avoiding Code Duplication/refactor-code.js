// Logs a message with a timestamp
function logMessage(message) {
    console.log("Logging: " + message);
    const logTime = new Date();
}

// Calculates a user's discount with error handling
function calculateDiscount(user) {
    if (!user) {
        console.log("No user");
        logMessage("Error - No user provided");
        return "Error: No user provided";
    }
    if (typeof user.age !== "number" || user.age < 0) {
        console.log("Invalid age");
        logMessage("Error - Invalid age");
        return "Error: Invalid age";
    }
    let discount;
    if (user.age > 60) {
        discount = 20;
    } else if (user.age > 30) {
        discount = 10;
    } else {
        discount = 5;
    }
    console.log("Discount calculated: " + discount);
    logMessage("Discount calculated for user");
    return discount;
}