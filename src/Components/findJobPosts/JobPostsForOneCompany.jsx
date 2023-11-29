import {JobPostSearch} from "./JobPostSearch.jsx";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";
import {OneCompanyJobPostCard} from "./OneCompanyJobPostCard.jsx";
import {useState} from "react";

export const JobPostsForOneCompany = ({companyName}) => {

    const [details, setDetails] = useState(
        [
            {companyName: "Decagon", jobTitle: "Software Engineer", logo: "", priceRange: "₦ 500,000 - ₦ 700,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "REMOTE", state: "Edo", country: "Nigeria"},
            {companyName: "JobberMan", jobTitle: "Electrical Engineer", logo: "", priceRange: "₦ 300,000 - ₦ 500,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "ON-SITE", state: "Lagos", country: "Nigeria"},
            {companyName: "Suits", jobTitle: "Lawyer", logo: "", priceRange: "₦ 100,000 - ₦ 150,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "HYBRID", state: "Rivers", country: "Nigeria"},
            {companyName: "Decagon", jobTitle: "Software Engineer", logo: "", priceRange: "₦ 500,000 - ₦ 700,000", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "REMOTE", state: "Edo", country: "Nigeria"}
        ]
    )

    return (
        <div className="items-stretch flex flex-col mb-15 max-w-[1000px] mx-auto">
            <div className="self-center flex w-[781px] max-w-full flex-col mt-6 px-5">
                <JobPostSearch />
            </div>

            <div className="items-stretch flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-w-[1277px]">
                <div className="items-start flex grow basis-[0%] flex-col px-5">
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1700142255/gtfd2nbof5pqblvyrfa7.svg"
                        className="aspect-[2.97] object-contain object-left w-52 overflow-hidden -mr-5"
                    />
                    <div className="text-gray-900 text-base font-medium leading-6 tracking-normal self-stretch whitespace-nowrap -mr-5">
                        {companyName}
                        Price Waterhouse Coopers
                    </div>
                </div>
                <div className="justify-center items-center self-center flex basis-[0%] flex-col my-auto">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7baae8f6-f330-4ffe-a7ca-4b7c782f4724?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                    />
                    <button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 self-stretch mt-5 px-4 py-2 rounded-xl">
                        Follow
                    </button>
                </div>
            </div>

            <div className="text-zinc-500 text-sm leading-5 tracking-normal w-full mt-6 max-md:max-w-full px-5">
                There are 4 PwC jobs close to Lagos. You can check out other available
                jobs at PwC.
            </div>

            <div className="w-full mt-6 mb-10 pr-20 max-md:max-w-full max-md:pr-5">
                <div className="max-w-[1000px] flex justify-between p-[1.25rem] flex-wrap gap-10 max-md:flex-col max-md:items-stretch max-md:gap-0">
                    { details.map(
                        detail => (

                            <OneCompanyJobPostCard
                                jobTitle={detail.jobTitle}
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
        </div>
    );
}


