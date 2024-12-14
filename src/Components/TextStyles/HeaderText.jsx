import React from "react";

const HeaderText = ({ children }) => {
    return (
        <div className="px-1 flex flex-col items-center">
            <div className="justify-center items-center">
                <p
                    className="text-white font-lato text-5xl lg:text-6xl font-bold text-center leading-[54px]"
                >
                    {children}
                </p>
            </div>
        </div>
    );
};

export default HeaderText;
