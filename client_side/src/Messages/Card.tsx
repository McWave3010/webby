import React from 'react';
import logo from "../assets/images/logo.jpg";

interface Message {
    id?: string | number;
    message:string;
}


const Card:React.FunctionComponent<Message> = ({ message })=>{
    return (
        <div className='w-full h-[90%] bg-white flex justify-center items-center rounded-2xl flex-col gap-4 p-6 shadow-md'>
            <div className="w-[50%] h-[20%] flex justify-center items-center">
                <img src={logo} alt="web logo" className='h-full rounded-full'/>
            </div>
            <div className="w-full h-full p-4">
                <span className="font=Poppins text-md text-black text-center">{message}</span>
            </div>
          
        </div>
    )
}

export default React.memo(Card);