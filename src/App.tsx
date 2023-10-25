import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'

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
    </>
  )
}

export default App
