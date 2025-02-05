import React from 'react'
import {getLocalstorage} from '../Utils/LoaclData'
import { useState } from 'react';

const WorkoutDetails = () => {

  const [search, setSearch] = useState('')

  const {userData} = getLocalstorage()

  const handleWorkout = (value)=>{
    const value1 = value.toLowerCase()
    if(value1 === 'cycling'){
      return console.log("CYCLING")
    }
    if(value1 === 'swimming'){
      return console.log("SWIMMING")
    }
    if(value1 === 'running'){
      return console.log("RUNNING")
    }
    if(value1 === 'yoga'){
      return console.log("YOGA")
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center'>

      <div className='flex gap-3 w-1/2 mt-20 mb-5 bg-'>
        <input className='w-full rounded-lg font-medium bg-[#4B2138] p-2 outline-none' placeholder='Search' type="text" value={search} onChange={((e)=> setSearch(e.target.value))}/>
        <select onClick={(e)=>handleWorkout(e.target.value)} className='w-1/3  font-medium bg-[#4B2138] p-2 rounded-lg outline-none' name="" id="">
          <option className="opacity-0 scale-0" value="">Type</option>
          <option value='Cycling'>Cycling</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
        </select>
      </div>

      <div className='bg-[#4B2138] font-medium rounded-lg pt-5 pb-20'>
        <div className='w-full flex gap-3 bg-[#6D3C52] font-semibold py-2  px-3'>
          <h1 className='w-40'>Name</h1>
          <h1 className='w-40'>Workout Type</h1>
          <h1 className='w-40'>Number of workouts</h1>
          <h1 className='w-32 text-center'>Total minutes</h1>
        </div>

        {!userData ? "" : userData.filter((elem1)=>{
          return search.toLowerCase() === '' ? elem1 : elem1.name.toLowerCase().includes(search)
        }).map((elem1)=>(
          <div key={elem1.id} className='w-full flex gap-3 mt-2 px-3'>
            <h1 className='w-40'>{elem1.name}</h1>
            <div className='w-40 flex gap-2'>
              {elem1.workouts.map((elem, idx)=>(
                <h1 key={idx}>{idx === 0 || 1 ? `${elem.type},` : elem.type}</h1>
              ))}
            </div>
            <h1 className='w-40 text-center'>{elem1.workouts.length}</h1>
            <h1 className='w-32 text-center'>{elem1.workouts[0].minutes + elem1.workouts[1].minutes}</h1>
            {/* <h1 className='w-32 text-center'>{elem1.workouts.length === 0 ? elem1.workouts[0].minutes : elem1.workouts[1].minutes +  elem1.workouts[1].minutes}</h1> */}
          </div>
        ))}

      </div>
      <div className='w-fit h-10  mt-3 flex justify-center items-center gap-2 font-semibold hover:cursor-pointer'>
        <h1 className='px-5 bg-[#6D3C52] text-center rounded-md hover:bg-[#811832]'>Prev</h1>        
        <h1 className='px-3 bg-[#811832] text-center rounded-md'>1</h1>
        <h2 className='px-3 bg-[#6D3C52] text-center rounded-md hover:bg-[#811832]'>2</h2>
        <h1 className='px-5 bg-[#6D3C52] text-center rounded-md hover:bg-[#811832]'>Next</h1>        
      </div>
    </div>
  )
}

export default WorkoutDetails