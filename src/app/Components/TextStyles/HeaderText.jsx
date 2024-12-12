import React from "react";

const HeaderText = ({ children }) => {
    return (
        <div className="px-1 flex flex-col items-center">
            <div className="justify-center items-center">
                <p
                    className="text-white font-lato text-[50px] font-bold text-center leading-[54px]"
                    style={{
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >
                    {children}
                </p>
            </div>
        </div>
    );
};

export default HeaderText;
