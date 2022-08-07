import React from "react";
import MenuList from "../components/MenuList";

let historyList: string[] = []
chrome.storage.local.get("urls", (data) => {
    historyList = data?.urls ?? [];
});

export default () => {
    return (
        <div>
            {/* <MenuList title="Records" list={historyList} /> */}
        </div>
    );
};
