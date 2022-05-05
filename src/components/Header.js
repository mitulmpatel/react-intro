import React from 'react';
import ReactLogo from '../assets/images/react-logo.svg'

export default function Header(){
    return (
        <nav>
            <img src={ReactLogo} alt='React' className='nav--icon' />
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    );
}