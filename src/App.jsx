import {JobSeekerCard} from "./components/JobSeekerCard.jsx";
import {SignUpForm} from "./components/profile/Authentication/SignUpForm.jsx";
import {Testing} from "./components/Testing.jsx";
import {LoginForm} from "./components/profile/Authentication/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
import {SuccessCard} from "./components/SuccessCard.jsx";
import {JobSeekerProfile} from "./components/profile/jobseekerProfile/JobSeekerProfile.jsx";


function App() {

  return (
    <>
        <Routes>
            <Route path="/jobseeker-signup" element={<SignUpForm/>}/>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/jsProfile" element={<JobSeekerProfile/>}/>
        </Routes>
    </>
  )
}

export default App






// try {
//     axios.get("http://localhost:8080/api/v1/job-post/testing")
//         .then(response => console.log(response.data))
// } catch (error) {
//     // Handle error (display error message, log, etc.)
//     console.error('Registration failed:', error.message);
// }
