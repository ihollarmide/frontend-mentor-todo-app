import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  border-radius: 4px 4px 0 0;
  overflow: hidden;
`

const TodoList = ({ theme, children }) => {
  return (
    <>
      <Container theme={theme} role="list">
        {children}
      </Container>
    </>
  )
}

export default TodoList