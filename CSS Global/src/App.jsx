import './styles/layout.css';
import './styles/home.css';
import './styles/card.css';

import './App.css';

import ThemeProvider from './contexts/ThemeProvider';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider> 
  )
}

export default App
