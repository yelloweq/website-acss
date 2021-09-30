import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 80vh;
    position: relative;
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

export const HeroVideo = styled.video`
    width:100;
    height: 100%;
    -o-object-fit: cover;
    object-fit: covered;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1`
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;


    color: #fff;
    font-size: 48px;
    text-align: center;

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

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 20x;

    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

