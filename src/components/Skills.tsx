import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 '>
        <div className='grid md:grid-rows-2  items-center'>    
            <div className='text-center space-y-5 font-serif' data-aos='zoom-in-up'>
                <h2 className='text-4xl md:text-6xl bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700' data-aos='zoom-in-up'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2 text-2xl space-y-5' data-aos='zoom-in-up'>
                    I have a solid foundation in web Development&lsquo; specilaizing
                     in HTML CSS and JavaScript.My experience extends to using
                      frameworks like React and Next.js to create dynamic and user
                       friendly applications. I&apos;m also proficient in Tailwind CSS for 
                        efficient styling and design. With a passion for learning .I
                        stay updated on the latest Technologies to enhance my skill set
                         and contribute effectively to project. 
                </p>
            </div>
            <div>
                <div className='max-w-full sm:w-auto'>
                    <div className='flex  justify-between gap-5 pt-6'>
                    <Image src={'/image/html.png'} alt='HTML icon' height={200} width={200} data-aos='zoom-in-up' />
                    <Image src={'/image/CSS.jpg'} alt='CSS icon' height={200} width={200} data-aos='zoom-in-up'/>
                    <Image src={'/image/javascript.jpg'} alt='JavaScript icon' height={200} width={200} data-aos='zoom-in-up'/>
                    <Image src={'/image/tailwindcss.jpg'} alt='tailwind icon' height={200} width={200} data-aos='zoom-in-up'/>
                    <Image src={'/image/Typescript.jpg'} alt='Typescript icon' height={200} width={200} data-aos='zoom-in-up'/>
                    <Image src={'/image/nextjs.jpg'} alt='nextjs icon' height={200} width={200} data-aos='zoom-in-up'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills