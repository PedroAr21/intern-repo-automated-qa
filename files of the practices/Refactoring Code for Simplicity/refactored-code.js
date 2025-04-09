// Calculates discount for eligible users based on age
function checkDiscountEligibility(user) {
    const ADMIN_ROLE = "admin";
    const MEMBER_ROLE = "member";

    // Guard clauses for invalid inputs
    if (!user) {
        console.log("No user");
        return 0;
    }
    if (typeof user.age !== "number" || user.age < 0) {
        console.log("Invalid age");
        return 0;
    }
    if (!user.role) {
        console.log("No role");
        return 0;
    }
    if (user.role !== ADMIN_ROLE && user.role !== MEMBER_ROLE) {
        console.log("Invalid role");
        return 0;
    }
    if (!user.isActive) {
        console.log("User not active");
        return 0;
    }

    // Calculate discount based on age
    let discount = user.age > 60 ? 20 : user.age > 30 ? 10 : 5;
    console.log("Discount calculated");
    return discount;
}