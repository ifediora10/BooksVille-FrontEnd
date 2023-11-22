import * as React from "react";

// import React from "react";
import {BaseHeader} from "../profileComponents/BaseHeader.jsx";

export const EmployerTopheader = () => {
    const swiftLogo = "src/assets/images/swift_logo.svg";

    const titles = ["Find Candidates", "Profile"];

    const images = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7e0a42-5e50-438b-9071-3e586df5aa6b?apiKey=2a664b353843410292501e6f128833a4&",
            className: "aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73249c3c-c15c-417f-834f-3787ae54f692?apiKey=2a664b353843410292501e6f128833a4&",
            className: "aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
        },


            // src:"src/assets/images/sundaysvg.svg",
            // className:"aspect-square object-cover object-center w-[60px] h-[60px] rounded-full"


        // Add more images as needed
    ];

    return <BaseHeader logoSrc={swiftLogo} titles={titles} images={images} />;
};


// export const EmployerTopheader= ()=>{
//     let swiftlogo = "src/assets/images/swift_logo.svg"
//     return(
//         <div
//             className="justify-between items-stretch bg-white flex w-full gap-5 px-12 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
//             <div className="text-blue-500 text-xl leading-7 tracking-normal my-auto">
//                 <img className="w-14/14 h-20" src={swiftlogo} />
//
//             </div>
//             <div className="self-center flex gap-6 my-auto">
//                 <div className="group relative">
//                     <div className="text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap">
//                         Find Candidates
//                     </div>
//                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
//                 </div>
//                 <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
//                     <div className="group relative">
//                         <div className="text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500  whitespace-nowrap">
//                             Profile
//                         </div>
//                         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
//                 <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c7e0a42-5e50-438b-9071-3e586df5aa6b?apiKey=2a664b353843410292501e6f128833a4&"
//                     className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
//                 />
//                 <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/73249c3c-c15c-417f-834f-3787ae54f692?apiKey=2a664b353843410292501e6f128833a4&"
//                     className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
//                 />
//                 <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1162732d-9b14-4e5c-820a-c6b9a78f42f4?apiKey=2a664b353843410292501e6f128833a4&"
//                     className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
//                 />
//             </div>
//         </div>
//     );
// }