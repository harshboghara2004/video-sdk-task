import React from "react";
import GameChangerCard from "@/Components/Cards/GameChangerCard";
import HeaderText from "@/Components/TextStyles/HeaderText";
import BodyText from "@/Components/TextStyles/BodyText";

const GameChanger = () => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-3 justify-evenly p-10 pl-0">
            {/* Part-1 */}
            <div className="col-span-1 mr-10">
                <img
                    src="/assets/game-changer/game-elipse.svg"
                    alt=""
                    className="absolute z-0"
                />
                <img
                    src="/assets/game-changer/game-gradient-1.svg"
                    alt=""
                    className="absolute z-10"
                />
                <div className="w-full h-full pl-10 mt-20">
                    {/* title */}
                    <HeaderText textAlign="left">
                        Game Changing features
                    </HeaderText>

                    {/* lorem */}
                    <BodyText
                        textColour="#A8A8A8"
                        textSize={22}
                        textAlign="left"
                        opacity={75}
                    >
                        Lorem ipsum dolor sit amet consectetur. Nullam rhoncus
                        malesuada in facilisis nunc nec. Turpis turpis massa id
                        donec posuere tortor nisi.
                    </BodyText>
                </div>
            </div>

            {/* Part-2 */}
            <div className="col-span-1 items-center justify-center mt-10 ml-10 px-10">
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={true}
                    isGlobe={true}
                />
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center. Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={false}
                    isGlobe={false}
                />
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={true}
                    isGlobe={false}
                />
            </div>

            {/* Part-2 */}
            <div className="col-span-1 items-center justify-center mt-10 px-20 lg:px-10">
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center. Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={false}
                    isGlobe={false}
                />
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={true}
                    isGlobe={false}
                />
                <GameChangerCard
                    header={"<80ms Geo-latency"}
                    description={
                        "Join from anywhere in the world, connect to your nearest data center"
                    }
                    isBackGround={true}
                    isGlobe={true}
                />
            </div>
        </main>
    );
};

export default GameChanger;
