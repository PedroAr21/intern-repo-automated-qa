// User Processing Code
function processUserData(user) {
  if (!user) return "No user provided";
  const userId = user.id;
  const details = `${user.name}, ${user.age} years old`;
  return `${userId} - ${details}`;
}
