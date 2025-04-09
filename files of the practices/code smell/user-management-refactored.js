// Magic Numbers & Strings 
const ADMIN_ROLE = "admin";
const MINIMUM_AGE = 21;

function checkUserRole(user) {
    return user.role === ADMIN_ROLE && user.age > MINIMUM_AGE;
}

// Long Function
function processUserData(user, id, email, status, log) {
    console.log(`Processing user: ${id}`);
    if (!user.isActive) {
        console.log(`User ${id} is inactive`);
        return user;
    }
    if (status === "active") {
        updateUserEmail(user, email);
        logUserActivity(user, id, log);
    }
    return user;
}

function updateUserEmail(user, email) {
    user.email = email;
    console.log(`Email updated: ${email}`);
    user.lastUpdated = new Date();
}

function logUserActivity(user, id, shouldLog) {
    if (shouldLog) {
        console.log(`Logging: User ${id} updated`);
        user.lastUpdated = new Date();
    }
}

// Duplicate Code 
function updateUserField(user, field, value, fieldName) {
    user[field] = value;
    console.log(`${fieldName} updated: ${value}`);
    user.lastUpdated = new Date();
}

function updateUserEmail(user, email) {
    updateUserField(user, "email", email, "Email");
}

function updateUserName(user, name) {
    updateUserField(user, "name", name, "Name");
}

// Large Class (God Object)
class UserRepository {
    constructor() {
        this.users = [];
    }
    addUser(user) { this.users.push(user); }
    removeUser(id) { this.users = this.users.filter(u => u.id !== id); }
}

class UserNotifier {
    sendEmail(user, message) {
        console.log(`Email to ${user.email}: ${message}`);
    }
}

class UserLogger {
    logActivity(user) {
        console.log(`Activity for ${user.id}`);
    }
}

class UserValidator {
    validateUser(user) {
        return user.age > MINIMUM_AGE;
    }
}

// Deeply Nested Conditionals 
function validateUserAccess(user) {
    return user.isActive &&
           user.role === ADMIN_ROLE &&
           user.age > MINIMUM_AGE &&
           user.hasAccess &&
           user.lastLogin;
}

// Commented-Out Code 
// (Removed the commented-out function)

// Inconsistent Naming 
let userName = "John";
let userData = { id: 1 };