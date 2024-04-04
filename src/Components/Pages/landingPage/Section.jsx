export const Section = () => {
    return (
        <div className="pb-[5rem] max-w-[1280px] mx-auto self-stretch border-b-[color:var(--blue-gray-200,#E2E8F0)] pl-20 pr-6 border-b border-solid max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <div className="text-blue-500 text-6xl font-extrabold leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                            Your Gateway to Career Success!
                        </div>
                        <div className="text-slate-600 text-lg leading-7 mt-6 max-md:max-w-full">
                            Unlock Opportunities, Empower Your Career Journey.
                            <br />
                            Welcome to the ultimate platform designed for both employers and
                            job seekers. Discover a world of possibilities and take control of
                            your professional future.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                        loading="lazy"
                        srcSet="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1700749115/Desktop_e7e5kn.svg"
                        className="aspect-[1.32] object-contain object-center w-full items-center self-stretch overflow-hidden mt-20 max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </div>
        </div>
    );
}