import React, { FC } from "react";
// import { MoreOne } from "@icon-park/react";

interface IProps {
    text: string;
}

const MenuItem: FC<IProps> = (props) => {
    return (
        <li className="menu-item">
            <p>{props.text}</p>
            {/* <MoreOne /> */}
        </li>
    );
};

export default MenuItem