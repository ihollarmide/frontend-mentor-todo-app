import React from 'react'
import styled from 'styled-components'

const InfoElement = styled.p`
  text-align: center;
  font-size: 14px;
  margin-left: -34px;
  margin-bottom: 30px;
  color: ${props => props.theme === "light" ? "hsl(236, 9%, 61%)" : "hsl(234, 11%, 52%)" };
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    margin-top: 104px;
    margin-left: 0;
  }
`

const Attribution = styled.p`
  text-align: center;
  font-size: 14px;
  margin-left: -34px;
  color: ${props => props.theme === "light" ? "hsl(236, 9%, 61%)" : "hsl(234, 11%, 52%)" };

  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`

const AttributionLink = styled.a`
  color: hsl(220, 98%, 61%);
  font-weight: bold;
`

const Info = ({ theme }) => {
  return (
    <>
      <InfoElement theme={theme}>Drag and drop to reorder list</InfoElement>
      <Attribution theme={theme}>Challenge by <AttributionLink href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank" rel="noreferrer">Frontend Mentor.</AttributionLink> Coded by <AttributionLink href="https://www.github.com/ihollarmide" target="_blank" rel="noreferrer">Idris</AttributionLink></Attribution>
    </>
  )
}

export default Info;