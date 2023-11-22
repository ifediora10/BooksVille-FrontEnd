import {SortJobPosts} from "./SortJobPosts.jsx";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";
import {JobPostCard} from "./JobPostCard.jsx";
import {useState} from "react";
import {JobPostHalfDisplay} from "./JobPostHalfDisplay.jsx";
import {JobPostSearch} from "./JobPostSearch.jsx";
import {JobPostSeeMore} from "./JobPostSeeMore.jsx";

export const JobPostsFullPage = ({handleFindJobsOneCompany}) => {
    const [seeMore, setSeeMore] = useState(false)

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

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
        <div className="bg-white flex flex-col items-stretch mb-15">

            <div className="self-center flex w-[781px] max-w-full flex-col mt-6 px-5">

                <JobPostSearch />

                {!seeMore &&
                    <div className="text-black text-xl font-medium leading-7 tracking-normal self-stretch whitespace-nowrap -mr-5 mt-5 max-md:max-w-full">
                        Suggested employment opportunities
                    </div>
                }

            </div>
            <div className="self-center flex w-full max-w-[1277px] justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">

                {!seeMore &&
                    <SortJobPosts />
                }

                <div className="self-stretch max-md:max-w-full mx-auto">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                        {!seeMore &&
                            <div className="flex flex-col items-stretch w-[60%] max-md:w-full max-md:ml-0">
                                <div className="items-stretch flex grow flex-col max-md:mt-10">
                                    { details.map(
                                        detail => (

                                            <JobPostCard
                                                handleFindJobsOneCompany={handleFindJobsOneCompany}
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
                        }

                        <>
                            <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                                <JobPostHalfDisplay
                                    handleFindJobsOneCompany={handleFindJobsOneCompany}
                                    handleSeeMore={handleSeeMore}
                                    seeMore={seeMore}
                                />
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}


