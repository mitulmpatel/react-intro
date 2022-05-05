import React from 'react';
import ReactLogo from '../assets/images/react-logo.svg'

export default function Header(){
    return (
        <nav>
            <img src={ReactLogo} alt='React' />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}