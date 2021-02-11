import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Tick from "./Tick"
import FormInput from "./FormInput"
import FormDetails from "./FormDetails"
import { useDispatch } from "react-redux"
import { userInfo } from "../features/userSlice"
import moment from "moment"

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 600px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  border-radius: 20px;
  width: 100%;
  height: 400px;
  justify-content: center;
  background-color: #f2f3f7;
  box-shadow: 6px 6px 16px #becde2, -6px -6px 16px #ffffff;
`
const FormStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 10px;
`

const ButtonStyled = styled.button`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  width: 100px;
  border-radius: 15px;
  outline: none;
  border: none;
  margin: 5px;
  background-color: #40b3f4;

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none; background-color: #0d7bd2; opacity: 0.4;`}
`

function Form() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [age, setAge] = useState("")
  //   const [errors, setErrors] = useState("")
  const [step, setStep] = useState(1)

  const dispatch = useDispatch()

  // could add error messages this way
  //   const stepVerification = () => {
  //     if (step === 1){
  //         if (name === ""){
  //             setErrors("Name must not be blank")
  //         }
  //     }
  //   }
  useEffect(() => {
    const format = "YYYY-MM-DD"
    const years = "years"

    const age = moment().diff(moment(dob, format), years, true)
    if (dob <= 18 || age > moment) {
      setAge(0)
    } else {
      setAge(age)
    }

    console.log(age)
  }, [dob])

  const submitHandler = (e) => {
    e.preventDefault()

    const user = {
      name: name,
      Number: number,
      email: email,
      dob: dob,
    }

    dispatch(userInfo(user))
    setStep(step + 1)
  }

  return (
    <FormContainer>
      <FormStyled onSubmit={submitHandler}>
        {step < 3 && <h1>Sign Up</h1>}

        {step === 1 && (
          <FormStep>
            <FormInput
              labelName="Name"
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required={true}
            />
            <FormInput
              labelName="Phone Number"
              type="number"
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required={true}
            />

            <ButtonContainer>
              <ButtonStyled
                disabled={name === "" || number === "" || number.length < 11}
                onClick={() => setStep(step + 1)}
              >
                Next
              </ButtonStyled>
            </ButtonContainer>
          </FormStep>
        )}

        {step === 2 && (
          <FormStep>
            <FormInput
              labelName="Email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />
            <FormInput
              labelName="Date of Birth (18+)"
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
              type="date"
              placeholder=""
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              required={true}
            />

            <ButtonContainer>
              <ButtonStyled onClick={() => setStep(step - 1)}>
                Back
              </ButtonStyled>

              <ButtonStyled
                disabled={
                  !email.includes("@") ||
                  email === "" ||
                  dob === "" ||
                  age <= 18
                }
                onClick={() => setStep(step + 1)}
              >
                Next
              </ButtonStyled>
            </ButtonContainer>
          </FormStep>
        )}

        {step === 3 && (
          <FormStep>
            <h2>Are these details correct?</h2>
            <FormDetails name={name} number={number} email={email} dob={dob} />
            <ButtonContainer>
              <ButtonStyled onClick={() => setStep(step - 1)}>
                Back
              </ButtonStyled>

              <ButtonStyled type="submit">Submit</ButtonStyled>
            </ButtonContainer>
          </FormStep>
        )}

        {step === 4 && (
          <FormStep>
            <h1>Signup Completed</h1>
            <Tick />
          </FormStep>
        )}
      </FormStyled>
    </FormContainer>
  )
}

export default Form
