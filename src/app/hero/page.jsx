import React from "react";

import CompanyList from "@/Components/HeroSection/CompanyList.jsx";
import HeaderText from "@/Components/TextStyles/HeaderText.jsx";
import BodyText from "@/Components/TextStyles/BodyText.jsx";
import CaptionText from "@/Components/TextStyles/CaptionText";
import TransparentButton from "@/Components/Buttons/TransparentButton";
import GradientRPBText from "@/Components/TextStyles/GradientRPBText.jsx";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.jsx";
import References from "@/Components/HeroSection/References.jsx";
import Image from "next/image";

const Hero = () => {
    return (
        <main className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                    backgroundImage: `url('/assets/gradient.png')`,
                }}
            ></div>

            <div className="absolute bg-cover opacity-70 top-16 w-[400px] h-[400px] lg:top-8 lg:w-[700px] lg:h-[700px] z-20">
                <Image src={"/assets/elipse.png"} fill alt="" />
            </div>

            {/* Content */}
            <div className="w-full h-full relative z-10 flex flex-col items-center justify-center mt-32 px-1 py-10 m-1">
                {/* Switch to video SDK button */}
                <div className="mt-4">
                    <TransparentButton>SWITCH TO VIDEOSDK</TransparentButton>
                </div>

                {/* Upgrade from text */}
                <div className="mt-6">
                    <HeaderText>
                        Upgrade from{" "}
                        <GradientRPBText>Twilio to VideoSDK</GradientRPBText>{" "}
                        <br />
                        with Enterprise-grade Video Infrastructure
                    </HeaderText>
                </div>

                {/* Build description */}
                <div className="mt-6">
                    <BodyText>
                        Built for scalability, security, and seamless
                        integration,
                        <br />
                        VideoSDK is the perfect upgrade from Twilio.
                    </BodyText>
                </div><MediumText>{header}</MediumText>

                {/* Talk to expert button */}
                <div className="mt-14">
                    <PrimaryButton>Talk to Our Migration Expert</PrimaryButton>
                </div>

                {/* Guide navigation links */}
                <div className="mt-14">
                    <References />
                </div>

                {/* Companies */}
                <div className="mt-32">
                    <CaptionText>LOVED BY DEVELOPERS AT</CaptionText>
                </div>
                <div className="mt-16">
                    <CompanyList />
                </div>
            </div>
        </main>
    );
};

export default Hero;

