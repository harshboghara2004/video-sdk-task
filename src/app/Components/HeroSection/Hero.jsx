import React from "react";

import CompanyList from "@/app/Components/HeroSection/CompanyList.jsx";
import HeaderText from "@/app/Components/TextStyles/HeaderText.jsx";
import BodyText from "@/app/Components/TextStyles/BodyText.jsx";
import CaptionText from "@/app/Components/TextStyles/CaptionText";
import TransparentButton from "@/app/Components/Buttons/TransparentButton";
import GradientRPBText from "@/app/Components/TextStyles/GradientRPBText.jsx";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton.jsx";
import References from "@/app/Components/HeroSection/References.jsx";

const Hero = () => {
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center p-1 overflow-hidden">
            {/* switch to video sdk button */}
            <div className="mt-4">
                <TransparentButton>SWITCH TO VIDEOSDK</TransparentButton>
            </div>

            {/* Upgrade from text */}
            <div className="mt-6">
                <HeaderText>
                    Upgrade from{" "}
                    <GradientRPBText>Twilio to VideoSDK</GradientRPBText> <br />
                    with Enterprise-grade Video Infrastructure
                </HeaderText>
            </div>

            {/* build description */}
            <BodyText>
                Built for scalability, security, and seamless integration,
                <br />
                VideoSDK is the perfect upgrade from Twilio.
            </BodyText>

            {/* Talk to expert button */}
            <PrimaryButton>Talk to Our Migration Expert</PrimaryButton>

            {/* Guide navigation links */}
            <References />

            {/* Companies */}
            <CaptionText>LOVED BY DEVELOPERS AT</CaptionText>
            <CompanyList />
        </section>
    );
};

export default Hero;
