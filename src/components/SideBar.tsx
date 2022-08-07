import React from "react";
import { User, Earth, History } from "@icon-park/react";
import { Link } from "react-router-dom";
import "@icon-park/react/styles/index.css";
import "./SideBar.css";

export default (props: any) => {
    return (
        <aside className="py-8">
            <p className="text-2xl pl-4">Settings</p>
            <div className="mt-5">
                <ul className="text-sm">
                    <li>
                        <Link to="/" className="sidebar-item">
                            <History />
                            <p className="sidebar-item-text">Records</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sync" className="sidebar-item">
                            <User />
                            <p className="sidebar-item-text">Sync Data</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/domain" className="sidebar-item">
                            <Earth />
                            <p className="sidebar-item-text">Domain Config</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
