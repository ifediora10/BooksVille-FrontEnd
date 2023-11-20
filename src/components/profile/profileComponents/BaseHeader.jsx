import React from "react";

export const BaseHeader = ({ logoSrc, titles, images }) => {
    return (
        <div className="justify-between items-stretch bg-white flex w-full gap-5 px-12 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-blue-500 text-xl leading-7 tracking-normal my-auto">
                <img className="w-14/14 h-20 cursor-pointer" src={logoSrc} alt="Company Logo" />
            </div>

            <div className="self-center flex gap-6 my-auto">
                {titles.map((title, index) => (
                    <div key={index} className="group relative cursor-pointer">
                        <div className={`text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                            {title}
                        </div>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </div>
                ))}
            </div>

            <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={image.src}
                        srcSet={image.srcSet}
                        className={`${image.className} cursor-pointer`}
                        alt={`Image ${index + 1}`}
                    />
                ))}
                <div className="relative cursor-pointer">
                    <img
                        loading="lazy"
                        src="src/assets/images/sundaysvg.svg"
                        className="aspect-square object-cover object-center w-[60px] h-[60px] rounded-full"
                        alt="Your alt text"
                    />
                    <div className="absolute bottom-5 right-2 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

