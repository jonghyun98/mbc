import React from 'react';
import '../../styles/Features.css';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  details?: string[];
  highlight?: string;
}

interface FeaturesProps {
  sectionTitle?: string;
  subtitle?: string;
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({
  sectionTitle = '주요 기능',
  subtitle = '공영방송의 공적 책무를 강화하고 지역민 모두에게 필요한 정보를 제공하는 AI 기술 기능들입니다.',
  features = [
    {
      title: 'AI 다국어 뉴스',
      description: '메인 뉴스를 AI가 자동 번역하여 여러 언어로 제공합니다.',
      icon: '🌐',
      details: [
        '한국어 뉴스를 영어, 중국어, 베트남어 등 다양한 언어로 자동 번역',
        '번역된 텍스트를 자연스러운 AI 음성으로 변환하여 방송',
        '방송사 홈페이지, 유튜브, 모바일 앱에서 다국어 자막 서비스'
      ],
      highlight: '지역 내 외국인을 위한 공적 서비스 확대'
    },
    {
      title: 'AI 기상/재난 캐스터',
      description: 'AI 합성 캐릭터가 기상 정보와 재난 알림을 수어와 함께 제공합니다.',
      icon: '☁️',
      details: [
        '24시간 실시간 기상 정보 제공으로 주말/심야 시간대 서비스 유지',
        '수어 동시 제공으로 청각장애인을 위한 정보 접근성 향상',
        '지역별 맞춤형 재난 정보 신속 제공'
      ],
      highlight: '24시간 정보 제공 및 장애인 접근성 강화'
    },
    {
      title: '다문화 긴급속보',
      description: '재난·사건 정보를 다국어로 자동 생성하고 송출합니다.',
      icon: '🚨',
      details: [
        '긴급 재난 발생 시 즉시 다국어 번역 및 푸시 알림 발송',
        '인력이 없는 주말/야간에도 AI가 자동으로 재난 정보 전파',
        '휴대폰 위치 기반으로 필요한 사람에게 중요 정보 우선 전달'
      ],
      highlight: '위기 상황에서 신속한 안전 정보 획득'
    },
    {
      title: 'AI 팩트체크',
      description: 'AI가 지역에 떠도는 가짜뉴스를 수집·분석하여 검증합니다.',
      icon: '✅',
      details: [
        'SNS, 커뮤니티에서 지역 관련 루머와 가짜뉴스 자동 수집',
        '딥러닝 기술로 오보/허위정보 패턴을 학습하여 신뢰도 분석',
        '재난 상황에서 생명과 안전을 위협하는 허위정보 신속 차단'
      ],
      highlight: 'AI로 정보 신뢰성을 높이는 공영미디어 역할'
    }
  ]
}) => {
  return (
    <section className="features" id="기능">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon || '🔹'}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.details && (
                <div className="feature-details">
                  <h4>세부 기능</h4>
                  <ul>
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              {feature.highlight && (
                <div className="feature-highlight-tag">
                  <span>{feature.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 