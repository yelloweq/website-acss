import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    position: absolute;
    top: 7rem;
    width: 300px;
    height: 500px;
    background: #fff;
    overflow: hidden;
    border-radius: 5px; 
    box-shadow: -5px 10px 26px -15px rgba(219, 219, 219, 0.8);
    transition: all 200ms ease-in-out;
     
    @media screen and (max-width: 768px){
        width: 280px;
        top: 6rem;
    }

`

export const CardTitle = styled.h2`
    font-size: 30px;
    color: #3399ff;
    font-weight: 700;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

`

export const CardDate = styled.p`
    font-size: 14px;
    color: #0e1212;
    margin-bottom: 0.25rem;
    text-align: right;

`

export const CardContent = styled.div`
    display: block;
    padding: 1rem;
    position: absolute;
    color: #0e1212;
    top:200px;
    left:0;
    height: calc(100% - 200px);
    width: 100%

    @media screen and (max-width: 768px){
       height: calc(100% - 180px);
    }
`

export const CardImage = styled.img`
    object-fit: contain;
    width: 100%;
`

export const ImageContainer = styled.div`
    display:block;
    height: 200px;
    width: 100%;
    overflow: hidden;

`