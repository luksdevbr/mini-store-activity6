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
      <header className="flex items-center fixed top-0 z-40 py-1 w-full min-w-[365px] h-12 bg-white text-black dark:bg-secundaryDark dark:text-white"> 
        <nav className="flex gap-2 justify-between mx-10 w-full">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 font-bold"
          >
            <img 
              src={Game} 
              width="36px"
              alt="Game Store Logotype"
              loading="lazy"
            />
            <span className="font-semibold">Game Store</span>
          </NavLink>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="flex items-center gap-1 rounded-full border-2 border-solid border-gray-200 px-2 py-1 font-semibold bg-gray-100 dark:border-gray-600 dark:bg-gray-700 cursor-pointer"
              aria-label="Toggle theme"
            >
              { theme === 'light' 
                ? <img 
                    className="drop-shadow-lg drop-shadow-amber-500/80" 
                    width="30px" 
                    src={Sun} 
                    alt="" 
                  /> 
                : <img 
                    className="drop-shadow-lg drop-shadow-sky-300/50" 
                    width="30px" 
                    src={Moon} 
                    alt=""
                  /> 
              }
              { theme === 'light' ? 'Light' : 'Dark' }
            </button>
            <button 
              className="flex items-center justify-center gap-1 rounded-full p-1 font-semibold cursor-pointer transition ease duration-250 hover:scale-105 hover:bg-black/5 dark:invert"
              aria-label="Access cart"
            >
              <img
                className="w-[30px]"
                src={Cart} 
                alt="Cart Icon" 
                loading="lazy" /> 
            </button>
          </div> 
        </nav>
      </header>
      <main className="mt-12 py-10 h-full bg-primary dark:bg-primaryDark min-w-[365px]">
        <Outlet />
      </main>
    </>
  );
}
