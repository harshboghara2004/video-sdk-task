import Link from "next/link";
import React from "react";

const ArrowIcon = ({ arrowDir, title }) => {
    const arrowIcons = {
        "up-right": (
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 11L11 1M11 1H1M11 1V11"
                    stroke="#5568FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        down: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 5V19M12 19L19 12M12 19L5 12"
                    stroke="#5568FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    };

    const icon = arrowIcons[arrowDir] || null;

    return (
        <Link className="flex items-center gap-2" href={"/"}>
            {icon}
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
