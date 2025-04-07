// Poor Error Handling Example
function calculateDiscount(user) {
    if (user.age > 60) {
        return 20;
    } else if (user.age > 30) {
        return 10;
    } else {
        return 5;
    }
}
