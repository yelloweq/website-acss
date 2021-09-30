import React from 'react';
import Video from '../../resources/videos/video.mp4';
import { HeroContainer, HeroBg, HeroVideo, HeroContent, HeroH1, HeroP } from './HeroSectionComponents.js'

function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <HeroVideo autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Objectively, The Best Aston Society.</HeroH1>
                <HeroP>
                    We host tons of events with free food, have our own kick-ass room, and super friendly people!
                </HeroP>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
