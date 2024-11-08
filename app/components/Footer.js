'use client'
import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import dynamic from "next/dynamic";
const Link = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-top'>
        <Link to="entry" smooth={true} duration={500}>
            <span>
            <FontAwesomeIcon icon={faCaretUp} style={{color: "#0a0a0a",}} size='2xl' />
            </span>
        </Link>
        </div>

        <div className='footer-mid'>
            <p>StockWelt</p>
        </div>

        <div className='footer-end'>
            <p>copyright@2024 stockwelt</p>

            <div>
                <p>Terms and conditions</p>
                <p>Privacy Policy</p>
                <p>Licence</p>
            </div>
        </div>
    </div>
  )
}

export default Footer