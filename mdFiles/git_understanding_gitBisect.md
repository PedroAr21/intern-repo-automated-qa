What does git bisect do?
finds the commit introducing a bug via binary search. You mark a bad commit (bug present) and a good one (no bug), then test middle commits.

When would you use it in a real-world debugging situation?
Use git bisect when a bug emerges in a project with many commits.

How does it compare to manually reviewing commits?
git bisect beats manual review by using binary search, cutting steps.