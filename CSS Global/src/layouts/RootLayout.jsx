import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import Game from '../assets/game.png';
import Cart from '../assets/cart.svg';

import { useState, useContext, useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom';;

import { useTheme } from '../contexts/ThemeProvider';

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className={`header ${theme}`}> 
        <nav className="nav">
          <NavLink 
            to="/" 
            className="nav-link"
          >
            <img 
              src={Game} 
              alt="Game Store Logotype"
              loading="lazy"
            />
            <span>Game Store</span>
          </NavLink>
          <div className="nav-buttons">
            <button 
              onClick={toggleTheme} 
              className={`theme-toggle ${theme}`}
              aria-label="Toggle theme"
            >
              { theme === 'light' 
                ? <img 
                    className="light" 
                    src={Sun} 
                    alt="" 
                  /> 
                : <img 
                    className="dark" 
                    src={Moon} 
                    alt=""
                  /> 
              }
              { theme === 'light' ? 'Light' : 'Dark' }
            </button>
            <button 
              className="cart-button"
              aria-label="Access cart"
            >
              <img
                src={Cart} 
                alt="Cart Icon" 
                loading="lazy" 
              /> 
            </button>
          </div> 
        </nav>
      </header>
      <main className={`main ${theme}`}>
        <Outlet />
      </main>
    </>
  );
}
