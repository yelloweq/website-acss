import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Navbar from '../components/Navbar/Navbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';


function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <HeroSection
                title="acss"
                titleColor="#fff"
                titleSize="50px"
                suffix=".whois()"
                suffixColor="#3399FF"
                suffixSize="50px"
                SpanStyle="italics"
                SpanColor="#EEE8A9"
                SpanSize="20px"
                SpanText="The Finest Aston Society"
            >
                We host tons of events with free food, have our own kick-ass room, and super friendly people!
            </HeroSection>
        </>
    )
}

export default Home
