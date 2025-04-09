// Refactored Error Handling Example
function calculateDiscount(user) {
    // Check for null user
    if (!user) {
        return "Error: No user provided";
    }

    //  Validate age
    if (typeof user.age !== "number" || user.age < 0) {
        return "Error: Invalid age";
    }

    // Calculate discount
    if (user.age > 60) {
        return 20;
    } else if (user.age > 30) {
        return 10;
    } else {
        return 5;
    }
}