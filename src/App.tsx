import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import MainContent from './components/MainContent';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <MainContent />
    </>
  )
}

export default App
