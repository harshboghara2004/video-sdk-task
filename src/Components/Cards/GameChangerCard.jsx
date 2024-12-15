import React from "react";
import SmallHeaderText from "../TextStyles/SmallHeaderText";
import BodyText from "../TextStyles/BodyText";

const GameChangerCard = ({ header, description, isBackGround, isGlobe }) => {
    return (
        <div className="w-[360px] h-auto bg-slate-100 rounded-2xl bg-gradient-to-b from-[#C329BECC] to-[#0f21a9a7] p-[1px] mb-10">
            <div className="bg-gradient-to-b flex flex-col from-[#3A223A80] to-[#31213B80] w-full h-full rounded-2xl p-[2px]">
                <div className="w-full h-full flex flex-col bg-black  rounded-2xl">
                    <div className="p-8 gap-y-8">
                        <img
                            src="/assets/game-changer/game-changer.svg"
                            alt=""
                            className="w-8 h-8 mb-4"
                        />
                        <SmallHeaderText opacity={80}> {header} </SmallHeaderText>
                        <BodyText textSize={18} opacity={50} textAlign="left">
                            {description}
                        </BodyText>
                    </div>
                    {isBackGround && isGlobe && (
                        <div className="w-full h-full bg-gradient-to-b from-[#342034] to-[#16161600] rounded-2xl items-center px-10">
                            <img
                                src="/assets/game-changer/globe-game.svg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    {isBackGround && !isGlobe && (
                        <div className="w-full h-[150px] bg-gradient-to-b from-[#342034] to-[#16161600] rounded-2xl items-center px-10"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameChangerCard;
