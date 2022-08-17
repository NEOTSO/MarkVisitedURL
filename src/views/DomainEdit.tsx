import React from "react";

export default () => {
    return (
        <div className="flex flex-col px-8 py-8">
            <input className="border-gray-300 border p-2" type="text" value={"https://www.baidu.com"} onChange={() => {}} />
            <textarea className="border-gray-300 border mt-4 p-2"></textarea>
            <div className="mt-4 flex justify-end">
                <button>取消</button>
                <button className="ml-3">保存</button>
            </div>
        </div>
    );
};
