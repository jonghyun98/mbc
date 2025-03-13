import React from 'react';
import '../../styles/Features.css';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  details?: string[];
  highlight?: string;
  expansion?: {
    title: string;
    items: string[];
  };
  products?: string[];
}

interface FeaturesProps {
  sectionTitle?: string;
  subtitle?: string;
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({
  sectionTitle = '주요 기능',
  subtitle = '공영방송의 공적 책무를 강화하고 지역민 모두에게 필요한 정보를 제공하는 AI 기술 기능들입니다. 각 기능은 소규모 시범 적용 후 장기적인 서비스로 확장 가능합니다.',
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
      highlight: '지역 내 외국인을 위한 공적 서비스 확대',
      expansion: {
        title: '확장 시나리오',
        items: [
          '파일럿(2~5천만원) → 정규 편성(다국어 뉴스 코너) → 독립 채널 확장',
          '초기 라디오/뉴스룸 적용 → 전체 프로그램 서비스로 확대',
          '지역방송 공동 다국어 번역 모델 구축 및 API 서비스화'
        ]
      },
      products: [
        '글로벌 로컬 뉴스 플랫폼',
        '지역 특화 생활정보 앱',
        '다국어 뉴스 구독 서비스'
      ]
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
      highlight: '24시간 정보 제공 및 장애인 접근성 강화',
      expansion: {
        title: '단계적 확장',
        items: [
          '기상 코너(2~3분) → 생활정보 전체 코너 → AI 버추얼 스튜디오',
          'AR/XR 그래픽 결합으로 시각적 효과 개선',
          '소셜 미디어 및 유튜브 채널 확장 운영'
        ]
      },
      products: [
        'AI 버추얼 스튜디오 패키지',
        '다양한 캐릭터 기반 정보 플랫폼',
        '관광·지역정보 결합 서비스'
      ]
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
      highlight: '위기 상황에서 신속한 안전 정보 획득',
      expansion: {
        title: '확장 방향',
        items: [
          '방송사와 지자체·소방청 등 협업 통합 플랫폼 구축',
          '통합 앱/모바일 알림 서비스 개발',
          '전국 지역방송사에 솔루션 판매 가능'
        ]
      },
      products: [
        '재난정보 AI 통합 플랫폼',
        '외국인 관광객 안전 챗봇',
        '다국어 지역 안전 앱'
      ]
    },
    {
      title: 'AI 팩트체크',
      description: '다양한 채널에서 확산되는 지역 관련 허위정보와 가짜뉴스를 AI가 실시간으로 감지하고 검증하여 정확한 정보를 시민들에게 제공합니다.',
      icon: '✅',
      details: [
        '소셜미디어, 지역 커뮤니티, 메신저에서 허위정보 자동 모니터링 및 수집',
        '멀티모달 AI 기술로 텍스트, 이미지, 영상 내 조작 콘텐츠 탐지',
        '자연어처리(NLP) 기반 허위정보 패턴 학습 및 95% 이상 정확도로 신뢰도 분석',
        '지역 특화 이슈(선거, 지역 갈등, 환경문제 등)에 대한 맞춤형 팩트체크',
        '검증된 정보는 시각적으로 명확한 "팩트카드"로 제작되어 소셜미디어에 신속 배포'
      ],
      highlight: '민주주의와 신뢰사회 구축을 위한 공영미디어의 핵심 역할',
      expansion: {
        title: '시범 → 확장',
        items: [
          '주간 팩트체크 코너(3~4분) → 정규 프로그램 → 상시 운영 플랫폼',
          '지역 시민기자, 전문가와 협업하는 참여형 팩트체크 네트워크 구축',
          '선거·재난·갈등 상황에서 특별 팩트체크 서비스 가동',
          '타 지역방송과 팩트체크 정보 공유 네트워크 구축으로 전국 확산',
          '학교 및 공공기관 대상 미디어 리터러시 교육 프로그램으로 확장'
        ]
      },
      products: [
        '팩트체크 AI 자동화 시스템',
        '지역 미디어 리터러시 교육 플랫폼',
        '시민 참여형 팩트체크 앱',
        '허위정보 조기경보 시스템',
        '지역 뉴스 신뢰도 평가 대시보드'
      ]
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
              
              {feature.expansion && (
                <div className="feature-expansion">
                  <h4>{feature.expansion.title}</h4>
                  <ul>
                    {feature.expansion.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {feature.products && (
                <div className="feature-products">
                  <h4>실현 가능한 프로덕트</h4>
                  <div className="product-tags">
                    {feature.products.map((product, productIndex) => (
                      <span key={productIndex} className="product-tag">{product}</span>
                    ))}
                  </div>
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