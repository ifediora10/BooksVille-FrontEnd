export const JobPostHalfDisplay = ({companyName, jobTitle, logo, priceRange, jobDescription, state, country}) => {
    return(
        <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
            <div className="items-stretch border-[color:var(--Gray-3,#828282)] self-stretch flex flex-col p-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        // src={logo}
                        src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1700142255/gtfd2nbof5pqblvyrfa7.svg"
                        className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aafd5caf-bba5-4f9b-add8-df4c125ab503?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 self-start">
                    {companyName}
                    Decagon
                </div>
                <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2 self-start">
                    {jobTitle}
                    Software Engineer
                </div>
                <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {priceRange}
                    ₦ 500,000 - ₦ 700,000/ per month
                </div>
                <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {/*{`${state}, ${country}`}*/}
                    Edo, Nigeria
                </div>
                <button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap bg-blue-500 w-[115px] max-w-full mt-3 px-4 py-2 rounded-xl self-start">
                    Apply now
                </button>
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-center whitespace-nowrap mt-2.5 max-md:max-w-full">
                Job Description{" "}
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                {jobDescription}
                We are seeking a talented and motivated Junior Full-Stack
                Engineer to join our dynamic team. As a Junior Full-Stack
                Engineer, you will work closely with our development team to
                create, maintain, and optimize web applications. This is an
                excellent opportunity for someone looking to kick-start their
                career in full-stack development and gain hands-on experience
                with modern technologies.
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-center whitespace-nowrap mt-3.5 max-md:max-w-full">
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
            <div className="text-blue-500 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-2 self-end">
                {" "}
                See more &gt;
            </div>
        </div>
    )
}