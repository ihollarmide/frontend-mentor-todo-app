import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  border-radius: 4px;
  box-shadow: ${props => props.theme === "light" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)" };
  margin-bottom: 50px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    margin-bottom: 104px;
  }
`

const Info = styled.p`
  text-align: center;
  font-size: 14px;
  margin-left: -34px;
  margin-bottom: 30px;
  color: ${props => props.theme === "light" ? "hsl(236, 9%, 61%)" : "hsl(234, 11%, 52%)" };

  @media only screen and (max-width: 600px) {
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

const TodoList = ({ theme, children }) => {
  return (
    <>
      <Container theme={theme}>
        {children}
      </Container>
      <Info theme={theme}>Drag and drop to reorder list</Info>
      <Attribution theme={theme}>Challenge by <AttributionLink href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank" rel="noreferrer">Frontend Mentor.</AttributionLink> Coded by <AttributionLink href="https://www.github.com/ihollarmide" target="_blank" rel="noreferrer">Idris</AttributionLink></Attribution>
    </>
  )
}

export default TodoList