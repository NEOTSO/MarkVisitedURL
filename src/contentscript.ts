// checkURL
chrome.storage.local.get("urls", (data) => {
    const url = location.href
    const urls = data?.urls ?? [];
    if (urls.indexOf(url) !== -1) {
        showMark();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveURL") {
        showMark();
        sendResponse();
    }
});

function addCSS(css: string) {
    var styleEl = document.createElement("style");
    var textNode = document.createTextNode(css);
    styleEl.appendChild(textNode);
    document.getElementsByTagName("head")[0].appendChild(styleEl);
};

function showMark() {
    const sealEl = document.createElement("div");
    sealEl.innerText = "viewed";
    sealEl.className = "mark-visited-url-seal";
    addCSS(".mark-visited-url-seal { width: 100px; height: 100px; font-family: fantasy; font-size: 20px; border-radius: 100%; overflow: hidden; border: 2px solid orange; position: fixed; top: 20px; right: 20px; color: orange; display: flex; justify-content: center; align-items: center; z-index: 99999; }");
    document.body.appendChild(sealEl);
};