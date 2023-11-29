import * as React from "react";

export const ProgressBar = () => {
    return(
        <>
            <div className="items-stretch self-center flex w-[404px] max-w-full justify-between gap-5 mt-20 px-5 max-md:justify-center max-md:mt-10">
                <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap aspect-square items-stretch px-3.5 py-2.5 rounded-[50%] max-md:pr-px">
                    1
                </div>
                <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square px-3.5 py-2.5 rounded-[50%]">
                    2
                </div>
                <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square items-stretch px-3 py-2.5 rounded-[50%]">
                    3
                </div>
            </div>

            <div className="justify-between items-stretch self-center flex w-[500px] max-w-full gap-5 px-5 max-md:flex-wrap max-md:justify-center">
                <div className="text-blue-500 text-center text-base leading-6 tracking-normal cursor-pointer">
                    Job Information
                </div>
                <div className="text-blue-500 text-base leading-6 grow shrink basis-auto cursor-pointer">
                    Qualifications and Requirements
                </div>
                <div className="text-blue-500 text-base leading-6 whitespace-nowrap cursor-pointer">
                    Contact Details
                </div>
            </div>
        </>
    )
}