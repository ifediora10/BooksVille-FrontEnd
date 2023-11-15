import * as React from "react";
import "../App.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useState} from "react";
import axios from "axios";

export const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make API call to your Java backend to handle user registration
            await axios.post('http://localhost:8080/api/v1/auth/login', formData);

            // Handle success (redirect, show message, etc.)
            console.log('User login successfully!');
        } catch (error) {
            // Handle error (display error message, log, etc.)
            console.error('login failed:', error.message);
        }
    };

    let googleImg="src/assets/Google.svg";

    return (
        <div className="register-cont">

            <form className="register-form w-[40vw] py-3 px-8">
                <div>
                    <div className="top">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
                        </div>
                        <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}>SwiftSelect</h1>
                    </div>
                    <h2 className="text-center font-semibold text-2xl">Welcome back to SwiftSelect</h2>
                </div>

                <div className="gateway sm:col-span-full">
                    <img src={googleImg} alt="" />
                    <h4>Sign in with Google</h4>
                </div>
                <div className="divider">
                    <h3 style={{color: "#98A2B3"}}>OR</h3>
                </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
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
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="password-toggle" onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>


                        <div className="col-span-full mt-2" style={{color: "#98A2B3"}}>
                                <h3><a href="#" style={{color: "#2F80ED"}}> Forgot password? </a></h3>
                         </div>

                    <div className="col-span-full">
                        <div className="mt-7">
                            <input
                                type="submit"
                                name="submit"
                                id="submit"
                                value="Submit"
                                className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full text-center mt-2" style={{color: "#98A2B3"}}>
                        <h3>Don't have an account? <a href="#" style={{color: "#2F80ED"}}> Sign up here</a></h3>
                    </div>

            </form>
        </div>
    );
}