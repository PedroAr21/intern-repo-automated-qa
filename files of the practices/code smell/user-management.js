// Code Smells Examples

// Magic Numbers & Strings
function checkUserRole(user) {
    if (user.role === "admin") { // Magic String
        return user.age > 21; // Magic Number
    }
    return false;
}

// Long Function
function processUserData(user, id, email, status, log) {
    console.log("Processing user: " + id);
    if (user.isActive) {
        if (status === 1) { // Magic Number
            user.email = email;
            console.log("Email updated: " + email);
            if (log) {
                console.log("Logging: User " + id + " updated");
                user.lastUpdated = new Date();
            }
        } else {
            console.log("User " + id + " is inactive");
        }
    }
    return user;
}

// Duplicate Code
function updateUserEmail(user, email) {
    user.email = email;
    console.log("Email updated: " + email);
    user.lastUpdated = new Date();
}

function updateUserName(user, name) {
    user.name = name;
    console.log("Email updated: " + email); // Bug: Wrong log message
    user.lastUpdated = new Date();
}

// Large Class 
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) { this.users.push(user); }
    removeUser(id) { this.users = this.users.filter(u => u.id !== id); }
    sendEmail(user, message) { console.log("Email to " + user.email + ": " + message); }
    logActivity(user) { console.log("Activity for " + user.id); }
    validateUser(user) { return user.age > 21; }
}

// Deeply Nested Conditionals
function validateUserAccess(user) {
    if (user.isActive) {
        if (user.role === "admin") {
            if (user.age > 21) {
                if (user.hasAccess) {
                    if (user.lastLogin) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

// Commented-Out Code
// function oldFunction() {
//     console.log("This was used before");
// }

// Inconsistent Naming
let x = "John"; // Unclear name
let user_data_info = { id: 1 }; // Inconsistent naming style