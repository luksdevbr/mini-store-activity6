import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import Game from '../assets/game.png';
import Cart from '../assets/cart.svg';

import { useState, useContext, useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom';;

import { useTheme } from '../contexts/ThemeProvider';

import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  padding: 4px 0;
  width: 100%;
  min-width: 365px;
  height: 48px;
  background-color: ${props => props.isDark && props.theme.secundaryDark};
  color: ${props => props.isDark ? 'white' : 'black'};
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 0 40px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;

  img {
    width: 36px;
    height: 36px;
  }

  span {
    font-weight: 600;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 9999px;
  border: 2px solid ${props => props.isDark ? '#4b5563' : '#e5e7eb'};
  padding: 4px 8px;
  font-weight: 600;
  color: ${props => props.isDark ? '#fff' : '#000'};
  background-color: ${props => props.isDark ? '#374151' : '#f3f4f6'};
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    filter: ${props => props.isDark 
      ? 'drop-shadow(0 0 8px rgba(125, 211, 252, 0.5))' 
      : 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))'};
  }
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 9999px;
  border: 0;
  padding: 4px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${props => props.isDark && `
    filter: invert(1);
  `}

  img {
    width: 30px;
    height: 30px;
  }
`;

const Main = styled.main`
  margin-top: 48px;
  padding: 40px 0;
  min-height: calc(100vh - 48px);
  background-color: ${props => props.isDark ? props.theme.primaryDark : props.theme.primary};
  min-width: 365px;
  box-sizing: border-box;
`;

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header isDark={theme === 'dark'}>
        <Nav>
          <NavLinkStyled 
            to="/" 
          >
            <img 
              src={Game} 
              width="36px"
              alt="Game Store Logotype"
              loading="lazy"
            />
            <span>Game Store</span>
          </NavLinkStyled>
          <NavButtons>
            <ThemeToggle 
              onClick={toggleTheme} 
              isDark={theme === 'dark'}
              aria-label="Toggle theme"
            >
              { theme === 'light' 
                ? <img 
                    width="30px" 
                    src={Sun} 
                    alt="" 
                  /> 
                : <img 
                    width="30px" 
                    src={Moon} 
                    alt=""
                  /> 
              }
              { theme === 'light' ? 'Light' : 'Dark' }
            </ThemeToggle>
            <CartButton 
              isDark={theme === 'dark'}
              aria-label="Access cart"
            >
              <img
                src={Cart} 
                alt="Cart Icon" 
                loading="lazy" 
              /> 
            </CartButton>
          </NavButtons> 
        </Nav>
      </Header>
      <Main isDark={theme === 'dark'}>
        <Outlet />
      </Main>
    </>
  );
}
