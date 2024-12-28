import React from 'react';

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen '>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='w-[500px] h-[500px] rounded-full bg-cover bg-center m-20' style={{backgroundImage:"url('/image/taji2.jpg')"}}/>
        <div className='text-[40px] sm:text-[60px] font-semibold leading-relex flex justify-start
         '>
          <div className='font-serif pt-20 bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700' >
            <p>I&apos;m</p>
            <p>Shagufta Zakir</p>
            <p>Frontend<br/>Web-Developer</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;