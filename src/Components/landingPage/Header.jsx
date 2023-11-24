import {Link} from "react-router-dom";

export const Header = ()=>{

    return (
        <div className="max-w-[1280px] mx-auto justify-between items-stretch self-stretch border-b-[color:var(--blue-gray-200,#E2E8F0)] flex gap-5 pl-20 pr-6 pb-4 border-b border-solid max-md:flex-wrap max-md:px-5">
            <div className="logo">
                <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
            </div>
            <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:justify-center">
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide">
                    Products
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide">
                    About Us
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide">
                    Services
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide whitespace-nowrap">
                    Help Center
                </div>
            </div>
            <div className="items-center flex justify-between gap-5 mt-8">
                <Link to="/login" className="flex items-center text-blue-600 text-base font-medium leading-6 tracking-wide my-auto">
                    Log In
                </Link>
                <div className=" justify-between items-stretch mb-3 border-[color:var(--blue-600,#2563EB)] bg-blue-600 self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5">
                    <Link to="/jobseeker-signup" className="text-white text-base font-medium leading-6 tracking-wide">
                        Sign Up Free
                    </Link>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}