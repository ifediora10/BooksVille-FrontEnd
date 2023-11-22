import {LoginForm} from "./components/Authentication/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
import {JobSeekerProfile} from "./components/profile/jobseekerProfile/JobSeekerProfile.jsx";
import {ResetPasswordEmail} from "./components/Authentication/ResetPasswordEmail.jsx";
import {SignUpForm} from "./components/Authentication/SignUpForm.jsx";
import {ResetPassword} from "./components/Authentication/ResetPassword.jsx";
import {EmployerProfile} from "./components/profile/employerProfile/EmployerProfile.jsx";

function App() {


  return (
    <>
        <Routes>
            <Route path="/jobseeker-signup" element={<SignUpForm/>}/>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/forgot-password" element={<ResetPasswordEmail/>}/>
            <Route path="/reset-forgot-password" element={<ResetPassword/>}/>
            <Route path="/jsProfile" element={<JobSeekerProfile/>}/>
            <Route path="/emProfile" element={<EmployerProfile/>}/>
        </Routes>
    </>
  )
}

export default App


