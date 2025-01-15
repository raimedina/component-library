import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar/Navbar';
import ThemeToggle from '../src/components/common/ThemeToggle/ThemeToggle';
import './App.scss';

const App: React.FC = () => {
  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar links={navLinks} />
        <main className="App-content">
          <ThemeToggle />
          <h1>Bem-vindo ao Componente de Botão!</h1>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
