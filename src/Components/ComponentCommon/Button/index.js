import React from "react";
import {ButtonWrapper} from './style'

const Button = ({name}) => {
    return (
        <ButtonWrapper className="over-button" >{name}</ButtonWrapper>
    )
}

export default Button