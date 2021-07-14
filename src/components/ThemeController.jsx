import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import styled from 'styled-components'
import Moon from '../assets/svgs/icon-moon.svg'
import Sun from '../assets/svgs/icon-sun.svg'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 38px;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  color: #fff;
  letter-spacing: 1rem;
  font-weight: 700;

  @media only screen and (max-width: 400px) {
    font-size: 27px;
    letter-spacing: 0.75rem;
  }
`

const Switcher = styled.button`
  margin-top: -6px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: none;
  cursor: pointer;
`

const SwitchImageIcon = styled.img`
  @media only screen and (max-width: 400px) {
    width: 20px;
    height: 20px;
  }
`

const ThemeController = () => {

  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <Header>
      <Title>TODO</Title>
      <Switcher onClick={switchTheme} role="button">
        <SwitchImageIcon src={theme === "light" ? Moon : Sun} alt={theme === "light" ? "Moon Icon" : "Sun Icon"}/>
      </Switcher>
    </Header>
  )
}

export default ThemeController