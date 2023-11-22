export const SortJobPosts = () => {
    return (
        <div className="items-stretch flex flex-col">
            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full">
                Schedule
            </div>
            {/* Other content... */}
            {renderCheckbox("Full time")}
            {renderCheckbox("Part time")}
            {renderCheckbox("Project work")}
            {renderCheckbox("Volunteering")}
            {renderCheckbox("Internship")}

            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Employment type
            </div>
            {/* Other content... */}
            {renderCheckbox("Full day")}
            {renderCheckbox("Shift work")}
            {renderCheckbox("Flexible schedule")}
            {renderCheckbox("Distant work")}
            {renderCheckbox("Shift method")}

            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Professional level
            </div>
            {/* Other content... */}
            {renderCheckbox("Trainee level")}
            {renderCheckbox("Junior")}
            {renderCheckbox("Middle level")}
            {renderCheckbox("Senior level")}
            {renderCheckbox("Director level")}
        </div>
    );
};

const renderCheckbox = (label) => (
    <div className="items-stretch flex w-full justify-between gap-2 mt-2 px-5">
        <input
            type="checkbox"
            className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full bg-blue-500"
        />
        <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap self-start">
            {label}
        </div>
    </div>
);
