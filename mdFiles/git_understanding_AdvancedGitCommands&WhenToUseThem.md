What does each command do?
git checkout main -- <file> – Restore a specific file from main without affecting other changes.
git cherry-pick <commit> – Apply a specific commit from another branch without merging the whole branch.
git log – View commit history and understand how changes evolved.
git blame <file> – See who last modified each line in a file and when.

When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?
In a real project, you’d use checkout to undo mistakes, cherry-pick to apply specific fixes across branches, log to track changes, and blame to identify who made changes.

What surprised you while testing these commands?
I was surprised by how cherry-pick caused conflicts when file states differed between branches, requiring manual resolution.