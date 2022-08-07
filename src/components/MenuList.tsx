import React, { FC, MouseEventHandler } from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

interface IItem {
    title: string;
    func?: MouseEventHandler<HTMLLIElement>;
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
                return <MenuItem key={index} title={item.title} onClick={item.func} type={item.type} />;
            })}
        </ul>
    );
};

export default MenuList;
