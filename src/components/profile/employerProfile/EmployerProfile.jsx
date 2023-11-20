import * as React from "react";
import {EmployerTopheader} from "../profileComponents/EmployerTopheader.jsx";
import {EmployerProfileMidheader} from "../profileComponents/EmployerProfileMidheader.jsx";
import {EmployerProfileBody} from "../profileComponents/EmployerProfileBody.jsx";

export const EmployerProfile = ()=> {

    let profile = "src/assets/images/profile_image.svg"
    let greendot = "src/assets/images/greendot.svg"

    return (
        <div className="bg-white flex flex-col items-stretch">
           <EmployerTopheader/>
            <EmployerProfileMidheader/>
            <EmployerProfileBody/>
        </div>
    );
}



