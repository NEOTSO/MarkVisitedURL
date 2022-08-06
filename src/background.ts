
chrome.action.onClicked.addListener(tab => {
    const url = chrome.runtime.getURL("settings.html");
    chrome.tabs.create({ url });
})