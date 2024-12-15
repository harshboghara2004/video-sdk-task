import React from "react";
import CaptionText from "@/Components/TextStyles/CaptionText";
import HeaderText from "@/Components/TextStyles/HeaderText";
import BodyText from "@/Components/TextStyles/BodyText";
import GradientCard from "@/Components/Cards/GradientCard";
import GradientBorderCard from "@/Components/Cards/GradientBorderCard";
import ComplianceCard from "@/Components/EnterPriseSection/ComplianceCard";

const EnterPrise = () => {
    return (
        <main className="flex flex-col w-full h-full items-center justify-center px-12 py-2">
            {/* Section name */}
            <div className="mt-4">
                <CaptionText textColour="#B2B2B2">ENTERPRISE ESSENTIALS</CaptionText>
            </div>

            {/* Header */}
            <div className="mt-12">
                <HeaderText>
                    Scalable and Privacy-first Infrastructure
                </HeaderText>
            </div>

            {/* Description */}
            <div className="mt-4">
                <BodyText textColour="#A8A8A8" textSize={22} opacity={75}>
                    VideoSDK seamlessly replaces Twilio, delivering an
                    unparalleled video experience <br /> that auto scales with
                    your needs.
                </BodyText>
            </div>

            <div className="w-[90%] p-10 m-auto my-10 lg:px-10 items-center justify-center">
                <div className="grid grid-col-1 gap-2 lg:grid-cols-12 justify-center items-center p-2">
                    {/* Global mesh network */}
                    <div className="mt-44 w-full h-full lg:col-span-5 items-center justify-items-center">
                        <GradientCard
                            header="Global mesh network"
                            description="Handle massive concurrent meetings volumes extra content here"
                            imageUrl="/assets/globe-earth.svg"
                        />
                    </div>

                    <div className="lg:col-span-7 pt-10">
                        <div className="w-full h-full grid gap-x-4 grid-cols-1 md:grid-cols-2">
                            {/* Up time */}
                            <div className="mt-10">
                                <GradientBorderCard
                                    svgIcon={"up-time"}
                                    header={"99.99% uptime"}
                                    description={"Rock solid reliability"}
                                    direction="br"
                                />
                            </div>

                            {/* Quality */}
                            <div className="mt-10">
                                <GradientBorderCard
                                    svgIcon={"quality"}
                                    header={"Adaptive quality"}
                                    description={"On demand superior quality"}
                                    direction="bl"
                                />
                            </div>

                            {/* Success */}
                            <div className="mt-4">
                                <GradientBorderCard
                                    svgIcon={"success"}
                                    header={"99.98% Success"}
                                    description={
                                        "Highest call success rate ever"
                                    }
                                    direction="tr"
                                />
                            </div>

                            {/* Advanced analytics */}
                            <div className="mt-4">
                                <GradientBorderCard
                                    svgIcon={"analytics"}
                                    header={"Advanced analytics"}
                                    description={
                                        "Bird-eye-view insights in hand"
                                    }
                                    direction="tl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full mt-6 flex flex-col lg:flex-row gap-x-8 items-center justify-center gap-y-6">
                    {/* Compliances */}
                    <ComplianceCard
                        svgIcon={"compliance"}
                        header={"100% Secure with compliance"}
                        description={"We take your privacy very seriously"}
                        direction={"tl"}
                    />

                    {/*  Handhold support */}
                    <GradientBorderCard
                        svgIcon={"support"}
                        header={"24x7 Handhold support"}
                        description={
                            "Private channels Dedicated support team Guaranteed SLAs always within reach"
                        }
                        direction={"tl"}
                    />
                </div>
            </div>
        </main>
    );
};

export default EnterPrise;
