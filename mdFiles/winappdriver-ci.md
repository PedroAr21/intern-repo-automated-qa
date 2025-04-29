How does running tests in CI/CD help maintain application stability?
Ensures that features are validated automatically. Each code change triggers WinAppDriver tests, catching bugs early.

What are the challenges of running GUI-based tests in CI/CD pipelines?
Require a Windows environment, increasing CI resource demands. Environment differences cause false results, and tests are slow, delaying pipelines.

How can flaky tests be handled in a CI/CD environment?
Can be managed by adding retries in GitHub Actions or using JavaScript wait conditions (driver.sleep).

What would be the next steps to fully integrate Focus Bear’s automated tests into its deployment pipeline?
Write more WinAppDriver tests for Focus Bear features like habit tracking. Add them to GitHub Actions to run automatically.