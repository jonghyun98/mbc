import React from 'react';
import '../../styles/Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = '공영성과 약자 배려를 위한 AI 방송 솔루션',
  subtitle = '지역방송의 공적 책무를 강화하는 AI 기술 - 다국어 서비스, 재난 정보 전달, 사회적 약자 배려를 위한 맞춤형 솔루션을 제공합니다. 비용 절감이 아닌 새로운 가치 창출에 집중합니다.',
  ctaText = '솔루션 살펴보기'
}) => {
  return (
    <section className="hero" id="홈">
      <div className="container">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-badges">
            <span className="badge">2025년 AI‧디지털 기반 방송프로그램 제작지원 사업</span>
            <span className="badge">공익형 방송콘텐츠</span>
          </div>
          <div className="hero-cta">
            <button className="primary-button">{ctaText}</button>
            <button className="secondary-button">데모 영상 보기</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* AI 앵커 이미지 */}
            <div className="hero-overlay">
              <p className="feature-highlight">다국어 자동 번역·더빙</p>
              <p className="feature-highlight">재난 정보 신속 전달</p>
              <p className="feature-highlight">외국인 노동자·다문화 가정 맞춤 서비스</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 