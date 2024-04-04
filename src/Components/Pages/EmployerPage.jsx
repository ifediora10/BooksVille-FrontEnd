import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";
import {EmployerTopHeader} from "../profile/profileComponents/EmployerTopHeader.jsx";
import {EmployerProfile} from "../profile/employerProfile/EmployerProfile.jsx";

export const EmployerPage = () => {
    const [userData, setUserData] = useState()
    const [dep, setDep] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("/employer", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setUserData(response.data.data);
                    console.log(response.data.data)
                }
            )
        }

        fetchData();
    }, [dep]);

    const [page, setPage] = useState("employer-profile")

    const handleFindCandidatePage = () => {
        setPage("find-candidates")
    }

    const handleProfilePage = () => {
        setPage("employer-profile")
    }

    return(
        <div className="mb-15">
            <EmployerTopHeader
                handleFindCandidatePage={handleFindCandidatePage}
                handleProfilePage={handleProfilePage}
            />

            {/*{ page === "find-candidates" && <JobPostsFullPage handleSeeMore={handleSeeMore} handleFindJobsOneCompany={handleFindJobsOneCompany} /> }*/}
            { page === "employer-profile" && <EmployerProfile setDep={() => {setDep(!dep)}} userData={userData} /> }
        </div>
    )
}