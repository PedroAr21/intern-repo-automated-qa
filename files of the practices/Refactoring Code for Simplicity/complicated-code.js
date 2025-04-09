// Overly Complicated Code
function checkDiscountEligibility(user) {
    let discount = 0;
    if (user) {
        if (typeof user.age === "number") {
            if (user.age >= 0) {
                if (user.age > 0) {
                    if (user.role) {
                        if (user.role === "admin" || user.role === "member") {
                            if (user.isActive) {
                                if (user.age > 60) {
                                    discount = 20;
                                } else {
                                    if (user.age > 30) {
                                        discount = 10;
                                    } else {
                                        discount = 5;
                                    }
                                }
                                console.log("Discount calculated");
                            } else {
                                console.log("User not active");
                            }
                        } else {
                            console.log("Invalid role");
                        }
                    } else {
                        console.log("No role");
                    }
                } else {
                    console.log("Age is 0");
                }
            } else {
                console.log("Negative age");
            }
        } else {
            console.log("Age not a number");
        }
    } else {
        console.log("No user");
    }
    return discount;
}