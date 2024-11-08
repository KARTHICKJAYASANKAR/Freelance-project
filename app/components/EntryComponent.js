"use client"
import React from 'react';
import './EntryComponent.scss';
import dynamic from "next/dynamic";
import Image from 'next/image';
const Example = dynamic(() => import('../Sub-Components/FloatingMobile'), { ssr: false });
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight,faCircle ,faPlus} from '@fortawesome/free-solid-svg-icons'; // Example icon

// Dynamically import Link from react-scroll to prevent SSR issues
const Link = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });
// React
// import { motion } from "framer-motion"

// React Server Components
import * as motion from "framer-motion/client"
import DottedButton from './ExternalComponents/DottedButton';

const EntryComponent = () => {
  return (
    <div id='entry' className='entry-container'>
         <header className="header">
              <div className='logo'>StockWelt</div>

              <ul>
              <Link to="about-section" smooth={true} duration={500}>
                <li>About Us</li>
              </Link>

              <Link to="topic-section" smooth={true} duration={500}>
                <li>Topics</li>
              </Link>

              <Link to="contact-section" smooth={true} duration={500}>
                <li>Contact Us</li>
              </Link>

              <Link to="course-section" smooth={true} duration={500}>
                <li>Course Videos</li>
              </Link>
                
              </ul>

              <button>Signup →</button>
        </header>

        <div  className='image-container'>
            <h1>Meet the Professional Mentor</h1>
                <div className='left-div-h'>
                    <p><FontAwesomeIcon icon={faQuoteLeft} size="2xl" style={{color: "#0a0a0a",}} />
                    <br/>The goal of a successful trader is to make the best trades.
                    Money is secondary.<br/>
                    <span> - Alexander Elder</span><br/>
                    <FontAwesomeIcon icon={faQuoteRight} size="2xl" style={{color: "#0a0a0a",}}/>
                    </p>
                </div>            
                {/* <img src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1728925726/images/Laptop_jbdu6x.jpg'/> */}
                    <Image 
                        src="https://res.cloudinary.com/dgtonwmdv/image/upload/v1728925726/images/Laptop_jbdu6x.jpg" 
                        width={500} 
                        height={300} 
                        alt="My Image" 
                        layout="responsive" // This makes the image responsive
                    />                
                <div className='right-div-h'>
                        <p>Ready to build your trading portfolio?</p>
                        {/* <button>Enroll now</button> */}
                        <DottedButton/>
                </div>
                <div className='right-div-live-recorded'>
                    <p>To get ,</p>
                    <p><FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#f00000",}}/>&nbsp;Live Class&nbsp;  <FontAwesomeIcon icon={faPlus} /> &nbsp;Recorded Videos</p>                    
                </div>
        </div>
            
    </div>
  )
}

export default EntryComponent;