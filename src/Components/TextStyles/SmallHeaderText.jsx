import React from "react";

const SmallHeaderText = ({ children }) => {
    return (
        <p className="font-lato text-white opacity-80 font-medium text-[20px]">
            {children}
        </p>
    );
};

export default SmallHeaderText;
