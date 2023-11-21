import * as React from "react";
import {useState} from "react";

export const JobTitle = () => {
    const [imageClicked, setImageClicked] = useState(true);

    const [jobTitle, setJobTitle] = useState("");

    const handleImageClick = () => {
        // Toggle the state when the image is clicked
        setImageClicked(!imageClicked);
    };

    const handleInputChange = (e) => {
        // Update jobTitle state when input value changes
        setJobTitle(e.target.value);
    };

    return (
        <form className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">

            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8056bf8-82b6-4c5c-8d8d-e67468ec1991?"
                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full self-end cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>

                    <>
                        <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                            Desired job title?
                        </div>
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            value={jobTitle}
                            onChange={handleInputChange}
                            className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                        />

                        {jobTitle.trim() !== "" && (
                            <input
                                type="submit"
                                name="submit"
                                value="Save Changes"
                                className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[145px] max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                            />
                        )}
                    </>

            </div>
        </form>
    );
};
