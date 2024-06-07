import { IoIosClose } from "react-icons/io";


const LoginPopUp = ({ closeModal }) => {
    return (
        <>
            <div className="shadow-2xl  bg-gradient-to-b from-slate-950 to-indigo-950 sm:h-[440px]  rounded-lg sm:w-[512px]">
                <div className="flex flex-row justify-end">
                <button className="text-slate-500 px-2 py-2 rounded-md hover:text-slate-100 m-3" onClick={closeModal}>
                    <IoIosClose className="text-4xl"/>
                </button>
                </div>
            </div>
        </>
    )
}

export default LoginPopUp;