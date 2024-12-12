import React from "react";

const PrimaryButton = ({ children }) => {
    return (
        <button className="mt-14 bg-[#5568FE] px-6 py-4 rounded-md">
            <p className="font-open-sans text-white text-[18px] font-normal">
                {children}
            </p>
        </button>
    );
};

export default PrimaryButton;
