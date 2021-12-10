import styled from 'styled-components';

export const CardContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 300px;
    height: 500px;
    background: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 5px; 
    box-shadow: 0px 10px 35px -10px rgba(219, 219, 219, 0.8);
    transition: .2s;

    &:hover{
        box-shadow: 0px 10px 50px -10px rgba(219, 219, 219, 1);
        
    }
    

`

export const CardTitle = styled.h2`
    font-size: 30px;
    color: #3399ff;
    font-weight: 700;
    margin-bottom: 1rem;

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

export const CardText = styled.div`
    font-weight: 500;
`