"use client"
import React from 'react';
import './CourseOverviewComponent.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//course content
// reviews
// instructor
const CourseOverviewComponent = () => {
  return (
    <div className='CourseOverviewComponent'>
        <div className='CourseOverviewComponent-inner-div'>  
            <div className='head-course-content'>
              <hr />
              <p>Course Content</p>
              <hr />
            </div>

            <div className='container-content'>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
            </div>
        </div>



        <div className='reviews-div'>
           <div className='head-course-content'>
              <hr />
              <p>Reviews</p>
              <hr />
            </div>

            <div className='review-crds-container'>
                <div className='review-card'>
                    <div style={{display:"flex", justifyContent:"space-evenly", }}>
                        <div style={{display:"flex", flexDirection:"column", color:"#0a0a0a", fontWeight:"500", justifyContent:'center', alignItems:"center", gap:"6px"}}>
                        <Image src="https://res.cloudinary.com/dgtonwmdv/image/upload/v1720367846/images/wxpmp6jwlwc45mi2uzqf.jpg" width={150} height={150} />
                        Karthick
                        </div>

                        <div style={{color:"#0a0a0a"}}>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <br/>
                        18-03-2024
                        </div>
                    </div>

                    <div style={{color:"#000000", lineHeight:"24px"}}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
                    </div>
                </div>
                <div className='review-card'>
                    <div style={{display:"flex", justifyContent:"space-evenly", }}>
                        <div style={{display:"flex", flexDirection:"column", color:"#0a0a0a", fontWeight:"500", justifyContent:'center', alignItems:"center", gap:"6px"}}>
                        <Image src="https://res.cloudinary.com/dgtonwmdv/image/upload/v1716640382/images/nbps1rg1vec6prm4y0gd.jpg" width={150} height={150} />
                        Maithreyan
                        </div>

                        <div style={{color:"#0a0a0a"}}>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <br/>
                        18-03-2024
                        </div>
                    </div>

                    <div style={{color:"#000000", lineHeight:"24px"}}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
                    </div>
                </div>
                <div className='review-card'>
                    <div style={{display:"flex", justifyContent:"space-evenly", }}>
                        <div style={{display:"flex", flexDirection:"column", color:"#0a0a0a", fontWeight:"500", justifyContent:'center', alignItems:"center", gap:"6px"}}>
                        <Image src="https://res.cloudinary.com/dgtonwmdv/image/upload/v1716642193/images/g6h0v5zugr8cvywewz6z.jpg" width={150} height={150} />
                        Naruto
                        </div>

                        <div style={{color:"#0a0a0a"}}>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FCD12A",}} />
                        <br/>
                        18-03-2024
                        </div>
                    </div>

                    <div style={{color:"#000000", lineHeight:"24px"}}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
                    </div>
                </div>
            </div>

        </div>

        <div className='instructor-card'>
        <div className='head-course-content'>
              <hr />
              <p>Instructor</p>
              <hr />
        </div>
        <div className='ins-flex'>
            
                <Image src="https://res.cloudinary.com/dgtonwmdv/image/upload/v1709403733/images/default_dp_kdnksj.jpg" width={300} height={300} style={{borderRadius:"6px"}}/>
           
            <div>
            <h3>Sreenath</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation</p>
           </div>
        </div>

        </div>

        <div className='contact-form'>

        </div>
    </div>
  )
}
//https://res.cloudinary.com/dgtonwmdv/image/upload/v1716642193/images/g6h0v5zugr8cvywewz6z.jpg
export default CourseOverviewComponent