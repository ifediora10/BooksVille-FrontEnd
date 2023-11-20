import * as React from "react";
import "../../../App.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useState} from "react";
import axios from "../../../api/axios.jsx";
import {Link, useNavigate} from "react-router-dom";
import {SuccessCard} from "../../SuccessCard.jsx";
import {ClipLoader} from "react-spinners";
import {SweetAlert} from "../../utils/SweetAlert.jsx";

export const SignUpForm = () => {
    const [clip, setClip] = useState(false);

    const [blur, setBlur] = useState("");

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        gender: 'MALE',
        dateOfBirth:'',
        country: '',
        address: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setClip(true);
            setBlur("opacity-[0.2]");

            // Make API call to your Java backend to handle user registration
            await axios.post('/auth/job-seeker/register', formData)
                .then(result => {

                    setClip(false);

                    SweetAlert('success', 'Hello!', 'This is a success message.');

                    setTimeout(() => {
                        setBlur("");
                        setSuccess(true);
                    }, 1000)

                    // Handle success (redirect, show message, etc.)
                    console.log(result.data);
                });

        } catch (error) {
            setClip(false);

            SweetAlert('error', 'Oops!', 'Something went wrong, Please try again', 2000);

            setTimeout(() => {
                setBlur("");
            }, 2000)

            // Handle error (display error message, log, etc.)
            console.error('Registration failed:', error.message);
        }
    };

    let googleImg="src/assets/Google.svg";

    return (
        <div>
            { clip &&
                <ClipLoader color="#36D7B7" loading={true} size={100} className="absolute right-[46.5vw] top-[44vh]" />
            }

            <div className={`register-cont ${blur}`}>

            {success &&
                <SuccessCard
                    message="Account Registration successful!"
                    bgColor="bg-black"
                    details="Your account has been created successfully, Please visit your email to verify your account"
                    buttonName="Return to Login"
                    handleClick={() => {navigate("/")}}
                />
            }

            <form onSubmit={handleSubmit} className="register-form">
                <div>
                    <div className="top">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
                        </div>
                        <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}>SwiftSelect</h1>
                    </div>
                    <h2 className="text-center font-semibold text-2xl">Create a new account</h2>
                </div>

                <div className="gateway sm:col-span-full">
                    <img src={googleImg} alt=""/>
                    <h4>Sign up with Google</h4>
                </div>
                <div className="divider">
                    <h3 style={{color: "#98A2B3"}}>OR</h3>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-6 w-[45vw]">
                    <div className="sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                id="firstName"
                                autoComplete="first-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                id="lastName"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                onChange={handleChange}
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2 pass-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="password-toggle" onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2 pass-input">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                autoComplete="confirm-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="password-toggle" onClick={handleToggleConfirmPassword}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                            Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="address"
                                name="address"
                                onChange={handleChange}
                                type="text"
                                autoComplete="address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3 sm:col-start-1">
                        <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2">
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                id="tel"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            Gender
                        </label>
                        <div className="mt-2">
                            <select
                                id="gender"
                                name="gender"
                                onChange={handleChange}
                                autoComplete="gender"
                                required
                                className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="MALE">
                                    MALE
                                </option>
                                <option value="FEMALE">
                                    FEMALE
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3 sm:col-start-1">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Country
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                onChange={handleChange}
                                autoComplete="country-name"
                                required
                                className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="United States">
                                    United States
                                </option>
                                <option value="Canada">
                                    Canada
                                </option>
                                <option value="Mexico">
                                    Mexico
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Date of birth
                        </label>
                        <div className="mt-2">
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                id="date"
                                autoComplete="date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <div className="mt-4">
                            <input
                                type="submit"
                                name="submit"
                                id="submit"
                                value="Submit"
                                className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full text-center my-3" style={{color: "#98A2B3"}}>
                        <h3>Already have an account? <Link className="cursor-pointer" to="/" style={{color: "#2F80ED"}}> Log in here</Link></h3>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}