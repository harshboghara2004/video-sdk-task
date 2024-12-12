import React from "react";

const CaptionText = ({ children }) => {
    return (
        <div className="mt-32">
            <p className="text-[#B2B2B2] font-lato text-[14px] font-semibold leading-[20px] tracking-[0.2em] text-left">
                {children}
            </p>
        </div>
    );
};

export default CaptionText;
