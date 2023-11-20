import {LoginForm} from "./components/Authentication/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
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
