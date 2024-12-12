import React from "react";

const TransparentButton = ({ children }) => {
    return (
        <button className="mt-4 bg-[#E6E6E633] inline-flex rounded-full px-5 py-[10px] mb-6">
            <p className="text-white text-opacity-70 text-sm">{children}</p>
        </button>
    );
};

export default TransparentButton;
