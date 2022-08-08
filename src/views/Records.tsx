import React, { MouseEventHandler } from "react";
import MenuList from "../components/MenuList";

interface IItem {
    title: string;
    func?: MouseEventHandler<HTMLLIElement>;
    type?: string;
}

let historyList: IItem[] = [];
chrome.storage.local.get("urls", (data) => {
    historyList = (data?.urls ?? []).map((item: string) => ({
        title: item,
    }));
});

export default () => {
    return (
        <div>
            <MenuList title="Records" list={historyList} />
        </div>
    );
};
