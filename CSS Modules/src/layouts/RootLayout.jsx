import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import Game from '../assets/game.png';
import Cart from '../assets/cart.svg';

import styles from './RootLayout.module.css';

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
      <header className={`${styles.header} ${theme === 'dark' && styles.dark}`}>
        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            className={styles.navLink}
          >
            <img 
              src={Game} 
              width="36px"
              alt="Game Store Logotype"
              loading="lazy"
            />
            <span className={styles.navLinkSpan}>Game Store</span>
          </NavLink>
          <div className={styles.navButtons}>
            <button 
              onClick={toggleTheme} 
              className={`${styles.themeToggle} ${theme === 'dark' && styles.dark}`}
              aria-label="Toggle theme"
            >
              { theme === 'light' 
                ? <img 
                    className={styles.themeToggleImgLight} 
                    width="30px" 
                    src={Sun} 
                    alt="" 
                  /> 
                : <img 
                    className={styles.themeToggleImgDark} 
                    width="30px" 
                    src={Moon} 
                    alt=""
                  /> 
              }
              { theme === 'light' ? 'Light' : 'Dark' }
            </button>
            <button 
              className={`${styles.cartButton} ${theme === 'dark' && styles.dark}`}
              aria-label="Access cart"
            >
              <img
                className={styles.cartButtonImg}
                src={Cart} 
                alt="Cart Icon" 
                loading="lazy" 
              /> 
            </button>
          </div> 
        </nav>
      </header>
      <main className={`${styles.main} ${theme === 'dark' && styles.dark}`}>
        <Outlet />
      </main>
    </>
  );
}
