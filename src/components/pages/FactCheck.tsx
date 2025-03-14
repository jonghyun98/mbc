import React from 'react';
import '../../styles/FactCheck.css';

interface FeatureCardProps {
  title: string;
  description: string;
  elements: string[];
  benefits: string[];
  implementation: string[];
  icon: string;
}

const FactCheck: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: '신뢰 기반 하이브리드 저널리즘',
      description: 'AI를 기자의 도구가 아닌 파트너로 활용하는 협업 모델',
      icon: '🤝',
      elements: [
        '기사 생성 과정의 AI와 인간 기자 역할을 명확히 표시하는 제작 내역',
        '데이터 출처와 분석 과정을 시각화하는 신뢰도 대시보드',
        'AI 생성 문단과 기자 작성 문단을 구분하는 하이브리드 콘텐츠 인터페이스'
      ],
      benefits: [
        '기사 생성 과정의 완전한 투명성 확보',
        '독자의 정보 신뢰도 향상',
        '지역 특화 기사의 생산성 향상'
      ],
      implementation: [
        'AI 1차 분석 → 기자 검증 → 에디터 최종 승인의 3단계 구조',
        '기사 단위 신뢰도 지표 시스템 구현',
        '기자 및 편집자 AI 협업 워크플로우 교육'
      ]
    },
    {
      title: '지역 특화 데이터 저널리즘',
      description: '지역 행정 데이터, 통계, 민원 등 공공데이터 통합 분석 플랫폼',
      icon: '📊',
      elements: [
        '지역 특화 데이터(지가, 대기질, 인구변화 등) 자동 수집 및 분석 엔진',
        '지도 기반 시각화 도구로 지역 격차, 환경 이슈 등 자동 시각화',
        '복잡한 예산, 행정 자료를 쉽게 해석하는 시민 친화적 데이터 스토리텔링'
      ],
      benefits: [
        '복잡한 지역 이슈에 대한 시민 이해도 향상',
        '증거 기반 지역 행정 감시 기능 강화',
        '지역 데이터 활용한 심층 보도 확대'
      ],
      implementation: [
        '지자체, 통계청 등의 오픈API 연동 시스템 구축',
        '데이터 시각화 템플릿 라이브러리 개발',
        '주간 데이터 뉴스 코너 신설'
      ]
    },
    {
      title: '멀티모달 팩트체크 시스템',
      description: '텍스트, 이미지, 영상, 오디오 등 모든 형태의 콘텐츠 통합 분석 플랫폼',
      icon: '🔍',
      elements: [
        '딥페이크 및 조작 이미지/영상 자동 탐지 시스템',
        '허위정보 확산 초기에 경보를 발령하는 조기경보 시스템',
        '팩트체커와 시민이 협업하는 크라우드소싱 검증 플랫폼'
      ],
      benefits: [
        '지역 내 허위정보 확산 조기 차단',
        '멀티미디어 콘텐츠 조작 탐지 능력 향상',
        '시민 미디어 리터러시 교육 효과'
      ],
      implementation: [
        '소셜미디어 모니터링 시스템 구축',
        '멀티모달 AI 분석 파이프라인 개발',
        '팩트체크 결과 시각화 템플릿 제작'
      ]
    },
    {
      title: '맥락화된 저널리즘 AI',
      description: '개인 관심사 맞춤과 함께 필수 공공정보 노출을 보장하는 균형 잡힌 뉴스 플랫폼',
      icon: '🧩',
      elements: [
        '긴 심층 기사를 다양한 길이(30초/3분/10분)로 자동 변환하는 다층적 콘텐츠 시스템',
        '뉴스 배경지식을 자동 연결하는 지식그래프 기반 맥락화 엔진',
        '뉴스 소비 패턴을 분석해 사각지대 없는 정보 균형 알고리즘'
      ],
      benefits: [
        '시청자 맞춤형 뉴스 이해도 향상',
        '심층 이슈에 대한 배경지식 자동 제공',
        '시청자의 균형 잡힌 정보 습득 보장'
      ],
      implementation: [
        '콘텐츠 길이 변환 AI 모델 개발',
        '지역 이슈 지식그래프 구축',
        '개인화/공공성 균형 알고리즘 설계'
      ]
    },
    {
      title: '참여형 커뮤니티 저널리즘',
      description: '시민 제보와 전문 저널리즘의 결합을 통한 지역 문제 해결 지향 플랫폼',
      icon: '👥',
      elements: [
        '시민 제보를 AI가 1차 분류하고 가치화하는 크라우드소싱 뉴스 인큐베이터',
        '지역 이슈별 전문가-시민-기자 연결 네트워크',
        '보도 이후 변화를 추적하는 뉴스 임팩트 대시보드'
      ],
      benefits: [
        '지역사회 참여도 향상 및 뉴스 소외계층 감소',
        '지역 이슈에 대한 해결책 지향적 보도 증가',
        '보도의 실질적 사회 영향력 측정 및 강화'
      ],
      implementation: [
        '시민 제보 플랫폼 개발',
        '이슈별 전문가 DB 구축',
        '임팩트 추적 시스템 도입'
      ]
    }
  ];

  return (
    <main className="factcheck-page">
      <section className="factcheck-hero">
        <div className="container">
          <h1>AI 팩트체크 서비스</h1>
          <p className="factcheck-subtitle">
            신뢰할 수 있는 저널리즘을 위한 AI 솔루션으로 지역 사회의 정확한 정보 전달과 민주주의 가치를 강화합니다.
          </p>
        </div>
      </section>

      <section className="factcheck-intro">
        <div className="container">
          <div className="intro-content">
            <h2>AI 저널리즘의 미래</h2>
            <p>
              AI 저널리즘은 단순히 비용 절감이나 효율성 증대가 아닌, 더 깊이 있고 신뢰할 수 있는 지역 저널리즘의 새로운 형태를 창출합니다. 
              기술이 아닌 공익과 신뢰를 중심에 두고, 인간 기자와 AI의 협업을 통해 지역사회에 진정한 가치를 제공하는 것이 핵심입니다.
            </p>
            <div className="intro-principles">
              <div className="principle-item">
                <div className="principle-icon">⚖️</div>
                <div className="principle-text">
                  <h3>기술과 윤리의 균형</h3>
                  <p>AI 기술 발전과 저널리즘 기본 가치 준수 사이의 균형을 추구합니다.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-icon">🔍</div>
                <div className="principle-text">
                  <h3>투명성과 설명가능성</h3>
                  <p>AI 의사결정 과정의 완전한 투명성을 보장합니다.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-icon">🧠</div>
                <div className="principle-text">
                  <h3>인적 역량 강화</h3>
                  <p>기자들의 AI 활용 역량 향상을 위한 지속적 교육을 제공합니다.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-icon">📈</div>
                <div className="principle-text">
                  <h3>다각적 성과 평가</h3>
                  <p>효율성뿐 아니라 저널리즘 품질, 신뢰도 등 다양한 지표로 성과를 측정합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="factcheck-features">
        <div className="container">
          <h2>AI 저널리즘 구현 요소</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-elements">
                  <h4>주요 구성요소</h4>
                  <ul>
                    {feature.elements.map((element, i) => (
                      <li key={i}>{element}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="feature-benefits">
                  <h4>기대 효과</h4>
                  <ul>
                    {feature.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="feature-implementation">
                  <h4>구현 방안</h4>
                  <ul>
                    {feature.implementation.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="factcheck-roadmap">
        <div className="container">
          <h2>실행 로드맵</h2>
          <div className="roadmap-timeline">
            <div className="roadmap-phase">
              <div className="phase-header">
                <div className="phase-number">1</div>
                <h3>기반 구축 <span>(6개월)</span></h3>
              </div>
              <ul className="phase-items">
                <li>데이터 수집 및 분석 파이프라인 구축</li>
                <li>기자-AI 협업 워크플로우 설계 및 테스트</li>
                <li>팩트체크 기초 모델 개발 및 학습</li>
              </ul>
            </div>
            
            <div className="roadmap-phase">
              <div className="phase-header">
                <div className="phase-number">2</div>
                <h3>파일럿 서비스 <span>(6개월)</span></h3>
              </div>
              <ul className="phase-items">
                <li>주간 AI 데이터 저널리즘 코너 운영</li>
                <li>소규모 팩트체크 서비스 론칭</li>
                <li>기자 대상 AI 저널리즘 툴킷 배포 및 교육</li>
              </ul>
            </div>
            
            <div className="roadmap-phase">
              <div className="phase-header">
                <div className="phase-number">3</div>
                <h3>확장 및 통합 <span>(12개월)</span></h3>
              </div>
              <ul className="phase-items">
                <li>다매체 통합 AI 저널리즘 플랫폼 구축</li>
                <li>시민 참여형 저널리즘 네트워크 확대</li>
                <li>타 지역 방송사와 협력 네트워크 구축</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FactCheck; 