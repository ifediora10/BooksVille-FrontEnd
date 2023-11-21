import * as React from "react";
import {useState} from "react";

export const Resumetttt = () => {
    let contact ="src/assets/images/profile.svg";
    let Location ="src/assets/images/Location.svg";
    let chevronright = "src/assets/images/chevronright.svg";
    let profile = "src/assets/images/profile.svg"
    let profileB = "src/assets/images/profileB.svg"
    let locations = "src/assets/images/Location.svg"
    let locationP = "src/assets/images/locationP.svg"
    const [panel, setPanel] = useState(0)

    return(
        <section className="self-center w-[872px] max-w-full mt-12 mb-14 max-md:my-10">

            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        {panel === 0 && (
                            <div className="justify-between items-stretch flex w-full gap-5">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <img className="links" onClick={() => setPanel(0)}
                                         loading="lazy"
                                         src={profile}
                                         className={`aspect-square object-contain object-center w-10 overflow-hidden my-2 ${
                                             panel === 0 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                         }`}

                                    />
                                    <div
                                        className={`text-${
                                            panel === 0 ? 'black' : 'blue-500'
                                        } text-base font-medium leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(0)}>Resume</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c4eeef-7086-455a-93c6-2443e20043f6?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 1 && (
                            <div className="justify-between items-stretch flex w-full gap-5">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <div className="justify-center items-center rounded border-[color:var(--Grey-300,#D0D5DD)] flex flex-col px-2 border-[0.5px] border-solid"><div className="justify-center items-center rounded flex flex-col px-2">
                                        <img className="links" onClick={() => setPanel(1)}
                                             loading="lazy"
                                             src={profileB}
                                             className={`aspect-square object-contain object-center w-4 h-6 overflow-hidden my-2  ${
                                                 panel === 1 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                             }`}

                                        />
                                    </div>
                                    </div>
                                    <div
                                        className={`text-${
                                            panel === 1 ? 'blue-500' : 'black'
                                        } text-base font-medium leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(0)}>Resume</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c4eeef-7086-455a-93c6-2443e20043f6?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 0 && (
                            <div className="justify-between items-stretch flex w-full gap-5 mt-6">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <img
                                        loading="lazy"
                                        src={locations}
                                        className={`aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full ${
                                            panel === 0 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                        }`}
                                    />
                                    <div
                                        className={`text-${
                                            panel === 0 ? 'black' : 'blue-500'
                                        } text-base leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(1)}>Cover Letter</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62271dac-62ac-4ee4-92c6-6598ce54b2a7?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 1 && (
                            <div className="justify-between items-stretch flex w-full gap-5 mt-6">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <div className="justify-center items-center rounded border-[color:var(--Grey-300,#D0D5DD)] bg-blue-500 flex flex-col px-2 border-[0.5px] border-solid">
                                        <img
                                            loading="lazy"
                                            src={locationP}
                                            className={`aspect-square object-contain object-center w-6 overflow-hidden my-2 ${
                                                panel === 1 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`text-${
                                            panel === 1 ? 'blue-500' : 'black'
                                        } text-base leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(1)}>Cover Letter</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62271dac-62ac-4ee4-92c6-6598ce54b2a7?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}


                    </div>
                </div>

                <div className="">
                    <div className="text-gray-300  text-base font-bold leading-6 tracking-normal mb-2">
                        Drop your resume in the box below
                    </div>
                    <div className="w-[30vw] max-h-100 border-2 border-dashed border-gray-300 rounded-lg p-4 mx-4 mb-4 text-white text-center">
                        <p className="text-black">Drop your files here or </p>
                        <p className="text-blue-500 cursor-pointer" href="">browse</p>
                        <p className="text-gray-300">Maximum size is: 50MB</p>
                    </div>
                </div>
            </div>

        </section>
    )
}