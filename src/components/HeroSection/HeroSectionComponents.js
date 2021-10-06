import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 40rem;
    min-width: 70vw;

    flex-direction: column;
    height: auto;
    max-height: max-content;
    position: relative;
    top: 200px;
    z-index: 1;

    @media screen and (max-width: 786px){
        margin-left: 5%;
        margin-right: 5%;
    }
    `

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 500px;
    grid-gap: 30px;
    min-width: 70vw;
    min-height: 100%;
    justify-content: center;
    margin-top: 1rem;
    top:0;
    left: 0;
    
    @media screen and (max-width: 786px){
        grid-template-columns: 300px;
        grid-template-rows: 500px;
    }


`

export const HeroH1 = styled.h1`
    display: inline-block;
    margin-bottom: 0.5rem;
    width: max-content;
    height: max-content;
    top: 0;

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
    font-style: ${props => props.SpanStyle};
    color: ${props => props.SpanColor};
    font-size: ${props => props.spanSize};
    width: 100%;
    margin-bottom: 0.5rem;
    

`
export const HeroTitle = styled.div`
    display: block;

`


