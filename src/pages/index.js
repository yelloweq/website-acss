import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Navbar from '../components/Navbar/Navbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import Card from '../components/Card/Card.js';
import image from '../resources/images/card.png';
import TextBox from '../components/TextBox/TextBox.js';


function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <section id="about">
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

                    <TextBox>

                        We are the student Computer Science society at Aston University. We run social and tech events, open to all. You don’t need to be studying CS to be a part of the society, nor do you need any technical experience. We’re all about learning and sharing ideas!
                        
                        <br /> <br />

                        Like our Facebook page and join our Facebook group, where we post about events and hold member discussions. Check us out on Twitter too!
                        
                        Swing by our society room at the front of Aston Main Building on the 2nd floor. It’s open 24 hours to all members!
                    </TextBox>

                </HeroSection>
            </section>
            <section id="events">
                <HeroSection id="events"
                    title="acss"
                    titleColor="#fff"
                    titleSize="50px"
                    suffix=".events()"
                    suffixColor="#3399FF"
                    suffixSize="50px"
                    SpanStyle="italics"
                    SpanColor="#EEE8A9"
                    SpanSize="20px"
                    SpanText="With amazing opportunities to win prizes and more!"
                >
                    <Card title="Aston Hack" date="12/11/21" img={image} >
                        Hackathons are invention marathons where attendees dream up and bring to life ideas for apps, websites, robots, and more.
                        We are inviting students to join us for 24 hours while we develop the ideas for the future!


                    </Card>
                    
                    
                </HeroSection>
            </section>
            <section id="join">
                <HeroSection id="join"
                    title="acss"
                    titleColor="#fff"
                    titleSize="50px"
                    suffix=".join()"
                    suffixColor="#3399FF"
                    suffixSize="50px"
                    SpanStyle="italics"
                >

                    <TextBox>

                        Become a member by joining the society via Aston SU. It costs £2 for the whole year.

                    </TextBox>

                    </HeroSection>
            </section>
        </>
    )
}

export default Home
