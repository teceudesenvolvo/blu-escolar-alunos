import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links-wrapper">
        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
            <li><a href="#link3">Link 3</a></li>
            <li><a href="#link4">Link 4</a></li>
            <li><a href="#link5">Link 5</a></li>
            <li><a href="#link6">Link 6</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Informações</h4>
          <ul>
            <li><a href="#link7">Link 7</a></li>
            <li><a href="#link8">Link 8</a></li>
            <li><a href="#link9">Link 9</a></li>
            <li><a href="#link10">Link 10</a></li>
            <li><a href="#link11">Link 11</a></li>
            <li><a href="#link12">Link 12</a></li>
          </ul>
        </div>
        <div className="footer-contact-info">
          <div className="logomarca">Logomarca</div>
          <p>Endereço: Rua Tal de Fulano</p>
          <p>Email: <a href="mailto:secretaria@prefeitura.com.br">secretaria@prefeitura.com.br</a></p>
          <p>Telefone: 85 3232-3232</p>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>Desenvolvido por Blu Tecnologia</p>
      </div>
    </footer>
  );
};

export default Footer;
