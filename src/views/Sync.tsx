import React from "react";
import MenuList from "../components/MenuList";
import { formatDate } from '../utils'
const list = [ "Import Data", "Google Driver Sync", "Dropbox Sync"];

function saveFile(str: string, name: string): void {
    const blob = new Blob([str], {
        type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", name);
    link.click();
};

function exportData() {
    console.log('exportData')
    chrome.storage.local.get("urls", (data) => {
        const date = formatDate()
        const json = {
            date,
            data: data.urls,
        }
        saveFile(JSON.stringify(json), `MarkVisitedURL_${date}.json`);
    });
}

function importData() {

}

const list2 = [
    {
        title: "Export Data",
        func: exportData,
    },
    {
        title: "Import Data2",
        type: "input-file",
    }
]

export default () => {
    return (
        <div>
            <MenuList title="Sync Data" list={list2} />
        </div>
    );
};
