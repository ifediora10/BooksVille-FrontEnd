import * as React from "react";

// import React from "react";
import {BaseHeader} from "../profileComponents/BaseHeader.jsx";

export const JobseekerTopheader = () => {
    const swiftLogo = "src/assets/images/swift_logo.svg";

    const titles = ["Find Jobs", "Profile"];

    const images = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7e0a42-5e50-438b-9071-3e586df5aa6b?apiKey=2a664b353843410292501e6f128833a4&",
            className: "aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73249c3c-c15c-417f-834f-3787ae54f692?apiKey=2a664b353843410292501e6f128833a4&",
            className: "aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
        },

        // Add more images as needed
    ];

    return <BaseHeader logoSrc={swiftLogo} titles={titles} images={images} />;
};