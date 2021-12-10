import styled from "styled-components";


export const TextBoxContainer = styled.div`
    display: flex;
    position: relative;
    border: 3px solid #dbdbdbdb;
    border-radius: 10px;
    background: transparent;

    color: #fff;
    padding: 1rem;
    box-shadow: -5px 10px 26px -15px rgba(219, 219, 219, 0.8);


`

export const TextWrapper = styled.div`
    display: block;
    position: relative;
    font-size: 18px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 960px){
        font-size: 16px;
    }

    @media screen and (max-width:  768px){
        font-size: 14px;
    }

`
