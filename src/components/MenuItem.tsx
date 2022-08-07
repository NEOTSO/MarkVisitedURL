import React, { FC, MouseEventHandler } from "react";
// import { MoreOne } from "@icon-park/react";

interface IProps {
    title: string;
    onClick?: MouseEventHandler<HTMLLIElement>,
}

const MenuItem: FC<IProps> = ({title, onClick}) => {
    return (
        <li className="menu-item" onClick={onClick}>
            <p>{title}</p>
            {/* <MoreOne /> */}
        </li>
    );
};

export default MenuItem