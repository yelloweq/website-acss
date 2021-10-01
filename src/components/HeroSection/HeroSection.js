import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroSpan, HeroP } from './HeroSectionComponents.js'

function HeroSection(props) {
    return (
        <HeroContainer>
            <HeroBg bgColor={props.bg} />
            <HeroH1 color={props.titleColor} size={props.titleSize}>{props.title}</HeroH1><HeroH1 color={props.suffixColor} size={props.suffixSize}>{props.suffix}</HeroH1>
            <HeroContent>
                <HeroSpan SpanColor={props.SpanColor} SpanStyle={props.SpanStyle} spanSize={props.spanSize}>{props.SpanText}</HeroSpan>
                <HeroP>
                    {props.children}
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
