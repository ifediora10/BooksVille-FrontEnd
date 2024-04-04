import * as React from "react";
import {ApplicationProfileUpdate} from "./ApplicationProfileUpdate.jsx";
import {useState} from "react";

export const ReviewApplication= ({apply})=> {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
            <div className="absolute my-auto justify-end items-end rounded bg-white flex flex-col px-6 max-md:px-5 max-w-[528px]">

                <div className="text-black text-lg font-semibold leading-6 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                    AYOMIDE FATOGUN
                </div>

                { showInfo &&
                    <div className="w-[500px] p-[24px]">
                        <ApplicationProfileUpdate handleShowInfo={handleShowInfo} />
                    </div>
                }

                { !showInfo &&
                    <form className="self-start rounded bg-white flex flex-col max-md:px-5 max-w-[528px]">
                            <div className="justify-between items-stretch self-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                                <div className="items-stretch flex grow basis-[0%] flex-col">
                                    <div className="flex justify-between gap-2">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc5de8d-31b3-44ee-bf08-b41d12913f6b?"
                                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full mt-1"
                                        />
                                        <div className="text-black text-sm leading-5 tracking-normal lowercase self-stretch grow whitespace-nowrap">
                                            AYOMIDEFATOGUN@gmail.com
                                        </div>

                                    </div>
                                    <div className="items-center flex justify-between gap-2 mt-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50bbf34-9376-4667-8537-1a133866b27a?"
                                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-black text-sm leading-5 tracking-normal lowercase self-stretch grow whitespace-nowrap">
                                            07034245442
                                        </div>
                                    </div>
                                    <div className="items-center flex justify-between gap-2 mt-1">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/610d5d28-04c7-4685-bd55-d2db594d7e75?"
                                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-black text-sm leading-5 tracking-normal self-stretch grow whitespace-nowrap">
                                            Lagos, Nigeria
                                        </div>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    onClick={handleShowInfo}
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e71b7d7d-719d-442f-8969-1b2041bd681f?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                                />
                            </div>

                        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                            Resume and Coverletter
                        </div>
                        <div className="items-stretch rounded bg-white self-stretch flex justify-between gap-2 mt-2 px-6 py-3 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08cf5bc8-048c-4054-9ef4-b2a03d4fe045?"
                                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                                <div className="justify-between items-stretch flex gap-5">
                                    <div className="text-gray-900 text-base leading-5">
                                        Ayomide Fatogun Cv.pdf
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b803e5-147d-4e57-9e89-9c83ec3990a9?"
                                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start cursor-pointer"
                                    />
                                </div>
                                <div className="text-gray-300 text-xs leading-4 whitespace-nowrap mt-1">
                                    Uploaded 2 weeks ago
                                </div>
                            </div>
                        </div>
                        <div className="items-stretch rounded bg-white self-stretch flex justify-between gap-2 mt-4 px-6 py-3 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0e38ed-0277-446b-91ca-6132000cfea2?"
                                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                                <div className="justify-between items-stretch flex gap-5">
                                    <div className="text-gray-900 text-base leading-5 grow shrink basis-auto">
                                        Ayomide Fatogun Cover Letter.pdf
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6923fb47-ed3e-4b4d-9f85-5724848301e2?"
                                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start cursor-pointer"
                                    />
                                </div>
                                <div className="text-gray-300 text-xs leading-4 whitespace-nowrap mt-1">
                                    Uploaded a week ago
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                            Employer’s Question
                        </div>
                        <div className="relative top-1.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start max-w-fit px-1 mx-4 mt-2">
                            How many years of experience do you have in this field?
                        </div>

                        <input type="text" placeholder="Years of Experience" className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full" />

                        <div className="flex justify-between">
                            <button onClick={apply} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-blue-500 w-fit max-w-full my-6 px-4 py-2 rounded-xl self-end cursor-pointer">Cancel</button>
                            <input type="submit" value="Submit your application" className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-blue-500 w-fit max-w-full my-6 px-4 py-2 rounded-xl self-end cursor-pointer"/>
                        </div>
                    </form>
                }
        </div>
    );
}

