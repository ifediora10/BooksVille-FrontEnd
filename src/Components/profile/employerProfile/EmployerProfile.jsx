import * as React from "react";
import {ProfileMidHeader} from "../profileComponents/ProfileMidHeader.jsx";
import {useState} from "react";
import {Panel} from "../profileComponents/Panel.jsx";
import {EmployerCompanyInfo} from "./EmployerCompanyInfo.jsx";
import {EmployerContactInfo} from "./EmployerContactInfo.jsx";
import {EmployerTopheader} from "../profileComponents/EmployerTopheader.jsx";

export const EmployerProfile = () => {

    const [page, setPage] = useState("contact")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa16182-7439-4930-9f3d-507f913568da?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/7efb15d3-cbb2-4b2d-8e2c-1890935a04cb?"
    let icon3 = "https://cdn.builder.io/api/v1/image/assets/TEMP/a53e3bc2-a9f8-4f23-bab5-00a51c4e9474?"
    let icon4 = "https://cdn.builder.io/api/v1/image/assets/TEMP/f97e0d10-8b96-4ab1-887e-5c279c119c0d?"

    const contactPage = () => {
        setPage("contact")
    }

    const locationPage = () => {
        setPage("location")
    }

    return (
        <div className="bg-white flex flex-col items-stretch">
            <EmployerTopheader
                handleFindCandidatePage={handleFindCandidatePage}
                handleProfilePage={handleProfilePage}
            />

            <ProfileMidHeader/>

            <div className="self-center w-[872px] max-w-full mt-12 mb-14 max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                            <Panel
                                btnName="Company Information"
                                handleClick={contactPage}
                                fontColor={ page === "contact" ? "text-blue-500" : "text-black-500" }
                                imgDis={ page === "contact" ? icon3 : icon4}
                            />

                            <hr className="max-w-[322px] my-2"/>

                            <Panel
                                btnName="Contact Information"
                                handleClick={locationPage}
                                fontColor={ page === "location" ? "text-blue-500" : "text-black-500" }
                                imgDis={ page === "location" ? icon2 : icon1 }
                            />
                        </div>
                    </div>

                    { page === "contact" && <EmployerCompanyInfo/> }
                    { page === "location" && <EmployerContactInfo/> }

                </div>
            </div>
        </div>
    );
}



