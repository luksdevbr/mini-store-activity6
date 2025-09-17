import { useState, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  

  useEffect(() => {
    const htmlElement = document.documentElement;

    localStorage.getItem('theme') === 'dark' ? htmlElement.classList.add('dark') : htmlElement.classList.remove('dark');
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light'); 
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const theme = useContext(ThemeContext);

  return theme;
}
