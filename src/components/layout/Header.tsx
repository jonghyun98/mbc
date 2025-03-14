import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

interface MenuItem {
  name: string;
  path: string;
}

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ 
  logo = 'AI 방송 솔루션', 
  menuItems = [
    { name: '홈', path: '/' },
    { name: '솔루션', path: '/#솔루션' },
    { name: '사례', path: '/#사례' },
    { name: '기능', path: '/#기능' },
    { name: 'AI 팩트체크', path: '/factcheck' }
  ] 
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">{logo}</div>
        <nav className="nav">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                {item.path.includes('#') ? (
                  <a href={item.path}>{item.name}</a>
                ) : (
                  <Link to={item.path}>{item.name}</Link>
                )}
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