"use client"
import React from 'react';
import ShuffleHero from '../Sub-Components/AboutSubComponent';
import './AboutComponent.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import ReviewCard from '../Sub-Components/ReviewCard';
import 'swiper/css';
import SquishyCard from '../Sub-Components/SquishyCard ';


function generateLoremIpsum(wordCount) {
    const loremWords = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");
    
    let result = [];
    for (let i = 0; i < wordCount; i++) {
        result.push(loremWords[i % loremWords.length]);
    }
    return result.join(" ");
}

const AboutComponent = () => {
  return (<>
         <ShuffleHero/>
        <div className='about-section-container'> 
            <div className='about-top-div'>
                <div className='about-head'><span>About&nbsp;</span> Us</div>
                <div className='values-mission'>
                    <div className='values'>
                        <span>Our Values</span>
                        <p>{generateLoremIpsum(100)}</p>
                    </div>

                    <div className='mission'>
                        <span>Our Mission</span>
                        <p>{generateLoremIpsum(100)}</p>
                    </div>
                </div>
            </div>

            <div className='about-mid-div'>
                <div className='team-head'> Our Team</div>
                <div className='team-container'>
                    <div className='img-container'>
                        <img src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1709403733/images/default_dp_kdnksj.jpg'/>
                        <>
                        <span>Srinath</span>
                        <p>Founder</p>
                        </>
                    </div>

                    <div className='img-container'>
                    <img src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1709403733/images/default_dp_kdnksj.jpg'/>
                        <>
                            <span>Anni</span>
                            <p>Co-Founder</p>
                        </>    
                    </div>

                    <div className='img-container'>
                    <img src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1709403733/images/default_dp_kdnksj.jpg'/>
                        <>
                            <span>Gopinath</span>
                            <p>Co-founder</p>
                        </>    
                    </div>
                </div>
            </div>

            
            <SquishyCard/>          
        </div>

        
        </>
  )
}

export default AboutComponent