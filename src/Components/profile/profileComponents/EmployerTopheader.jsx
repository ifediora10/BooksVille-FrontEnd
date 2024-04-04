import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export const EmployerTopHeader = ({handleFindCandidatePage, handleProfilePage}) => {
    const [active, setActive] = useState("profile");

    const activePageToFindJobs = () => {
        setActive("findCandidates");
    }

    const activePageToProfile = () => {
        setActive("profile");
    }

    const swiftLogo = "src/assets/images/swift_logo.svg";

    return (
        <div className="justify-between items-stretch bg-white flex w-full gap-5 px-12 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="text-blue-500 text-xl leading-7 tracking-normal my-auto">
                <img className="w-14/14 h-20 cursor-pointer" src={swiftLogo} alt="Company Logo" />
            </div>

            <div className="self-center flex gap-6 my-auto">
                <div onClick={handleFindCandidatePage} className="group relative cursor-pointer">
                    <div onClick={activePageToFindJobs} className={`${ active === "findCandidates" ? "active-nav" : "" } text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                        Find Candidates
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </div>

                <div onClick={handleProfilePage} className="group relative cursor-pointer">
                    <div onClick={activePageToProfile} className={`${ active === "profile" ? "active-nav" : "" } text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                        Profile
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </div>
            </div>

            <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
                <Link to={"/chat"} className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer" >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c7e0a42-5e50-438b-9071-3e586df5aa6b?apiKey=2a664b353843410292501e6f128833a4&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                        alt="chat"
                    />
                </Link>

                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73249c3c-c15c-417f-834f-3787ae54f692?apiKey=2a664b353843410292501e6f128833a4&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                    alt="notification"
                />
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
    )
};