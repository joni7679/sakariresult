import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';

export default function LatestJobs() {
    const [jobs, SetJobs] = useState([])
    const fatchLatesJobs = () => {
        const url = `https://sarkari-result.p.rapidapi.com/scrape/latestjob`
        const options = {
            method: 'GET',

            headers: {
                'x-rapidapi-key': '765842135cmsh253bcd23c8fba24p11dfd3jsn82f503488a0d',
                'x-rapidapi-host': 'sarkari-result.p.rapidapi.com'
            }
        };
        axios.get(url, options).then((res) => {
            console.log(res.data.result);
            SetJobs(res.data.result)
           
        }).catch((err)=>{
        console.log(err,'falied datas');
        
        })

    }

    useEffect(() => {
        fatchLatesJobs()
    }, [])

    return (
        <>
            <Navbar />
            <div className="px-5">
                <h1 className="text-center text-3xl font-bold py-5">Jobs</h1>
                <div className='w-[500px] px-5'>
                    <h1 className='bg-red-600 text-white p-5 rounded ' >Latest Jobs</h1>
                    <div className='border-2 border-gray-800 p-5'>
                        {jobs.length > 0 ? (
                            jobs.map((elem, index) => (
                                <p key={index} className='mt-4 border-b border-gray-700 w-fit'>
                                    <a href={elem.href}>{elem.text}</a>
                                </p>
                            ))
                        ) : (
                            <h1>Loading............</h1>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
