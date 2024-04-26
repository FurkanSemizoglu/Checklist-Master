import React from 'react'
import { Input } from "@/components/ui/input"


const NewCheckList = () => {
  return (
    <>
      <div className=' flex flex-col justify-center items-center w-1/2 m-auto p-3 my-5'>

        <div className='flex justify-between items-center w-full my-5'>

            <div className='w-2/4 text-2xl'>Title of the checklist :  </div>

          <Input className='border-2'/>
            
        </div>  

        <div className='flex w-full border rounded-md p-3 border-solid border-sky-500 '>


          <div className='flex justify-between items-center w-full my-5 flex-wrap '>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            <Input className='border-2 w-1/4 mx-3 my-2'/>
            {/* <button className='bg-green-500 text-white rounded-md p-2'>Add</button> */}
          </div>

        </div>

          <div className='w-full flex justify-end mt-4'>

            <button className='w-1/4 bg-green-500 text-white rounded-md p-2'>Add</button>
          </div>
    
      </div>    
    </>
  )
}

export default NewCheckList