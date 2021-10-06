import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroSpan, HeroTitle } from './HeroSectionComponents.js'

function HeroSection(props) {
    return (
        <HeroContainer>
            <HeroTitle>
                <HeroH1 color={props.titleColor} size={props.titleSize}>{props.title}</HeroH1><HeroH1 color={props.suffixColor} size={props.suffixSize}>{props.suffix}</HeroH1>
            </HeroTitle>
            <HeroSpan SpanColor={props.SpanColor} SpanStyle={props.SpanStyle} spanSize={props.spanSize}>{props.SpanText}</HeroSpan>
    
            <HeroContent>
                {props.children}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
