import React from 'react'
import bottom from './bottom.png'

const CallToAction = () => {
    return (
    <div className='bg-gray-900 text-white'>
        <div className='flex justify-around bg-gray-900 text-white p-10 ml-40 mr-40'>
            <div>
                <h1 className='font-bold text-xl'>Start learning with 67.1k <br />
                students around the world.</h1>
                <div>
                    <button className='bg-orange-500 p-2 mt-5'>Join The Family</button>
                    <button className='bg-gray-500 p-2 mt-5 ml-2'>Browse All Courses</button>
                </div>
            </div>
            <div className='flex gap-10'>
                <div>
                    <h1 className='font-bold text-xl'>6.3k</h1>
                    <p className='text-gray-500'>online classes</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>26k</h1>
                    <p className='text-gray-500'>Certified Instructor</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>99.9%</h1>
                    <p className='text-gray-500'>Success Rate</p>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-800 my-4 mb-10"></div>


        <div className='flex justify-center'>            
            <img src={bottom} alt="" className=' w-220'  />
        </div>
        <div className="border-t border-gray-800 my-4"></div>

        <div className='flex justify-between ml-75 mr-81 p-5 text-gray-400'>
            <p>© 2021 - Eduflex. Designed by Templatecookie. All rights reserved</p>
            <select name="language" id="lang" className='border border-dotted px-2'>
                <option value="en">English</option>
                <option value="sp">Spanish</option>
            </select>
        </div>

    </div>
   

    )
}

export default CallToAction