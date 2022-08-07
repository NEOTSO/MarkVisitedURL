console.log('bbbbbbbbbbb')
chrome.commands.onCommand.addListener((command, tab) => {
    console.log(`Command222: ${command}`);
    if (command === 'save_url') {
        console.log(tab.url)
        chrome.storage.local.get("urls", (data) => {
            console.log(data?.urls)
            const oldUrls = data?.urls ?? [];
            if (!oldUrls.includes(tab.url)) {
                const urls = [tab.url, ...oldUrls];
                chrome.storage.local.set({ urls }, () => {
                    var error = chrome.runtime.lastError;
                    if (error) {
                        console.log(error);
                    }
                    console.log('send to content')
                    chrome.tabs.sendMessage(tab.id as number, { action: "saveURL" });
                });
            }
        });
    }
});

chrome.action.onClicked.addListener(tab => {
    const url = chrome.runtime.getURL("settings.html");
    chrome.tabs.create({ url });
})