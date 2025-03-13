import React from 'react';
import '../../styles/Header.css';

interface HeaderProps {
  logo?: string;
  menuItems?: string[];
}

const Header: React.FC<HeaderProps> = ({ logo = 'AI 방송 솔루션', menuItems = ['홈', '솔루션', '사례', '기능'] }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">{logo}</div>
        <nav className="nav">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cta-button">
          <button>데모 신청하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 