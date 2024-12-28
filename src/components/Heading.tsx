import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center  pb-8'>
        <p className='font-serif text-6xl bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700'>{title}</p>

    </div>
  )
}

export default Heading