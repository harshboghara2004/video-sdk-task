import React from "react";

const TransparentButton = ({ children }) => {
    return (
        <button className="bg-[#E6E6E633] inline-flex rounded-full px-5 py-[10px]">
            <p className="text-white text-opacity-70 text-sm">{children}</p>
        </button>
    );
};

export default TransparentButton;
