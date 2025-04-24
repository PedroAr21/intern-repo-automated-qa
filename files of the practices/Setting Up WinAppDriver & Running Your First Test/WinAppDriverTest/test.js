const wd = require('wd'); // Imports the 'wd' library to interact with Appium.
const driver = wd.promiseChainRemote('http://127.0.0.1:4723'); // Connects to the Appium server (running WinAppDriver) at this address.
async function test() { // Defines an asynchronous function named 'test' to handle the automation steps.
    await driver.init({ // Starts an Appium session with the following settings (Desired Capabilities):
        platformName: 'Windows', // Specifies that the platform is Windows.
        deviceName: 'WindowsPC', // A placeholder name for the device.
        app: 'notepad.exe' // The app to launch, in this case, Notepad.
    });
    await driver.elementByName('Text editor').sendKeys('Hello, WinAppDriver!'); // Finds the text area in Notepad (named 'Text Editor') and types the text.
    await driver.sleep(5000); // Pauses for 5 seconds to let you see the typed text.
    //await driver.quit(); // Closes the session and Notepad.
}
test().catch(console.error); // Runs the 'test' function and catches any errors, printing them to the console.