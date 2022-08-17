import React from "react";
import MenuList from "../components/MenuList";
import { Link } from "react-router-dom";

const domainList = [
    {
        id: "1",
        title: "https://www.baidu.com",
        type: "link",
    },
    {
        id: "2",
        title: "https://www.baidu2.com",
        type: "link",
    },
    {
        id: "3",
        title: "https://www.baidu3.com",
        type: "link",
    },
];

export default () => {
    return (
        <div>
            <ul>
                <li className="menu-item">
                    <p>domain config</p>
                </li>
                {domainList.map((item) => (
                    <li className="menu-item" key={item.id}>
                        <Link className="block w-full h-full" to={`/domain/${item.id}`}>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
