import Link from "next/link";
import React from "react";

const ArrowIcon = ({ arrowDir, title }) => {
    return (
        <Link className="flex items-center gap-2" href={"/"}>
            <img src={`/assets/arrows/${arrowDir}.svg`} alt={arrowDir} />
            <span
                className="text-[#5568FE] font-open-sans text-[18px] text-left underline decoration-0
                decoration-solid underline-offset-1"
            >
                {title}
            </span>
        </Link>
    );
};

export default ArrowIcon;
