
export const JobPostHalfDisplay = ({handleSeeMore, handleFindJobsOneCompany, seeMore, selectedJobPost, apply}) => {

    return(
        <div className="sticky top-[6rem] items-start flex flex-col max-md:max-w-full max-md:mt-10 max-w-[1000px] mx-auto">
            <div className="items-stretch border-[color:var(--Gray-3,#828282)] self-stretch flex flex-col p-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={`${selectedJobPost.logo}`}
                        className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aafd5caf-bba5-4f9b-add8-df4c125ab503?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div onClick={handleFindJobsOneCompany} className="hover:text-blue-500 cursor-pointer text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 self-start">
                    {selectedJobPost.companyName}
                </div>
                <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2 self-start">
                    {selectedJobPost.jobTitle}
                </div>
                <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {`₦${selectedJobPost.minimumPay} - ₦${selectedJobPost.maximumPay} / ${selectedJobPost.payRate}`}
                </div>
                <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {selectedJobPost.location}
                </div>

                <button onClick={apply} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap bg-blue-500 w-[115px] max-w-full mt-3 px-4 py-2 rounded-xl self-start">
                    Apply now
                </button>

            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase whitespace-nowrap mt-2.5 max-md:max-w-full">
                Job Description{" "}
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                {selectedJobPost.description}
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase whitespace-nowrap mt-3.5 max-md:max-w-full">
                Responsibilities
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                <ul>
                    <li>
                        Collaborate with cross-functional teams to design,
                        develop, and maintain web applications.
                    </li>
                    <li>
                        Work on both front-end and back-end development tasks,
                        contributing to the full software development lifecycle.
                    </li>
                    <li>
                        Participate in code reviews, troubleshoot issues, and
                        optimize application performance.
                    </li>
                    <li>
                        Stay up-to-date with emerging technologies and industry
                        trends, applying them to your work as appropriate.
                    </li>
                    <li>
                        Communicate effectively within the team, sharing ideas and
                        insights to help improve our products.
                    </li>
                </ul>
            </div>
            { seeMore &&
                <>
                    <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase mt-5 w-full max-md:max-w-full">
                        Qualifications
                    </div>
                    <div className="text-black text-lg font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                        <ul>
                            <li>
                                Bachelor's degree in Computer Science or a related field (or
                                equivalent work experience).
                            </li>
                            <li>
                                Strong knowledge of front-end technologies, including HTML, CSS,
                                JavaScript, and popular front-end frameworks (e.g., React, Angular,
                                or Vue.js).
                            </li>
                            <li>
                                Proficiency in back-end development using languages such as Python,
                                Java, Ruby, or Node.js.
                            </li>
                            <li>
                                Familiarity with database systems (SQL and NoSQL databases).
                            </li>
                            <li>
                                Basic understanding of RESTful APIs and web services.
                            </li>
                            <li>
                                Strong problem-solving skills and a passion for learning and
                                innovation.
                            </li>
                        </ul>
                    </div>
                </>
            }
            <div onClick={handleSeeMore} className="cursor-pointer text-blue-500 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-2 mb-10 self-end">
                {" "}

                { !seeMore ? "See more" : "See less" } &gt;&gt;&gt;

            </div>
        </div>
    )
}