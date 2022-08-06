import React, { FC } from "react";

interface IProps {
    text: string;
}

const MenuItem: FC<IProps> = (props) => {
    return (
        <li className="menu-item">
            <p>{props.text}</p>
        </li>
    );
};

export default MenuItem