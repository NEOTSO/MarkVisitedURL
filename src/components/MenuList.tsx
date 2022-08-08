import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

interface IItem {
    title: string;
    func?: MouseEventHandler<HTMLLIElement> | ChangeEventHandler<HTMLInputElement> | undefined;
    type?: string;
}

interface IProps {
    title: string;
    list: IItem[];
}

const MenuList: FC<IProps> = ({ title, list }) => {
    return (
        <ul>
            <MenuItem title={title} />
            {list.map((item, index) => {
                return <MenuItem key={index} title={item.title} func={item.func} type={item.type} />;
            })}
        </ul>
    );
};

export default MenuList;
