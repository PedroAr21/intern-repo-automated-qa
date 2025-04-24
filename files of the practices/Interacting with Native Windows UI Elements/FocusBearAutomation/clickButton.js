const wd = require('wd');
const driver = wd.promiseChainRemote('http://127.0.0.1:4723');
async function test() {
    // Start from the desktop by launching the Desktop
    await driver.init({
        platformName: 'Windows',
        deviceName: 'WindowsPC',
        app: 'Root' // Launches the Windows Desktop
    });
    // Add a small delay to ensure the desktop loads
    await driver.sleep(1000);
    // Click the hidden icons caret on the taskbar using name
    const hiddenIconsCaret = await driver.elementByName('Show Hidden Icons');
    await hiddenIconsCaret.click();
    // Add a delay to ensure the system tray expands
    await driver.sleep(1000);
    // Select the Focus Bear app from the system tray
    const focusBearIcon = await driver.elementByName('Focus Bear'); // Adjusting based on actual name
    await focusBearIcon.click();
    // Add a delay to ensure Focus Bear is active
    await driver.sleep(1000);
    // Click the Preferences button
    const preferencesButton = await driver.elementByName('Preferences'); // Adjusting to "Preferences" 
    await preferencesButton.click();
    // Add a delay to ensure it loads
    await driver.sleep(1000);
    // Verify the result (Preferences window should open)
    const preferencesWindow = await driver.elementByName('Preferences'); // Adjusting based on actual window title
    const isDisplayed = await preferencesWindow.isDisplayed();
    console.log('Result:', isDisplayed ? 'Pass' : 'Fail')
    await driver.sleep(3000);
    await driver.quit();
}
test().catch(console.error);