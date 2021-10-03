import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Navbar from '../components/Navbar/Navbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import Card from '../components/Card/Card.js';
import image from '../resources/images/card.png';



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
                pContent="We host tons of events with free food, have our own kick-ass room, and super friendly people!"
            >
                
            </HeroSection>

            <HeroSection
                title="acss"
                titleColor="#fff"
                titleSize="50px"
                suffix=".events()"
                suffixColor="#3399FF"
                suffixSize="50px"
                SpanStyle="italics"
            // SpanColor="#EEE8A9"
            // SpanSize="20px"
            // SpanText=""
            >
                <Card title="card" date="12/06/21" img={image} >
                    card content
                </Card>
                
            </HeroSection>

            <HeroSection
                title="acss"
                titleColor="#fff"
                titleSize="50px"
                suffix=".join()"
                suffixColor="#3399FF"
                suffixSize="50px"
                SpanStyle="italics"
            // SpanColor="#EEE8A9"
            // SpanSize="20px"
            // SpanText=""
            >
            </HeroSection>
        </>
    )
}

export default Home
