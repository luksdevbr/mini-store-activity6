import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light'); 
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const theme = useContext(ThemeContext);

  return theme;
}
