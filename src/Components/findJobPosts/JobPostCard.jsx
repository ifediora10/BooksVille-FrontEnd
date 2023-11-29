export const JobPostCard = ({companyName, jobTitle, logo, priceRange, jobDescription, jobType, state, country, handleFindJobsOneCompany}) => {

    return(
        <div className="items-stretch border border-[color:var(--Blue-1,#2F80ED)] shadow-lg bg-white flex w-full flex-col p-6 rounded-xl border-solid max-md:px-5 mb-5">
            {/*<div className="items-stretch shadow-lg bg-white flex w-full flex-col mt-2.5 p-6 rounded-xl max-md:px-5">*/}
            <div className="justify-between items-stretch flex gap-5">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div onClick={handleFindJobsOneCompany} className="hover:text-blue-500 cursor-pointer text-black text-base leading-6 tracking-normal whitespace-nowrap">
                        {companyName}
                    </div>
                    <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2">
                        {jobTitle}
                    </div>
                </div>
                <img
                    loading="lazy"
                    // src={logo}
                    src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1700142255/gtfd2nbof5pqblvyrfa7.svg"
                    className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                />
            </div>
            <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-4">
                {priceRange}
            </div>
            <div className="text-black text-base leading-6 tracking-normal mt-4">
                {jobDescription}
            </div>
            <div className="justify-between items-stretch flex gap-5 mt-4">
                <div className="text-blue-500 text-sm font-medium leading-5 tracking-normal uppercase whitespace-nowrap justify-center items-stretch bg-cyan-300 px-2 py-1 rounded-xl w-[75px] text-center">
                    {jobType}
                </div>
                <div className="text-black text-base leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                    {`${state}, ${country}`}
                </div>
            </div>
        </div>
    )

}