function a(x){var y=0;for(var i=0;i<x.length;i++){if(x[i]==1)y++;}return y;}

// Why it’s messy: This messy code uses vague names, lacks spacing, compresses logic into one line, and doesn’t clearly show its purpose or structure.

function countActiveUsers(users) {
    let activeCount = 0;
  
    for (let i = 0; i < users.length; i++) {
      if (users[i] === 1) {
        activeCount++;
      }
    }
  
    return activeCount;
  }
  