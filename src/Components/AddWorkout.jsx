import React from 'react'
import { useState } from 'react'

const AddWorkout = () => {

  const [name, setName] = useState('')
  const [value, setvalue] = useState('')
  const [minute, setMinute] = useState('')
  const [store, setstore] = useState({})
  const [workout, setWorkout] = useState({type: '', minutes: ''})


  const handleForm = (e)=>{
    e.preventDefault()

    setWorkout({type: value, minutes: minute})
    setstore({name, workout})

    localStorage.setItem("userData", JSON.stringify(store))

    setName('')
    setvalue('')
    setMinute('')
  }
  

  return (
    <>
      <div className='w-full flex items-center justify-center my-20'>

        <div className='w-1/3 bg-[#4B2138] rounded-lg'>
          <form onSubmit={handleForm} className='flex flex-col p-5 gap-4'>
            <div>
              <h1 className='text-xl font-semibold mb-1'>Full Name</h1>
              <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full bg-[#6D3C52] p-2 rounded-md outline-none font-medium' placeholder='eg:- John doe' type="text"/>
            </div>
            <div>
              <h1 className='text-xl font-semibold mb-1'>Select Workout Name</h1>
              <input onChange={(e)=>setvalue(e.target.value)} value={value} className='w-full bg-[#6D3C52] p-2 rounded-md outline-none font-medium' placeholder='eg:- Cyclings' type="text"/>
            </div>
            <div>
              <h1 className='text-xl font-semibold mb-1'>Workout Minutes</h1>
              <input onChange={(e)=>setMinute(e.target.value)} value={minute} className='w-full bg-[#6D3C52] p-2 rounded-md outline-none font-medium' placeholder='Enter Minutes' type="number"/>
            </div> 
            <button className='w-full bg-[#811832] py-3 rounded-md font-semibold mt-5'>Add Workout</button>         
          </form>
        </div>
      </div>
    </>
  )
}

export default AddWorkout