function processUserProfile(user) {
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
    let discount;
    if (user.age > 60) {
        discount = 20;
    } else if (user.age > 30) {
        discount = 10;
    } else {
        discount = 5;
    }
    console.log("Discount calculated: " + discount);
    if (discount > 0) {
        console.log("Applying discount: " + discount);
        user.status = "discounted";
    } else {
        console.log("No discount applied");
    }
    console.log("Logging: User processed with discount " + discount);
    const logTime = new Date();
    return "User processed with discount: " + discount;
}