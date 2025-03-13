import React from 'react';
import '../../styles/Footer.css';

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: Array<{ label: string; url: string }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'AI 방송 솔루션',
  year = new Date().getFullYear(),
  links = [
    { label: '이용약관', url: '#' },
    { label: '개인정보처리방침', url: '#' },
    { label: '문의하기', url: 'mailto:ai-broadcast@example.com' },
    { label: '지원사업 안내', url: '#' }
  ]
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">{companyName}</div>
            <p className="copyright">© {year} {companyName}. All rights reserved.</p>
            <p className="footer-description">공영방송을 위한 AI 기술 솔루션</p>
            <div className="footer-badges">
              <span className="footer-badge">AI‧디지털 기반 방송프로그램 제작지원</span>
              <span className="footer-badge">방송콘텐츠 혁신</span>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>바로가기</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>문의하기</h3>
            <p><strong>이메일:</strong> ai-broadcast@example.com</p>
            <p><strong>전화:</strong> 02-123-4567</p>
            <p><strong>지원정보:</strong> 2025년 AI‧디지털 기반 방송프로그램 제작지원 사업</p>
            <div className="social-links">
              <a href="#" className="social-icon" title="유튜브 채널">
                <span>🎬</span>
              </a>
              <a href="#" className="social-icon" title="블로그">
                <span>📝</span>
              </a>
              <a href="#" className="social-icon" title="인스타그램">
                <span>📱</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 