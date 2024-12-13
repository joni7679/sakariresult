import React from 'react'
import { examData } from '../../assets/examdata'

export default function Card() {
    return (
        <>
            {examData.map((val, i) => {
                return (
                    <div key={i} className=" w-[300px] p-6 rounded-md shadow-md cursor-pointer ">
                        <div className="mt-6 mb-2 w-full">
                            <span className="block text-xs font-medium tracking-widest uppercase ">{val.name}</span>
                            <h2 className="text-xl font-semibold tracking-wide">{val.detail}</h2>
                        </div>

                    </div>
                )
            })}

        </>
    )
}
