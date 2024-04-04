export const JobPostSearch = () => {
    return(
        <div className="items-stretch flex w-full gap-2 -mr-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="items-stretch bg-slate-50 flex justify-between gap-5 px-6 py-2.5 rounded-lg max-md:px-5">
                <input
                    type="text"
                    className="items-stretch bg-slate-50 flex justify-between gap-5 px-6 py-2.5 rounded-lg max-md:px-5 text-slate-400 text-sm leading-5 tracking-normal w-[244px]"
                    placeholder="Job titles, Keyword and Company"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/947283cb-3d8a-40c4-ace0-89c173dff43e?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
            <div className="items-stretch bg-slate-50 flex justify-between gap-5 px-6 py-2.5 rounded-lg max-md:px-5">
                <input
                    type="text"
                    className="items-stretch bg-slate-50 flex justify-between gap-5 px-6 py-2.5 rounded-lg max-md:px-5 text-slate-400 text-sm leading-5 tracking-normal"
                    placeholder="State, Country or Remote"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a1c487e-b954-4e76-b534-88075c0cde37?"
                    className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
            {/*<button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap bg-blue-500 w-[115px] max-w-full mt-3 px-4 py-2 rounded-xl self-start">*/}
            <button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 px-4 py-2 rounded-xl">
                Find Jobs
            </button>
        </div>
    )
}