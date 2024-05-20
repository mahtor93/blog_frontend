import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function Paginator() {
    return (
        <>
            <div className="">
                <div className="justify-between items-center mr-10 ml-10 flex flex-row">
                    <div className="text-5xl sm:text-4xl hover:animate-bounce-side-l text-slate-100">
                        <IoIosArrowDropleft />
                    </div>

                    <div className="text-5xl sm:text-4xl hover:animate-bounce-side-r text-slate-100">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
        </>
    )
}