import styled from 'styled-components';

export const CardContainer = styled.div`
    display: block;
    width: 300px;
    height: 500px;
    background: #fff;
    position: relative;
    overflow: hidden;


`

export const CardTitle = styled.h2`
    font-size: 30px;
    color: red;
    margin-bottom: 2rem;

`

export const CardDate = styled.p`
    font-size: 14px;
    color: #dbdbdbdb;
    margin-bottom: 0.25rem;

`

export const CardContent = styled.div`
    display: block;
    background: blue;
    padding: 1rem;
    position: absolute;
    top:200px;
    left:0;
    height: 100%;
    width: 100%
    

`

export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
`

export const ImageContainer = styled.div`
    display:block;
    height: 200px;
    width: 100%;
    overflow: hidden;
`