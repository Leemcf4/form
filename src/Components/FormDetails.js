import React from "react"
import styled from "styled-components"

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  color: #456078;
`

const DetailsInfo = styled.div`
  padding: 10px;
  background: #f2f3f7;

  border-radius: 5px;
  width: 300px;
  z-index: 0;
  margin-top: 10px;

  box-shadow: inset 4px 4px 8px rgba(190, 205, 226, 0.5),
    inset -5px -5px 30px #ffffff;
`
const DetailsLabel = styled.label`
  align-self: flex-start;
  z-index: 1;
  padding-top: 10px;
`

function FormDetails({ name, number, email, dob }) {
  return (
    <DetailsContainer>
      <DetailsLabel>Name: </DetailsLabel>
      <DetailsInfo>{name}</DetailsInfo>
      <DetailsLabel>Number: </DetailsLabel>
      <DetailsInfo>{number}</DetailsInfo>
      <DetailsLabel>Email: </DetailsLabel>
      <DetailsInfo> {email}</DetailsInfo>
      <DetailsLabel>Date of birth: </DetailsLabel>
      <DetailsInfo>{dob}</DetailsInfo>
    </DetailsContainer>
  )
}

export default FormDetails
