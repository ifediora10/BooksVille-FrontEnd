import {Panel} from "../../profileComponents/Panel.jsx";
import {JobTitle} from "./JobTitle.jsx";
import {WorkSchedule} from "./WorkSchedule.jsx";
import {Salary} from "./Salary.jsx";
import {WorkSetting} from "./WorkSetting.jsx";
import {useState} from "react";

export const JobPreference = () => {
    const [page, setPage] = useState("jobTitle")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/23be1973-452f-4c5b-9d8b-6cdf9d0850f0?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/bb11b098-a728-4350-8412-2beaf69cf273?"
    let icon3 = "https://cdn.builder.io/api/v1/image/assets/TEMP/21d674a8-ed63-4271-bb5a-1c79bbd44804?"
    let icon4 = "https://cdn.builder.io/api/v1/image/assets/TEMP/2f485a0f-acfb-4e8c-aa47-9352f67b5137?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon5 = "https://cdn.builder.io/api/v1/image/assets/TEMP/fbafc836-1bfa-4a2e-a967-b7a2b25a0b75?"
    let icon6 = "https://cdn.builder.io/api/v1/image/assets/TEMP/9b8f194c-cd94-432c-a442-e1a9e9cdf211?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon7 = "https://cdn.builder.io/api/v1/image/assets/TEMP/0064fe58-422f-4712-bbc7-8e027a6903d7?"
    let icon8 = "https://cdn.builder.io/api/v1/image/assets/TEMP/9c45c67d-5337-4e3b-a536-8f42d9be7016?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"

    return (
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">

                        <Panel
                            btnName="Job Title"
                            handleClick={() => {setPage("jobTitle")}}
                            fontColor={ page === "jobTitle" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "jobTitle" ? icon2 : icon1}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Work Schedule"
                            handleClick={() => {setPage("workSchedule")}}
                            fontColor={ page === "workSchedule" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "workSchedule" ? icon4 : icon3}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Salary"
                            handleClick={() => {setPage("salary")}}
                            fontColor={ page === "salary" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "salary" ? icon6 : icon5}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Work Setting"
                            handleClick={() => {setPage("workSetting")}}
                            fontColor={ page === "workSetting" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "workSetting" ? icon8 : icon7}
                        />
                    </div>
                </div>


                { page === "jobTitle" && <JobTitle/> }
                { page === "workSchedule" && <WorkSchedule/> }
                { page === "salary" && <Salary/> }
                { page === "workSetting" && <WorkSetting/> }

            </div>
        </div>
    )
}