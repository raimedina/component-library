import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/styles/main.scss'; // Importa estilos globais

// ✅ Decorator para aplicar o ThemeProvider globalmente
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <div style={{ 
        maxWidth: '600px',  // 🔥 Tamanho máximo ajustável
        minHeight: '300px', // 🔥 Altura mínima
        margin: '0 auto',   // Centraliza o componente
        padding: '20px',    // Espaçamento interno
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        overflow: 'auto'    // Garante que o conteúdo não ultrapasse a área
      }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

// ✅ Configuração unificada de parâmetros
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },  // ✅ Captura ações como onClick, onToggle
  controls: {
    expanded: true,  // 🔥 Expande os controles no painel automaticamente
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: 800,
  },
  layout: 'padded',  // ✅ Espaçamento ao redor do componente
};
