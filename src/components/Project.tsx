import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title:"Todo list",
        desc:"A React & TypeScript based app for managing and orgianizing your task efficiently.",
        img:"/image/Todo list.PNG",
        tags:["React", "Node", "CSS", "TYpeScript"],
    },
    {
        id:1,
        title:"Countdown Timer",
        desc:"A Nextjs & TypeScript powered website to track time with an interactive countdown feature.",
        img:"/image/countdown.PNG",
        tags:["Next.js", "Node", "CSS", "TYpeScript"],
    },
    {
        id:2,
        title:"Portfolio",
        desc:"A HTML and CSS based portfolio showcase their skills and experiance. ",
        img:"/image/portfolio.PNG",
        tags:["React", "Node", "CSS", "TypeScript"],
    },
    {
        id:3,
        title:"Static Interactive Resume",
        desc:"A TypeScript based interactive resume built with HTML and CSS, allowing user to showcase their skills dynamically.   ",
        img:"/image/static resume.PNG",
        tags:["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id:4,
        title:"Analog Clock",
        desc:"A TypeScript based clock  build with HTML and CSS,for managing time.",
        img:"/image/analog clock.PNG",
        tags:["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id:5,
        title:"E-Commerce Website",
        desc:"Next.js -based e-commerce website offering fast performace,and a seamless shopping experience.",
        img:"/image/nike.PNG",
        tags:["Next.js", "Node", "CSS Tailwind", "TypeScript"],
    },
]

const Project = () => {
  return (
    <div id='projects' className='container pt-28'>
        <Heading title='My Project'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Project