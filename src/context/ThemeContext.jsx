import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}