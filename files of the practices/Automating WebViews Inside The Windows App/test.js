const wd = require('wd');
const driver = wd.promiseChainRemote('http://127.0.0.1:4723');

async function test() {
    try {
        // Step 1: Launch Focus Bear via the app path
        await driver.init({
            platformName: 'Windows',
            deviceName: 'WindowsPC',
            app: 'C:\\Program Files\\FocusBear\\FocusBear.exe', // Replace with actual path
            automationName: 'windows',
            'appium:webviewDevtoolsPort': 9222
        });

        // Wait for the app to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Step 2: Select 'Preferences' option
        const preferencesButton = await driver.elementByName('Preferences'); // Replace with actual locator
        await preferencesButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Step 3: Select 'Edit Habits' option
        const editHabitsButton = await driver.elementByName('Edit Habits'); // Replace with actual locator
        await editHabitsButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Step 4: Select 'Habit Packs' option
        const habitPacksButton = await driver.elementByName('Habit Packs'); // Replace with actual locator
        await habitPacksButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check available contexts to confirm WebView
        const contexts = await driver.contexts();
        console.log('Available contexts:', contexts);

        // Switch to WebView context if available
        if (contexts.some(context => context.includes('WEBVIEW'))) {
            const webviewContext = contexts.find(context => context.includes('WEBVIEW'));
            await driver.context(webviewContext);
            console.log(`Switched to context: ${webviewContext}`);

            // Example: Interact with a web element in Habit Packs (WebView)
            const webElement = await driver.elementByCss('button.habit-pack'); // Replace with actual CSS selector
            await webElement.click();
            console.log('Interacted with WebView element');
        } else {
            console.log('No WebView context available for Habit Packs');
        }

        // Switch back to native context (optional)
        await driver.context('NATIVE_APP');

        // Wait before quitting
        await new Promise(resolve => setTimeout(resolve, 2000));
        await driver.quit();
    } catch (error) {
        console.error('Error:', error);
        await driver.quit();
    }
}

test();