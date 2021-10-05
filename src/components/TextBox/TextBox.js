import React from 'react';
import { TextBoxContainer } from './TextBoxComponents.js';

function TextBox(props) {
    return (

        <TextBoxContainer>
           {props.children}
        </TextBoxContainer>

    )
}

export default TextBox
