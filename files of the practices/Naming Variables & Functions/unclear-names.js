// Unclear Variable Names
function format(x) {
    if (!x) {
        return "Error";
    }
    let y = x.fn + " " + x.ln;
    let z = x.st + ", " + x.ct;
    return y + " lives at " + z;
}

// Refactored with Clear Names 

function formatUserNameAndAddress(user) {
    if (!user) {
        return "Error";
    }
    let fullName = user.firstName + " " + user.lastName;
    let fullAddress = user.street + ", " + user.city;
    return fullName + " lives at " + fullAddress;
}