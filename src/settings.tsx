import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import History from './views/History'
import Sync from './views/Sync'
import Domain from './views/Domain'

import { createRoot } from "react-dom/client";
import SideBar from "./components/SideBar";
import MenuList from "./components/MenuList";
import RecordList from "./components/RecordList";

import "./styles/index.css";

const recordList = ["https://www.google.com/", "https://youtube.com/", "https://stackoverflow.com/"];

export const App = () => {
    return (
        <div className="flex relative py-10">
            <div className="w-[250px] border border-red-300 absolute left-0">
                <SideBar />
            </div>
            <div className="w-[680px] overflow-hidden shadow-[#3c40434d_0_1px_2px_0px,#3c404326_0_2px_6px_2px] rounded-md mx-auto">
                {/* <MenuList title="历史记录" list={recordList} /> */}
                {/* <RecordList /> */}
                <Routes>
                    <Route path="/" element={<History />} />
                    <Route path="/sync" element={<Sync />} />
                    <Route path="/domain" element={<Domain />} />
                </Routes>
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById("app") as Element);
root.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>
);
