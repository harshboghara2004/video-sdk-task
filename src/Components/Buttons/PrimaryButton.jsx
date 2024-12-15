import React from "react";

const PrimaryButton = ({
    textColour = "white",
    children,
}) => {
    return (
        <button className={`bg-[#5568FE] px-6 py-4 rounded-md`}>
            <p
                className={`font-open-sans text-${textColour} text-[18px] font-normal`}
            >
                {children}
            </p>
        </button>
    );
};

export default PrimaryButton;
