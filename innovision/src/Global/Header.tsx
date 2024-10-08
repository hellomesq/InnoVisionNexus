import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para alternar o estado do menu móvel
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav id="navbar">
        <Link to="/">
          <img id="logo" src="/imagens/InnoVision Nexus (Preta).png" alt="InnoVision Nexus logo" />
        </Link>
        <ul id="nav_list">
          <li className="nav_item"><Link to="/">Home</Link></li>
          <li className="nav_item"><Link to="/login">Login</Link></li>
          <li className="nav_item"><Link to="/services">Serviços</Link></li>
        </ul>
        {/* Adiciona a classe 'active' ao botão quando o menu estiver aberto */}
        <button id="mobile_btn" onClick={toggleMobileMenu} className={isMobileMenuOpen ? 'active' : ''}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div id="mobile_menu" className={isMobileMenuOpen ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav_item"><Link to="/">Home</Link></li>
          <li className="nav_item"><Link to="/login">Login</Link></li>
          <li className="nav_item"><Link to="/services">Serviços</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
