import {LoginForm} from "./components/Authentication/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
import {ResetPasswordEmail} from "./components/Authentication/ResetPasswordEmail.jsx";
import {SignUpForm} from "./components/Authentication/SignUpForm.jsx";
import {ResetPassword} from "./components/Authentication/ResetPassword.jsx";
import {EmployerProfile} from "./components/profile/employerProfile/EmployerProfile.jsx";
import {JobSeekerPage} from "./components/Pages/JobSeekerPage.jsx";
import {Testing} from "./components/Testing.jsx";
import {EmployerSignUpForm} from "./components/Authentication/EmployerSignupForm.jsx";
import {LandingPage} from "./Components/landingPage/LandingPage.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/jobseeker-signup" element={<SignUpForm/>}/>
            <Route path="/employer-signup" element={<EmployerSignUpForm/>}/>
            <Route path="/forgot-password" element={<ResetPasswordEmail/>}/>
            <Route path="/reset-forgot-password" element={<ResetPassword/>}/>
            <Route path="/emProfile" element={<EmployerProfile/>}/>
            <Route path="/jobseeker-page" element={<JobSeekerPage/>}/>
        </Routes>
    </>
  )
}

export default App


