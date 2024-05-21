import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function Paginator() {
    return (
        <>
        <div className="flex flex-col space-y-10">
            <div className="justify-between items-center mr-10 ml-10 flex flex-row">
                <div className="text-5xl sm:text-4xl hover:animate-bounce-side-l text-slate-100 mr-11">
                    <IoIosArrowDropleft />
                </div>
                <div className="text-5xl sm:text-4xl hover:animate-bounce-side-r text-slate-100 ml-11">
                    <IoIosArrowDropright />
                </div>
            </div>
        </div>
        </>
    )
}