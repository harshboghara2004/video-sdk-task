import React from "react";

const CaptionText = ({ children }) => {
    return (
        <p className="text-[#B2B2B2] font-lato text-[14px] font-semibold leading-[20px] tracking-[0.2em] text-left">
            {children}
        </p>
    );
};

export default CaptionText;
