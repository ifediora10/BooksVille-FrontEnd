import {SortJobPosts} from "./SortJobPosts.jsx";
import {JobseekerTopheader} from "../profile/profileComponents/JobseekerTopheader.jsx";
import {JobPostCard} from "./JobPostCard.jsx";
import {useState} from "react";
import {JobPostHalfDisplay} from "./JobPostHalfDisplay.jsx";
import {JobPostSearch} from "./JobPostSearch.jsx";

export const JobPostsFullPage = () => {
    let pwc = "src/assets/pwc.svg"
    let payStack = "src/assets/payStack.svg"
    let flutterWave = "src/assets/flutterWave.svg"

    const [details, setDetails] = useState(
        [
            {companyName: "Decagon", jobTitle: "Software Engineer", logo: "", priceRange: "₦ 500,000 - ₦ 700,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "REMOTE", state: "Edo", country: "Nigeria"},
            {companyName: "JobberMan", jobTitle: "Electrical Engineer", logo: "", priceRange: "₦ 300,000 - ₦ 500,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "HYBRID", state: "Lagos", country: "Nigeria"},
            {companyName: "Suits", jobTitle: "Lawyer", logo: "", priceRange: "₦ 100,000 - ₦ 150,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "ON-SITE", state: "Rivers", country: "Nigeria"}
        ]
    )

    return (
        <div className="bg-white flex flex-col items-stretch">

            <JobseekerTopheader />

            <div className="self-center flex w-[781px] max-w-full flex-col mt-6 px-5">

                <JobPostSearch />

                <div className="text-black text-xl font-medium leading-7 tracking-normal self-stretch whitespace-nowrap -mr-5 mt-5 max-md:max-w-full">
                    Suggested employment opportunities
                </div>
            </div>
            <div className="self-center flex w-full max-w-[1277px] justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">

                <SortJobPosts />

                <div className="self-stretch max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                { details.map(
                                    detail => (

                                        <JobPostCard
                                            companyName={detail.companyName}
                                            jobTitle={detail.jobTitle}
                                            logo={detail.logo}
                                            priceRange={detail.priceRange}
                                            jobDescription={detail.jobDescription}
                                            jobType={detail.jobType}
                                            state={detail.state}
                                            country={detail.country}
                                        />

                                    )
                                )
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">

                            <JobPostHalfDisplay />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


