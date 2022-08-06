import React, { FC } from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

interface IProps {
    title: string;
    list: string[];
}

const MenuList: FC<IProps> = ({ title, list }) => {
    return (
        <ul>
            <MenuItem text={title} />
            {list.map((item) => {
                return <MenuItem text={item} />;
            })}
        </ul>
    );
};

export default MenuList;
