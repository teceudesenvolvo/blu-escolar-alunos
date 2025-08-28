// Footer.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

// Ícone de coração para a logo do rodapé
const heartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  // Páginas onde o rodapé DEVE ser exibido
  const pagesToShowFooter = [
    '/',
    '/ajuda',
    '/contato',
    // Adicione outras rotas aqui onde o rodapé deve aparecer
  ];

  // Se a rota atual não estiver na lista, não renderize o rodapé
  if (!pagesToShowFooter.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-links">
          <h4>Coluna 1</h4>
          <ul>
            <li><a href="/">Clique 1</a></li>
            <li><a href="/">Clique 2</a></li>
            <li><a href="/">Clique 3</a></li>
            <li><a href="/">Clique 4</a></li>
            <li><a href="/">Clique 5</a></li>
            <li><a href="/">Clique 6</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Coluna 2</h4>
          <ul>
            <li><a href="/">Clique 7</a></li>
            <li><a href="/">Clique 8</a></li>
            <li><a href="/">Clique 9</a></li>
            <li><a href="/">Clique 10</a></li>
            <li><a href="/">Clique 11</a></li>
            <li><a href="/">Clique 12</a></li>
          </ul>
        </div>
        <div className="footer-logo">
          {heartIcon}
          <span>Logomarca</span>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Endereço: Rua Tal de Fulano</p>
          <p>Email: secretaria@prefeitura.com.br</p>
          <p>Telefone: 85 3232-3232</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
