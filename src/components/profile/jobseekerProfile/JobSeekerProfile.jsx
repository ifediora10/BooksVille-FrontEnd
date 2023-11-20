
import * as React from "react";
import {EmployerTopheader} from "../profileComponents/EmployerTopheader.jsx";
import {EmployerProfileMidheader} from "../profileComponents/EmployerProfileMidheader.jsx";
import {Qualification} from "./qualification/Qualification.jsx";
import {JobPreference} from "./jobPreference/JobPreference.jsx";
import {PersonalInfo} from "./personalInfo/PersonalInfo.jsx";
import {CV} from "./resume/CV.jsx";
import {useState} from "react";

export const JobSeekerProfile = ()=> {
    const [page, setPage] = useState("personalInfo");

    return (
        <div className="bg-white flex flex-col items-stretch h-[50rem]">
            <EmployerTopheader/>
            <EmployerProfileMidheader/>

            <div className="justify-between self-center w-[872px] max-w-full mt-10 px-5">
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0 gap-5">
                    <div onClick={() => {setPage("personalInfo")}} className={`${page === "personalInfo" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 cursor-pointer`}>
                        Personal Information
                    </div>
                    <div onClick={() => {setPage("cv")}} className={`${page === "cv" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 cursor-pointer`}>
                        Resume
                    </div>
                    <div onClick={() => {setPage("qualification")}} className={`${page === "qualification" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 cursor-pointer`}>
                        Qualification
                    </div>
                    <div onClick={() => {setPage("jobPreference")}} className={`${page === "jobPreference" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 cursor-pointer`}>
                        Job Preference
                    </div>
                </div>
            </div>

            <div className="w-[860px] mx-auto mt-10">
                {page === "personalInfo" && <PersonalInfo/> }
                {page === "cv" && <CV/> }
                {page === "qualification" && <Qualification/> }
                {page === "jobPreference" && <JobPreference/> }
            </div>
        </div>
    );
}


