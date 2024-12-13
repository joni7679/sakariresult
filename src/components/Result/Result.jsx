import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';



export default function Result() {
    const [data, setData] = useState([])
    console.log(data);

    const fatchResult = () => {
        const url = `https://sarkari-result.p.rapidapi.com/scrape/result`
        const options = {
            method: 'GET',

            headers: {
                'x-rapidapi-key': '765842135cmsh253bcd23c8fba24p11dfd3jsn82f503488a0d',
                'x-rapidapi-host': 'sarkari-result.p.rapidapi.com'
            }
        };
        axios.get(url, options).then((res) => {
            console.log(res.data.result);
            setData(res.data.result)

        })

    }

    useEffect(() => {
        fatchResult()
    }, [])

    return (
        <>
            <Navbar />
            <div className="px-5">
                <h1 className="text-center text-3xl font-bold py-5">Result</h1>
                <div className='w-[500px] px-5 h-[500px] overflow-scroll'>
                    <h1 className='bg-red-600 text-white p-5 rounded ' >Latest Result 2024</h1>
                    <div className='border-2 border-gray-800 p-5'>
                        {data.length > 0 ? (
                            data.map((result, index) => (
                                <p key={index} className='mt-4 border-b border-gray-700 w-fit'>
                                    <a  href={result.href}>{result.text}</a>
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
