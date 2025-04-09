// Validates user input and returns status
function validateUser(user) {
    if (!user) {
        console.log("No user");
        return "Error: No user";
    }
    if (typeof user.age !== "number" || user.age < 0) {
        console.log("Invalid age");
        return "Error: Invalid age";
    }
    if (user.role !== "admin" && user.role !== "member") {
        console.log("Invalid role");
        return "Error: Invalid role";
    }
    if (!user.isActive) {
        console.log("User not active");
        return "Error: Not active";
    }
    return "Valid";
}

// Calculates discount based on age
function calculateDiscount(age) {
    if (age > 60) return 20;
    if (age > 30) return 10;
    return 5;
}

// Applies discount and updates user status
function applyDiscount(user, discount) {
    console.log("Discount calculated: " + discount);
    if (discount > 0) {
        console.log("Applying discount: " + discount);
        user.status = "discounted";
    } else {
        console.log("No discount applied");
    }
}

// Logs the user action with a timestamp
function logUserAction(discount) {
    console.log("Logging: User processed with discount " + discount);
    const logTime = new Date();
}

// Processes user profile by delegating tasks
function processUserProfile(user) {
    const validationResult = validateUser(user);
    if (validationResult !== "Valid") {
        return validationResult;
    }
    const discount = calculateDiscount(user.age);
    applyDiscount(user, discount);
    logUserAction(discount);
    return "User processed with discount: " + discount;
}