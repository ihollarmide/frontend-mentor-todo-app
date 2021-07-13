import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}