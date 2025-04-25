const wd = require('wd');
const driver = wd.promiseChainRemote('http://127.0.0.1:4723');

async function test() {
    try {
        // Launch Focus Bear via desktop
        await driver.init({
            platformName: 'Windows',
            deviceName: 'WindowsPC',
            app: 'Root', // Path
            automationName: 'windows',
            'appium:webviewDevtoolsPort': 9222
        });

        // Wait for the app to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        const hiddenIconsCaret = await driver.elementByName('Show Hidden Icons');
        await hiddenIconsCaret.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Select the Focus Bear app from the system tray
        const focusBearIcon = await driver.elementByName('Focus Bear');
        await focusBearIcon.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 'Preferences' option
        const preferencesButton = await driver.elementByName('Preferences'); 
        await preferencesButton.click();
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 'Edit Habits' option
        const editHabitsButton = await driver.elementByAccessibilityId('btnEditHabits');
        await editHabitsButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check available contexts to confirm WebView
        console.log('Checking available contexts');
        const contexts = await driver.contexts();
        console.log('Available contexts:', contexts);

        // Switch to WebView context if available
        if (contexts.some(context => context.includes('WEBVIEW'))) {
            const webviewContext = contexts.find(context => context.includes('WEBVIEW'));
            await driver.context(webviewContext);
            console.log(`Switched to context: ${webviewContext}`);

            // Interact with a web element in Habit Packs (WebView)
            const webElement = await driver.elementByCss('button.habit-pack'); // Replace with actual CSS selector
            await webElement.click();
            console.log('Interacted with WebView element');
        } else {
            console.log('No WebView context available for Habit Packs');
        }

        // Switch back to native context
        await driver.context('NATIVE_APP');
        console.log('Switched back to NATIVE_APP');

        // Wait before quitting
        await new Promise(resolve => setTimeout(resolve, 2000));
        await driver.quit();
    } catch (error) {
        console.error('Error:', error);
        await driver.quit();
    }
}
test();