import {JobSeekerProfile} from "../profile/jobseekerProfile/JobSeekerProfile.jsx";
import {JobPostsFullPage} from "../findJobPosts/JobPostsFullPage.jsx";
import {JobPostSeeMore} from "../findJobPosts/JobPostSeeMore.jsx";
import {JobPostsForOneCompany} from "../findJobPosts/JobPostsForOneCompany.jsx";
import {useState} from "react";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";

export const JobSeekerPage = () => {
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
            { page === "jobSeeker-profile" && <JobSeekerProfile/> }
        </div>
    )
}