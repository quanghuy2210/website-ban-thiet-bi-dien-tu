import React from "react";
import {InputWrapper} from './style'

const Input = ({onChange, type, value, name,placeholder,autoFocus, autoComplete, label,connect  }) => {
    return (
        <InputWrapper className="over-input">
            <label for={connect} >{label}</label> 
            <input type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            onChange={onChange}
            id={connect} />
        </InputWrapper>
    )
}

export default Input
