import React from 'react'
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa'

const Skill = () => {
    //contents for different cards at skills section
    const data=[
        {
            icon:<FaCode/>,
            title: 'Frontend',
             items:[
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
            ],
        },
        {
            icon:<FaServer/>,
            title: 'Backend',
            items:[
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
            ],
        },
        {
            icon:<FaDatabase/>,
            title: 'DataBase',
            items:[
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
                {
                    name:'react',
                },
            ],
        },
    ]
  return (
    <section className='p-2 mt-6 bg-slate-300'>
        <h2 className='text-2xl'>Skills</h2>
        <div className='flex justify-around gap-4'>
            {/* mapping the data for cards */}
           {data.map((val,i)=>{
            return(
                <div key={i} className='border-none rounded-lg bg-gray-700 p-2 text-white '>
                    <p className='text-2xl text-white'>{val.icon}</p>
                    <h2 className='text-white'>{val.title}</h2>
                    {/* nested mapping for accessing the objects of items */}
                    <div className='flex gap-3'>{val.items.map((value,index)=>{
                        return(
                            <div key={index} className='border-none rounded-lg px-1 py-1 bg-transparent shadow-md shadow-white'>
                                {value.name}
                                </div>
                        )
                    })}</div>
                </div>
            )
           })}
        </div>
    </section>
  )
}

export default Skill