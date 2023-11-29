import {JobSeekerProfile} from "../profile/jobseekerProfile/JobSeekerProfile.jsx";
import {JobPostsFullPage} from "../findJobPosts/JobPostsFullPage.jsx";
import {JobPostSeeMore} from "../findJobPosts/JobPostSeeMore.jsx";
import {JobPostsForOneCompany} from "../findJobPosts/JobPostsForOneCompany.jsx";
import {useEffect, useState} from "react";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";
import axios from "../../api/axios.jsx";
import {ChatPage} from "./ChatPage.jsx";
import {Route} from "react-router-dom";

export const JobSeekerPage = () => {
    const [userData, setUserData] = useState()
    const [dep, setDep] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("/job-seeker", {
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

    const [page, setPage] = useState("find-jobs")

    const handleFindJobPage = () => {
        setPage("find-jobs")
    }

    const handleProfilePage = () => {
        setPage("jobSeeker-profile")
    }

    const handleSeeMore = () => {
        setPage("find-jobs-see-more")
    }

    const handleFindJobsOneCompany = () => {
        setPage("find-jobs-one-company")
    }

    return(
        <div className="mb-15">
            <JobSeekerTopHeader
                handleFindJobPage={handleFindJobPage}
                handleProfilePage={handleProfilePage}
            />

            { page === "find-jobs" && <JobPostsFullPage handleSeeMore={handleSeeMore} handleFindJobsOneCompany={handleFindJobsOneCompany} /> }
            { page === "find-jobs-see-more" && <JobPostSeeMore handleFindJobsOneCompany={handleFindJobsOneCompany} /> }
            { page === "find-jobs-one-company" && <JobPostsForOneCompany companyName="Decagon Institute"/> }
            { page === "jobSeeker-profile" && <JobSeekerProfile setDep={() => {setDep(!dep)}} userData={userData} /> }

        </div>
    )
}