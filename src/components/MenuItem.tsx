import React, { FC, MouseEventHandler } from "react";
// import { MoreOne } from "@icon-park/react";

interface IProps {
    title: string;
    onClick?: MouseEventHandler<HTMLLIElement>;
    type?: string;
}

const MenuItem: FC<IProps> = ({ title, type, onClick }) => {
    return (
        <li className="menu-item" onClick={onClick}>
            {type === "input-file" && <input type="file" className="input-file" />}
            <p>{title}</p>
            {/* <MoreOne /> */}
        </li>
    );
};

export default MenuItem;
