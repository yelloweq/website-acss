import React from 'react';
import { CardContainer, CardTitle, CardDate, CardContent, CardImage, ImageContainer, CardText } from './CardComponents.js';

function Card(props) {
    return (
        <CardContainer>

            <ImageContainer>
                <CardImage src={props.img}/>
            </ImageContainer>

            <CardContent>
                <CardDate>
                    {props.date}
                </CardDate>

                <CardTitle>
                    {props.title}
                </CardTitle>

                <CardText>
                {props.children}
                </CardText>
            </CardContent>
        </CardContainer>
    )
}

export default Card
