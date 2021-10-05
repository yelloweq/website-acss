import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 40rem;
    height: 50vh;
    position: relative;
    top: 200px;
    z-index: 1;
    max-height: max-content;
    @media screen and (max-width: 768px){
        margin-left: 5%;
        margin-right: 5%;
    }
    `

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContent = styled.div`
    z-index: 6;
    max-width: 100vw;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4rem;
    min-width: 90vw;
    min-height:50vh;
    max-height: max-content;
    @media screen and (max-width: 768px){
        top: 3rem;
    }

    @media screen and (max-width: 480px){
        top: 2rem;
    }


`

export const HeroH1 = styled.h1`
    display: inline-flex;
    top: 0;
    width: max-content;
    height: max-content;
    margin-bottom: 0.5rem;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;


    color: ${(props => props.color)};
    font-size: ${(props => props.size)};
    text-align: start;
    font-weight:  700;

    @media screen and (max-width: 768px){
        font-size: 30px;

    }

    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`
export const HeroSpan = styled.span`
    position: absolute;
    display:flex;
    left: 0;
    top: 4rem;
    text-align: start;
    width: 80vw;
    height: max-content;
    font-style: ${props => props.SpanStyle};
    color: ${props => props.SpanColor};
    font-size: ${props => props.spanSize};
    margin-bottom: 0.5rem;
    
    @media screen and (max-width: 768px){
        top: 3rem;
    }

    @media screen and (max-width: 480px){
        top: 2.5rem;
    }

`
