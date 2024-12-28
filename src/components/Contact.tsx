import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-8'>
            <h2 className='text-6xl font-serif font-bold bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700' data-aos='zoom-in-up'>Get in Touch</h2>
            <p className='text-gray-600 text-[20px] pt-2' data-aos='zoom-in-up'>
            If you would like to discuss potential project ,collabrations or have any
            Question, feel free to reach out to me via any of the following method: 
            </p>
            <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
              <AiOutlineMail size={30} /> 
              <a href="mailto:muhammadumar128512@gmail.com"> muhammadumar128512@gmial.com</a>
            </div>
            <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
              <BsTelephone size={30} /> 03122726480
            </div>
          </div>
          <div className='space-y-8'>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
              <label htmlFor='name'>Name</label>
              <input type='text'
              className='h-[40px] bg-transparent border border-sky-400' id='name' />
            </div>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
              <label htmlFor='email'>Email</label>
              <input type='text'
              className='h-[40px] bg-transparent border border-sky-400' id='email' />
            </div>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
              <label htmlFor='message'>Message</label>
              <textarea
              className='bg-transparent border border-sky-400' id='message' rows={8}/>
            </div>
            <button className='bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700 p-4 px-8 rounded-lg' data-aos='zoom-in-up'>Send</button>
          </div>
        </div>
    </div>
  )
}

export default Contact