import React from "react";

import { createRoot } from "react-dom/client";

export const Popup = () => {
    return (
        <div>
            <h1>this is a popup page.</h1>
        </div>
    );
};

const root = createRoot(document.getElementById("popup") as Element);
root.render(<Popup />);
