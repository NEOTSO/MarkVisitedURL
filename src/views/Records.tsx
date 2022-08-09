import React, { MouseEventHandler, useEffect, useState } from "react";
import MenuList from "../components/MenuList";

interface IItem {
    title: string;
    func?: MouseEventHandler<Element>;
    type?: string;
}

export default () => {
    const [historyList, setHistoryList] = useState<IItem[]>([])

    useEffect(() => {
        chrome.storage.local.get("urls", (data) => {
            setHistoryList((data?.urls ?? []).map((item: string) => ({
                title: item,
            })))
        });
    }, [])

    return (
        <div>
            <MenuList title="Records" list={historyList} />
        </div>
    );
};
