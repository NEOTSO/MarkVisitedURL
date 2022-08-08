import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";
// import { MoreOne } from "@icon-park/react";

// type ClickHandler = MouseEventHandler<HTMLLIElement> | undefined
// type ChangeHandler = ChangeEventHandler<HTMLInputElement> | undefined

interface IItem {
    title: string;
    func?: MouseEventHandler<HTMLLIElement> | ChangeEventHandler<HTMLInputElement> | undefined;
    type?: string;
}

const MenuItem: FC<IItem> = ({ title, type, func }) => {
    return (
        <li className="menu-item" onClick={func as MouseEventHandler<HTMLLIElement>}>
            {type === "input-file" && <input type="file" className="input-file" onChange={func as ChangeEventHandler<HTMLInputElement>} />}
            <p>{title}</p>
            {/* <MoreOne /> */}
        </li>
    );
};

export default MenuItem;
