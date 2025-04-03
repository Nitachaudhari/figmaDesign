import React from 'react'
import netflix from '../images/netflix.png'
import slack from '../images/slack.png'
import youtube from '../images/youtube.png'
import verizon from '../images/verizon.png'
import google from '../images/google.png'
import lexmark from '../images/lexmark.png'
import lenovo from '../images/lenovo.png'
import microsoft from '../images/microsoft.png'
const TrustedCompany = () => {
  return (
    <div className='flex ml-50 m-20'>
        <div className='w-100 mt-15'>
            <h2 className='font-bold text-lg'>6.3k trusted companies</h2>
            <p className='text-xs w-70 mt-2'>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
        </div>
        <div>
            <img src={netflix} alt="netflix" className='companyImg' />
            <img src={slack} alt="slack" className='companyImg'/>
        </div>
        <div>
          <img src={youtube} alt="youtube" className='companyImg'/>
          <img src={verizon} alt="verizon" className='companyImg'/>
        </div>
        <div>
          <img src={google} alt="google" className='companyImg'/>
          <img src={lexmark} alt="lexmark" className='companyImg'/>
        </div>
        <div>
          <img src={lenovo} alt="lenovo" className='companyImg'/>
          <img src={microsoft} alt="microsoft" className='companyImg' />
        </div>
    </div>
  )
}

export default TrustedCompany