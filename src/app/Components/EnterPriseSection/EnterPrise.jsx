import React from "react";
import CaptionText from "../TextStyles/CaptionText";
import HeaderText from "../TextStyles/HeaderText";
import BodyText from "../TextStyles/BodyText";
import GradientCard from "../Cards/GradientCard";
import GradientBorderCard from "../Cards/GradientBorderCard";
import ComplianceCard from "./ComplianceCard";

const EnterPrise = () => {
    return (
        <main className="flex flex-col items-center justify-center p-1">
            {/* Section name */}
            <div className="mt-4">
                <CaptionText>ENTERPRISE ESSENTIALS</CaptionText>
            </div>

            {/* Header */}
            <div className="mt-12">
                <HeaderText>
                    Scalable and Privacy-first Infrastructure
                </HeaderText>
            </div>

            {/* Description */}
            <div className="mt-1">
                <BodyText>
                    VideoSDK seamlessly replaces Twilio, delivering an
                    unparalleled video experience <br /> that auto scales with
                    your needs.
                </BodyText>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-6">
                {/* Global mesh network */}
                <div className="mt-20">
                    <GradientCard
                        header="Global mesh network"
                        description="Handle massive concurrent meetings volumes extra content here"
                        imageUrl="/assets/globe-earth.svg"
                    />
                </div>

                <div className="flex flex-col pt-10">
                    <div className="flex flex-row gap-x-6">
                        {/* Up time */}
                        <div className="mt-10">
                            <GradientBorderCard
                                svgIcon={"up-time"}
                                header={"99.99% uptime"}
                                description={"Rock solid reliability"}
                                direction="to bottom right"
                            />
                        </div>

                        {/* Quality */}
                        <div className="mt-10">
                            <GradientBorderCard
                                svgIcon={"quality"}
                                header={"Adaptive quality"}
                                description={"On demand superior quality"}
                                direction="to bottom left"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-6">
                        {/* Success */}
                        <div className="mt-10">
                            <GradientBorderCard
                                svgIcon={"success"}
                                header={"99.98% Success"}
                                description={"Highest call success rate ever"}
                                direction="to top right"
                            />
                        </div>

                        {/* Advanced analytics */}
                        <div className="mt-10">
                            <GradientBorderCard
                                svgIcon={"analytics"}
                                header={"Advanced analytics"}
                                description={"Bird-eye-view insights in hand"}
                                direction="to top left"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-x-6">
                {/* Compliances */}
                <ComplianceCard
                    svgIcon={"compliance"}
                    header={"100% Secure with compliance"}
                    description={"We take your privacy very seriously"}
                    direction={"to top left"}
                />

                {/*  Handhold support */}
                <GradientBorderCard
                    svgIcon={"support"}
                    header={"24x7 Handhold support"}
                    description={
                        "Private channels Dedicated support team Guaranteed SLAs always within reach"
                    }
                    direction={"to top left"}
                />
            </div>
        </main>
    );
};

export default EnterPrise;
