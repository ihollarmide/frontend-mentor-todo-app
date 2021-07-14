import React from 'react'
import styled, { css } from 'styled-components'

const Footer = styled.footer`
  position: relative;
  padding: 20px 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  color: ${props => props.theme === "light" ? "hsl(236, 9%, 61%)" : "hsl(234, 11%, 52%)" };
  font-size: 15px;
  box-shadow: ${props => props.theme === "light" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)" };

  /* @media only screen and (min-width: 601px) {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 4px;
      height: 4px;
      background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  } */


  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    padding: 20px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: inherit;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 68px;
    width: 100%;
    order: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
    border-radius: 4px;
    box-shadow: ${props => props.theme === "light" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)" };
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 20px;
  }
`

const NavItem = styled.a`
  cursor: pointer;
  display: inline-block;
  color: inherit;

  &:hover {
    color: ${props => props.theme === "light" ? "hsl(235, 19%, 35%)" : "hsl(236, 33%, 92%)" };
  }

  &:not(:last-of-type) {
    margin-right: 15px;
  }

  ${({ currentFilter }) =>
    currentFilter &&
    css`
      color: hsl(220, 98%, 61%);
    `
  }
`

const ItemsLeft = styled.p`
  @media only screen and (max-width: 600px) {
    order: 1;
  }
`

const ClearList = styled.p`
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme === "light" ? "hsl(235, 19%, 35%)" : "hsl(234, 39%, 85%)" };
  }

  @media only screen and (max-width: 600px) {
    order: 2;
  }
`

const TodoFooter = ({ theme, todoItemsLeft, clearCompletedTodoItems, filter, activateFilter }) => {
  return (
    <>
      <Footer theme={theme} role="contentinfo">
        <ItemsLeft role="presentation">{todoItemsLeft} items left</ItemsLeft>
        <Nav theme={theme} role="navigation">
          <NavItem theme={theme} currentFilter={filter === 'All'} onClick={() => activateFilter('All')}>All</NavItem>
          <NavItem theme={theme} currentFilter={filter === 'Active'} onClick={() => activateFilter('Active')}>Active</NavItem>
          <NavItem theme={theme} currentFilter={filter === 'Completed'} onClick={() => activateFilter('Completed')}>Completed</NavItem>
        </Nav>
        <ClearList theme={theme} onClick={clearCompletedTodoItems} role="command">Clear Completed</ClearList>
      </Footer>
    </>
  )
}

export default TodoFooter