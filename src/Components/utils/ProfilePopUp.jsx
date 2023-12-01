import * as React from "react";

export const ProfilePopUp = () => {
  return (
    <div className="items-stretch bg-white flex flex-col py-2 max-w-[21rem] max-h-[12rem] px-6">
      <header className="text-sky-500 text-xl leading-7 tracking-normal max-w-[272px] justify-center items-stretch bg-white w-full py-2 max-md:px-1">
        ayomidefatogun@gmail.com
      </header>
      <div className="cursor-pointer hover:bg-blue-300 items-center bg-white flex w-full gap-2.5 pl-8 pr-16 p-2 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25326447-9b80-4304-aa76-fe139ec3e020?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          alt="Profile"
        />
        <div className="text-gray-900 text-xl leading-7 tracking-normal">
          Profile
        </div>
      </div>
      <div className="cursor-pointer hover:bg-blue-300 items-center bg-white flex w-full gap-2.5 pl-8 pr-14 py-2 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ad5336-2262-4b80-9df4-826195bc0b06?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          alt="Settings"
        />
        <div className="text-gray-900 text-xl leading-7 tracking-normal">
          Settings
        </div>
      </div>
      <div className="cursor-pointer justify-center items-center bg-white flex w-full flex-col px-5 py-2" style={{borderTop: "1px solid gray"}}>
        <div className="flex items-center gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/812c440b-9896-4823-86a9-8fca8dff9d7e?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            alt="Sign out"
          />
          <div className="text-rose-500 text-xl leading-7 tracking-normal self-stretch">
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}