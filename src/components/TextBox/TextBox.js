import React from 'react';
import { TextBoxContainer, TextWrapper } from './TextBoxComponents.js';

function TextBox(props) {
    return (

        <TextBoxContainer>
            <TextWrapper>
                {props.children}
            </TextWrapper>
        </TextBoxContainer>

    )
}

export default TextBox
