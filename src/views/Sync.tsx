import React, { ChangeEvent, ChangeEventHandler } from "react";
import MenuList from "../components/MenuList";
import { formatDate } from "../utils";

function saveFile(str: string, name: string): void {
    const blob = new Blob([str], {
        type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", name);
    link.click();
}

function exportData() {
    console.log("exportData");
    chrome.storage.local.get("urls", (data) => {
        const date = formatDate();
        const json = {
            date,
            data: data.urls,
        };
        saveFile(JSON.stringify(json), `MarkVisitedURL_${date}.json`);
    });
}

function importData(e: ChangeEvent<HTMLInputElement>) {
    console.log("change event");
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];
    reader.onload = (evt: ProgressEvent<FileReader>) => {
        console.log("reader onload");
        const result = JSON.parse(evt.target?.result as string);
        chrome.storage.local.get("urls", (data) => {
            const oldUrl = data?.urls ?? [];
            chrome.storage.local.set({ urls: [...result.data, ...oldUrl] }, () => {
                console.log("导入成功");
            });
        });
    };
    reader.readAsText(file as File);
}

const syncList = [
    {
        title: "Export Data",
        func: exportData,
    },
    {
        title: "Import Data",
        type: "input-file",
        func: importData,
    },
    {
        title: "Google Driver Sync",
    },
    {
        title: "Dropbox Sync",
    },
];

export default () => {
    return (
        <div>
            <MenuList title="Sync Data" list={syncList} />
        </div>
    );
};
