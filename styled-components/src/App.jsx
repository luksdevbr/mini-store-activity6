import './App.css';

import ThemeProvider from './contexts/ThemeProvider';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = {
  primary: 'rgb(227, 230, 230)',
  primaryDark: 'rgb(16, 22, 28)',
  secundaryDark: 'rgb(27, 33, 43)',
  skeleton: 'rgb(202, 202, 202)',
  skeletonDark: 'rgb(38, 47, 62)',
};

function App() {
  return (
    <StyledProvider theme={theme}>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </StyledProvider> 
  )
}

export default App
