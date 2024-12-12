import React from "react";

import CompanyList from "@/app/Components/HeroSection/CompanyList.jsx";
import HeaderText from "@/app/Components/TextStyles/HeaderText.jsx";
import SubHeaderText from "@/app/Components/TextStyles/SubHeaderText.jsx";
import CaptionText from "@/app/Components/TextStyles/CaptionText";
import TransparentButton from "@/app/Components/Buttons/TransparentButton";
import GradientRPBText from "@/app/Components/TextStyles/GradientRPBText.jsx";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton.jsx";
import References from "@/app/Components/HeroSection/References.jsx";

const Hero = () => {
    return (
        <main className="bg-[#161616] flex flex-col items-center justify-center absolute w-full h-full p-1">
            {/* switch to video sdk button */}
            <TransparentButton>SWITCH TO VIDEOSDK</TransparentButton>

            {/* Upgrade from text */}
            <HeaderText>
                Upgrade from{" "}
                <GradientRPBText>Twilio to VideoSDK</GradientRPBText> <br />
                with Enterprise-grade Video Infrastructure
            </HeaderText>

            {/* build description */}
            <SubHeaderText>
                Built for scalability, security, and seamless integration,
                <br />
                VideoSDK is the perfect upgrade from Twilio.
            </SubHeaderText>

            {/* Talk to expert button */}
            <PrimaryButton>Talk to Our Migration Expert</PrimaryButton>

            {/* Guide navigation links */}
            <References />

            {/* Companies */}
            <CaptionText>LOVED BY DEVELOPERS AT</CaptionText>
            <CompanyList />
        </main>
    );
};

export default Hero;
