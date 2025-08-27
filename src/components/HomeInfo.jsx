import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText}) =>
{return(
    <div className='info-box  bg-blue-500 text-white px-12 rounded-lg shadow-lg flex flex-col items-center'>
        <p className='font-medium sm:text-xl text-center px-8 py-5 '>{text}</p>
        
        <Link to = {link} className='bg-white text-blue-500 rounded-lg py-2 px-8 my-0 flex items-center justify-center transform absolute left-1/2 bottom-[-20px] -translate-x-1/2 shadow-lg'>
            {btnText}
            <img src={arrow} alt ="Arrow Icon" className='w-4 h-4'/>
        </Link>
    </div>);
}
const renderContent = {
    1: (<InfoBox text={<><span>Hi, I am Shivani</span><br /><span>3D-Animator from Rit</span></>} link="/Contact" btnText="Contact Me!" />)
  ,
    2: (<InfoBox text="Thesis" link="/thesis" btnText="Learn More  " />),
    3: (<InfoBox text="3D" link="/3d" btnText="Learn More  " />),
    4: (<InfoBox text="Short Films" link="/shortfilms" btnText="Learn More  " />)
    
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo