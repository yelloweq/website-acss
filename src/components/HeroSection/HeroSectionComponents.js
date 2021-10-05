import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: block;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 40rem;
    justify-content: left;
    flex-direction: column;
    height: 50vh;
    position: relative;
    top: 200px;
    z-index: 1;
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
    z-index: 3;
    max-width: 100%;
    position: absolute;
    display: flex;
    align-items: left;
    flex-direction: column;

`

export const HeroH1 = styled.h1`
    display: inline-block;
    margin-bottom: 0.5rem;
    // letter-spacing: -0.05rem;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;


    color: ${(props => props.color)};
    font-size: ${(props => props.size)};
    text-align: start;
    font-weight:  700;

    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
        matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1);
        transform-origin: 50% 50% 0px;
        }   
    100% {
        opacity: 1;
        matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        
        }
    }

    @media screen and (max-width: 768px){
        font-size: 30px;

    }

    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`
export const HeroSpan = styled.span`
    font-style: ${props => props.SpanStyle};
    color: ${props => props.SpanColor};
    font-size: ${props => props.spanSize};
    width: 100%;
    margin-bottom: 0.5rem;
    

`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    text-align: start;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 18x;

    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`


