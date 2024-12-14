import React from "react";

const BodyText = ({ children }) => {
    return (
        <p className="px-1 text-[#A8A8A8] text-[22px] font-normal font-lato text-center opacity-75">
            {children}
        </p>
    );
};

export default BodyText;
