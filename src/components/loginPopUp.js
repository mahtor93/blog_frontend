import { IoIosClose } from "react-icons/io";
import { apiPost } from "@/app/services/user.services";
import { useEffect, useState } from "react";

const LoginPopUp = ({ closeModal }) => {

    
    const onSubmit = async (data) =>{
        try{
            await apiPost('login',data)
            .then()
        }catch(error){
        
        }
    }

    return (
        <>
            <div className="bg-slate-950 bg-opacity-70 border dark:border-blue-600 border-blue-800 sm:h-[420px]  rounded-lg sm:w-[420px]">
                <div className="flex flex-row justify-end">
                    <button className="text-slate-500 px-1 py-1 hover:text-slate-100" onClick={closeModal}>
                        <IoIosClose className="text-4xl" />
                    </button>
                </div>
               <div className="space-y-5">
               <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl">Iniciar Sesión</h2>
                </div>
                <div>
                    <form className="flex flex-col ml-11 mr-11 space-y-3">
                        <div className="flex flex-col space-y-2 max-w-[350px]">
                            <label>Correo electrónico</label>
                            <input className=" transition ease-in-out  h-[40px] p-2 rounded-full border dark:border-blue-600 border-blue-800 hover:border-blue-300 bg-inherit"></input>
                        </div>
                        <div className="flex flex-col space-y-2 max-w-[350px]">
                            <label>Contraseña</label>
                            <input type='password' className=" transition ease-in-out  h-[40px] p-2 rounded-full border dark:border-blue-600 border-blue-800 hover:border-blue-300 bg-inherit"></input>
                            <div className="flex flex-col text-end">
                                <a className="text-sm">Olvidé mi Contraseña</a>
                            </div>
                            
                        </div>
                        <div className="pt-5 flex flex-col">
                            <button className="bg-indigo-700 p-2 pl-5 pr-5 rounded-3xl" type="submit">Iniciar Sesión</button>
                            <div className="flex flex-row pt-1 text-sm items-center justify-center">
                            ¿No tienes una cuenta? <a className="px-1">Crear Cuenta</a>
                            </div>
                        </div>
                    </form>
                </div>
               </div>

            </div>
        </>
    )
}

export default LoginPopUp;