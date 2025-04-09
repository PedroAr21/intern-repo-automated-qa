// Poorly Commented Code

function calculateDiscount(user) {
    // Check user
    if (!user) {
        return "Error: No user provided";
    }

    // Check age
    if (typeof user.age !== "number" || user.age < 0) {
        return "Error: Invalid age";
    }

    // Calculate
    if (user.age > 60) {
        return 20;
    } else if (user.age > 30) {
        return 10;
    } else {
        return 5;
    }
}

// Improved Comments

// Calculates a user's discount based on age, with error handling for invalid inputs
function calculateDiscount(user) {
    // Ensure user exists to avoid null reference errors
    if (!user) {
        return "Error: No user provided";
    }

    // Validate age to prevent incorrect calculations
    if (typeof user.age !== "number" || user.age < 0) {
        return "Error: Invalid age";
    }

    // Apply discount: 20% for seniors (over 60), 10% for adults (over 30), 5% otherwise
    if (user.age > 60) {
        return 20;
    } else if (user.age > 30) {
        return 10;
    } else {
        return 5;
    }
}