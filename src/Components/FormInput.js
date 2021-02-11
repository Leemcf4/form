import React from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 80%;
`

const InputStyled = styled.input`
  padding: 10px 20px;

  border-radius: 25px;
  outline: none;
  border: none;
  background: #f2f3f7;
  box-shadow: inset 4px 4px 8px rgba(190, 205, 226, 0.5),
    inset -5px -5px 30px #ffffff;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: #8c94a0;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #8c94a0;
  }

  ::-ms-input-placeholder {
    color: #8c94a0;
  }
`

const LabelStyled = styled.label`
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 5px;
`
function FormInput({
  type,
  placeholder,
  onChange,
  value,
  required,
  htmlFor,
  labelName,
}) {
  return (
    <>
      <InputContainer>
        <LabelStyled htmlFor={htmlFor}>{labelName}</LabelStyled>
        <InputStyled
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
        />
      </InputContainer>
    </>
  )
}

export default FormInput
