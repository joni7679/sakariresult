import React from 'react'
import { govtJobs } from '../../govjobsdata'

export default function Jobupdates() {


    return (
        <>
            <div className="container px-5 mx-auto">
                <h1 className='font-semibold p-5 text-center capitalize text-xl underline'>gov jobs updates</h1>
                <div className="flex items-start justify-center gap-2 flex-wrap">
                    {govtJobs.map((job, index) => {
                        return (
                            <div className='w-[550px] shadow rounded p-5  h-[150px]' key={index} >
                                <div className="card-title">
                                    <p className='capitalize text-xl'> <span className='font-semibold '>post name</span>:{job.title}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='capitalize'> <span className='font-semibold'>location</span> : {job.location}</p>
                                    <p className='capitalize'> <span className='font-semibold'>qulification</span> : {job.qualification}</p>
                                </div>
                                <div className="flex justify-between ">
                                    <p className='mt-2 capitalize ' > <span className='font-semibold'>last date</span> : <span>{job.lastDate}</span> </p>

                                    <button className='px-[25px] py-[10px] rounded border-none outline-none capitalize bg-blue-800 text-white hover:bg-blue-950 duration-150 mt-2'>apply now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
