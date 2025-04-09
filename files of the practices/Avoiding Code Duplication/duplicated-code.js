// Code with Duplication
function calculateDiscount(user) {
    if (!user) {
        console.log("No user");
        console.log("Logging: Error - No user provided");
        const logTime = new Date();
        return "Error: No user provided";
    }
    if (typeof user.age !== "number" || user.age < 0) {
        console.log("Invalid age");
        console.log("Logging: Error - Invalid age");
        const logTime = new Date();
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
    console.log("Logging: Discount calculated for user");
    const logTime = new Date();
    return discount;
}