import React from "react";
import ArrowIcon from "@/app/Components/ArrowIcon.jsx";
import CompanyList from "@/app/Components/CompanyList.jsx";
import HeaderText from "@/app/Components/HeaderText.jsx";
import SubHeaderText from "@/app/Components/SubHeaderText.jsx";

const Home = () => {
    const items = [
        { arrowDir: "up-right", title: "Read Migration Guide" },
        { arrowDir: "down", title: "VideoSDK vs Twilio" },
        { arrowDir: "down", title: "Why not Zoom" },
    ];

    return (
        <main className="bg-[#161616] flex flex-col items-center justify-center absolute w-full h-full p-1">
            
            {/* switch to video sdk button */}
            <button className="mt-4 bg-[#E6E6E633] inline-flex rounded-full px-5 py-[10px] mb-6">
                <p className="text-white text-opacity-70 text-sm">
                    SWITCH TO VIDEOSDK
                </p>
            </button>

            {/* Upgrade from text */}
            <HeaderText>
                Upgrade from{" "}
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Twilio to VideoSDK
                </span>{" "}
                <br />
                with Enterprise-grade Video Infrastructure
            </HeaderText>

            {/* build description */}
            <SubHeaderText>
                Built for scalability, security, and seamless integration,
                <br />
                VideoSDK is the perfect upgrade from Twilio.
            </SubHeaderText>

            {/* Talk to expert button */}
            <button className="mt-14 bg-[#5568FE] px-6 py-4 rounded-md">
                <p className="font-open-sans text-white text-[18px] font-normal">
                    Talk to Our Migration Expert
                </p>
            </button>

            {/* Guide navigation links */}
            <div className="mt-14 flex flex-row items-center justify-between gap-x-10">
                {items.map((item, index) => (
                    <ArrowIcon
                        key={index}
                        arrowDir={item.arrowDir}
                        title={item.title}
                    />
                ))}
            </div>

            {/* Companies */}
            <div className="mt-32">
                <p className="text-[#B2B2B2] font-lato text-[14px] font-semibold leading-[20px] tracking-[0.2em] text-left">
                    LOVED BY DEVELOPERS AT
                </p>
            </div>
            <CompanyList />
        </main>
    );
};

export default Home;
