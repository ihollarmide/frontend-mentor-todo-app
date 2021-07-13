import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  border-radius: 4px;
  box-shadow: ${props => props.theme === "light" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)" };
  margin-bottom: 60px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 104px;
  }
`

const Info = styled.p`
  text-align: center;
  font-size: 13px;
  margin-left: -34px;
  color: ${props => props.theme === "light" ? "hsl(236, 9%, 61%)" : "hsl(234, 11%, 52%)" };

  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`

const TodoList = ({ theme, children }) => {
  return (
    <>
      <Container theme={theme}>
        {children}
      </Container>
      <Info theme={theme}>Drag and drop to reorder list</Info>
    </>
  )
}

export default TodoList