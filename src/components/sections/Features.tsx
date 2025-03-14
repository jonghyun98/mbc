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
  budget?: string;
  implementation?: string[];
  systemArchitecture?: {
    title: string;
    description: string;
    components: {
      name: string;
      description: string;
    }[];
    workflow: string[];
  };
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
      title: 'AI 다국어 라디오 뉴스',
      description: '인력이 부족한 지역 라디오(주말·심야)에 AI TTS 기반 다국어 뉴스를 제공합니다.',
      icon: '🌐',
      details: [
        '메인 뉴스(한글)를 AI가 자동 번역하여 AI 음성으로 재생',
        '현장음(인터뷰·취재)과 AI 아나운서 음성 결합으로 풍부한 뉴스 경험',
        '영어, 중국어, 베트남어 등 지역 내 외국인 커뮤니티를 위한 맞춤 언어 서비스',
        '라디오는 화면·CG 문제에서 자유로워 AI 도입 부담이 적음'
      ],
      highlight: '지역 내 외국인을 위한 공적 서비스 강화',
      expansion: {
        title: '확장 시나리오',
        items: [
          '파일럿(2~5천만원) → 정규 편성(다국어 뉴스 코너) → 독립 채널 확장',
          '지역 행정기관과 협력하여 외국인 주민 대상 생활정보 전달',
          '유튜브/팟캐스트 플랫폼으로 오디오 클립 형태 추가 배포'
        ]
      },
      products: [
        '글로벌 로컬 뉴스 플랫폼',
        '지역 특화 생활정보 서비스',
        '다국어 오디오 뉴스 앱'
      ],
      budget: '2천만원~5천만원',
      implementation: [
        '인력이 없는 주말·심야 시간대 → AI 자동 번역·음성 서비스로 공백 해소',
        '기존 뉴스룸 인력은 취재·편집에 집중, AI는 단순 번역·낭독 담당',
        '소규모 예산으로 지역 내 외국인 커뮤니티에 직접적 가치 제공'
      ]
    },
    {
      title: 'AI 기상/재난 캐스터',
      description: 'AI 합성 캐릭터가 기상 정보와 재난 알림을 수어와 함께 제공합니다.',
      icon: '☁️',
      details: [
        '24시간 실시간 기상 정보 제공으로 주말/심야 시간대 서비스 유지',
        '수어 동시 제공으로 청각장애인을 위한 정보 접근성 향상',
        '지역별 맞춤형 재난 정보 신속 제공',
        '눈사태, 산불, 홍수 등 지역 특화 재난 정보에 특화'
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
      ],
      budget: '3천만원~4천만원',
      implementation: [
        '프로그램 일부만 AI로 대체하여 구성원 반발 최소화',
        '기존 스튜디오 인력은 "가상 그래픽·합성 오퍼레이터" 등 새로운 기술직으로 재교육',
        '재난·위기 상황에서 24시간 정보 제공 가능'
      ]
    },
    {
      title: '다문화 긴급속보',
      description: '재난·사건 정보를 다국어로 자동 생성하고 송출합니다.',
      icon: '🚨',
      details: [
        '긴급 재난 발생 시 즉시 다국어 번역 및 푸시 알림 발송',
        '인력이 없는 주말/야간에도 AI가 자동으로 재난 정보 전파',
        '휴대폰 위치 기반으로 필요한 사람에게 중요 정보 우선 전달',
        '태풍, 침수, 폭염, 화재 등 다양한 재난 상황별 맞춤형 알림 템플릿 구축'
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
      ],
      budget: '3천만원~5천만원',
      implementation: [
        '"공영방송이 지역 외국인에게도 생존 정보를 전달"한다는 사회적 가치 강조',
        '주말·야간 등 상시 인력 없는 상황에서도 AI가 기본 스크립트를 번역·음성으로 처리',
        '모바일(앱·SNS)을 통한 푸시 알림 발송으로 넓은 도달률 확보'
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
        '검증된 정보는 시각적으로 명확한 "팩트카드"로 제작되어 소셜미디어에 신속 배포',
        '정보 신뢰도 평가 시스템으로 5단계 점수화하여 시청자 판단 지원',
        '특정 지역 개발 루머, 지역 범죄 오보 등 지역사회 혼란 방지에 특화'
      ],
      highlight: '민주주의와 신뢰사회 구축을 위한 공영미디어의 핵심 역할',
      expansion: {
        title: '시범 → 확장',
        items: [
          '주간 팩트체크 코너(3~4분) → 정규 프로그램 → 상시 운영 플랫폼',
          '지역 시민기자, 전문가와 협업하는 참여형 팩트체크 네트워크 구축',
          '선거·재난·갈등 상황에서 특별 팩트체크 서비스 가동',
          '타 지역방송과 팩트체크 정보 공유 네트워크 구축으로 전국 확산',
          '학교 및 공공기관 대상 미디어 리터러시 교육 프로그램으로 확장',
          '시민 제보 기반의 참여형 팩트체크 플랫폼 구축으로 지역사회 참여 유도'
        ]
      },
      products: [
        '팩트체크 AI 자동화 시스템',
        '지역 미디어 리터러시 교육 플랫폼',
        '시민 참여형 팩트체크 앱',
        '허위정보 조기경보 시스템',
        '지역 뉴스 신뢰도 평가 대시보드',
        '지역 맞춤형 팩트체크 데이터베이스'
      ],
      budget: '4천만원~5천만원',
      implementation: [
        'AI가 제작 과정(루머 모니터링·스크리닝)에 참여하므로, 인력 부담 최소화',
        '시청자에게 "AI = 가짜뉴스를 억제하는 존재" 이미지 제공',
        '선거·재난 상황에서 특별 편성 가능으로 공영미디어 책무 강화'
      ],
      systemArchitecture: {
        title: 'AI 팩트체크 시스템 구조',
        description: '허위정보를 수집부터 검증, 배포까지 효율적으로 처리하는 5단계 파이프라인 아키텍처로 설계되었습니다. 각 단계별 전문 AI 모듈이 연계되어 정확도와 신속성을 보장합니다.',
        components: [
          {
            name: '데이터 수집 엔진',
            description: '소셜미디어 API, RSS 피드, 웹 크롤링 등을 통해 지역 관련 정보를 실시간으로 수집합니다. 확산 속도, 키워드 매칭, 지역 연관성을 기준으로 우선순위를 판단합니다.'
          },
          {
            name: '멀티모달 분석기',
            description: '텍스트(NLP), 이미지(컴퓨터 비전), 오디오(음성 인식) 등 다양한 형태의 콘텐츠를 병렬 처리하여 조작·변형 징후를 탐지합니다. 딥러닝 기반 변조 탐지 알고리즘을 적용합니다.'
          },
          {
            name: '신뢰도 평가 모듈',
            description: '소스 신뢰성, 주장의 일관성, 내용의 검증 가능성, 확산 패턴 등을 종합 분석하여 5단계 신뢰도 점수(S-A-B-C-D)를 부여합니다. 평가 기준은 공개 투명하게 운영됩니다.'
          },
          {
            name: '팩트체크 워크벤치',
            description: '인간 팩트체커(기자, 전문가)와 AI의 협업 환경으로, AI가 제안한 관련 정보와 참고 자료를 검토하고 최종 판단을 내릴 수 있는 인터페이스를 제공합니다.'
          },
          {
            name: '배포 및 피드백 시스템',
            description: '검증된 정보를 다양한 형태(팩트카드, 인포그래픽, 요약 영상 등)로 자동 생성하고 TV, 웹, 모바일, SNS 등 다중 채널로 배포합니다. 사용자 피드백을 수집하여 시스템 개선에 활용합니다.'
          }
        ],
        workflow: [
          '1단계 - 모니터링: AI 크롤러가 24시간 지역 관련 정보 수집 및 위험도 스크리닝',
          '2단계 - 우선순위화: 확산 속도, 잠재적 피해, 지역 관련성을 기준으로 체크 대상 선정',
          '3단계 - AI 사전 분석: 자동화된 검증 프로세스로 유사 사례 검색, 출처 확인, 맥락 파악',
          '4단계 - 인간 검증: 전문 팩트체커가 AI 분석 결과를 바탕으로 최종 판단',
          '5단계 - 결과 배포: 검증 결과를 "팩트카드" 형태로 제작하여 다채널 동시 배포'
        ]
      }
    },
    {
      title: 'AI 번역 더빙 채널',
      description: '지역 주요 뉴스를 AI 자동 번역·더빙하여 해외 동포나 교민에게 제공합니다.',
      icon: '🎤',
      details: [
        '5~10분 정도로 편집한 지역 주요 뉴스를 다양한 언어로 자동 번역',
        'AI 음성 합성으로 자연스러운 성우 품질의 더빙 제공',
        '자동 자막·이미지·CG 결합으로 풍부한 시청 경험 제공',
        '유튜브, SNS 등 다양한 온라인 플랫폼에 정기적으로 배포'
      ],
      highlight: '지역 이야기의 글로벌 확산과 해외 네트워크 구축',
      expansion: {
        title: '발전 방향',
        items: [
          '파일럿 영상(3~5개) → 정기 채널 운영 → 글로벌 네트워크 구축',
          '해외 한인회, 공관 등과 협력체계 구축으로 콘텐츠 배포 확대',
          '지역 특화 콘텐츠(관광, 문화, 산업)로 확장하여 지역 홍보 효과 극대화'
        ]
      },
      products: [
        '다국어 지역 뉴스 유튜브 채널',
        '글로벌 지역 소식 플랫폼',
        '해외 교민 네트워크 앱'
      ],
      budget: '2천만원~4천만원',
      implementation: [
        '우리 지역 이야기가 교민·유학생 네트워크로 확산되는 글로벌 홍보 효과',
        '기존 제작된 뉴스 콘텐츠 활용으로 추가 제작비 최소화',
        '해외 네트워크나 기관 연계로 추가 투자 가능성 확보'
      ]
    },
    {
      title: 'AI 시청자 반응형 코너',
      description: '시청자 문자·댓글을 AI가 분석하여 실시간 여론을 보도하는 참여형 코너입니다.',
      icon: '💬',
      details: [
        '실시간 라이브 방송 중 시청자 문자·SNS 댓글을 AI가 수집 및 분석',
        '감정·키워드 분석으로 주요 여론과 질문을 실시간 분류 및 시각화',
        '방송사 내부 인력만으로 처리하기 힘든 대량의 시청 반응을 AI가 빠르게 정제',
        '사회자가 시청자 의견을 실시간으로 프로그램에 반영하여 쌍방향 소통 강화'
      ],
      highlight: '시청자와의 쌍방향 소통 강화 및 참여도 향상',
      expansion: {
        title: '적용 확대',
        items: [
          '선거 토론회, 재난 방송 등 특수 상황에서 실시간 여론 파악 도구로 활용',
          '지역 현안 토론 프로그램에 적용하여 시민 참여 민주주의 강화',
          '시청자 데이터 분석을 통한 맞춤형 프로그램 개발에 활용'
        ]
      },
      products: [
        '시청자 의견 실시간 분석 시스템',
        '참여형 방송 플랫폼',
        '지역 여론 시각화 대시보드'
      ],
      budget: '3천만원~4천만원',
      implementation: [
        '시청자와의 쌍방향 소통 강화로 방송 참여도 향상',
        '대량의 시청자 반응을 AI가 빠르게 정제하여 방송 효율 향상',
        '재난·선거 상황에서 신속한 여론 파악 가능'
      ]
    },
    {
      title: 'AI 로컬 아카이브',
      description: '지역의 역사적 영상·음성 자료를 AI로 복원하고 디지털화하여 지역 문화유산을 보존합니다.',
      icon: '📚',
      details: [
        '지역방송사가 보유한 과거 아날로그 영상·음성 자료의 AI 기반 복원 및 디지털화',
        '낮은 해상도 영상을 AI 업스케일링으로 고화질 변환',
        '훼손된 음성 자료 복원 및 자동 텍스트 변환(STT)으로 검색 가능한 아카이브 구축',
        '지역 역사, 인물, 문화재 등에 관한 귀중한 자료의 디지털 보존'
      ],
      highlight: '지역 문화유산 보존 및 활용을 통한 공적 가치 창출',
      expansion: {
        title: '발전 단계',
        items: [
          '핵심 자료 시범 복원(10~20시간) → 전체 아카이브 구축 → 대중 공개 플랫폼',
          '지역 교육기관과 연계한 지역학 교육자료로 활용',
          '지역 문화콘텐츠 개발의 원천 자료로 활용하여 새로운 가치 창출'
        ]
      },
      products: [
        '지역 디지털 아카이브 플랫폼',
        '지역학 교육 자료 포털',
        'AI 기반 미디어 복원 시스템'
      ],
      budget: '4천만원~6천만원',
      implementation: [
        '지역의 역사적 자료를 보존하여 문화적 정체성 강화',
        '교육기관 및 연구기관에 귀중한 자료 제공으로 학술적 가치 창출',
        '지역 콘텐츠 산업 활성화에 기여하는 원천 자료 확보'
      ]
    },
    {
      title: 'AI 맞춤형 교육 콘텐츠',
      description: '지역 학생들을 위한 맞춤형 교육 콘텐츠를 AI 기술로 제작하여 교육 격차를 해소합니다.',
      icon: '🎓',
      details: [
        '지역 특화 교육과정(지역사, 환경, 문화 등)에 대한 맞춤형 영상 콘텐츠 제작',
        'AI 음성 합성으로 다양한 교육자 목소리 제공 및 다국어 지원',
        '학습자 수준에 맞춘 콘텐츠 난이도 자동 조절 기능',
        '농어촌, 도서산간 등 교육 취약지역 학생들을 위한 맞춤형 학습 지원'
      ],
      highlight: '지역 교육 격차 해소 및 미래 인재 양성',
      expansion: {
        title: '확장 계획',
        items: [
          '시범 과목(3~5개) → 전체 교과목 확대 → 종합 교육 플랫폼',
          '지역 교육청과 협력하여 공교육 현장에 도입',
          '학부모와 교사를 위한 교육 컨설팅 서비스로 확장'
        ]
      },
      products: [
        '지역 맞춤형 교육 플랫폼',
        'AI 학습 분석 시스템',
        '다문화 가정을 위한 이중언어 교육 콘텐츠'
      ],
      budget: '3천만원~5천만원',
      implementation: [
        '지역 교육기관과 협력하여 실제 교육 현장의 요구 반영',
        '방송사의 콘텐츠 제작 노하우와 AI 기술 결합으로 고품질 교육 자료 제작',
        '교육 형평성 제고를 통한 공영방송의 사회적 책임 수행'
      ]
    },
    {
      title: 'AI 지역경제 정보 플랫폼',
      description: '지역 소상공인과 소비자를 연결하는 AI 기반 정보 플랫폼을 구축합니다.',
      icon: '🏪',
      details: [
        '지역 소상공인 상점, 농수산물 직거래, 관광지 등의 정보를 AI가 수집 및 분석',
        '개인 맞춤형 지역 상품 추천 및 소비자 리뷰 자동 분석',
        '라이브 커머스와 연계한 지역 특산품 판매 지원',
        '지역 경제 동향 및 소비 트렌드 분석 리포트 제공'
      ],
      highlight: '지역경제 활성화 및 소상공인 디지털 전환 지원',
      expansion: {
        title: '발전 로드맵',
        items: [
          '정보 제공 플랫폼 → 마케팅 지원 → 종합 경제 생태계',
          '지자체 및 소상공인 단체와 협력 네트워크 구축',
          '지역 화폐 및 결제 시스템과 연계로 직접적 경제 효과 창출'
        ]
      },
      products: [
        '지역 상권 정보 앱',
        'AI 기반 소상공인 마케팅 지원 툴',
        '지역 경제 분석 대시보드'
      ],
      budget: '4천만원~6천만원',
      implementation: [
        '지역 소상공인의 디지털 역량 강화 및 홍보 채널 확대',
        '소비자에게 유용한 지역 정보 제공으로 지역 소비 활성화',
        '지역 경제 데이터 분석을 통한 정책 수립 지원'
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
              
              {feature.budget && (
                <div className="feature-budget">
                  <span className="budget-label">예산 규모:</span>
                  <span className="budget-amount">{feature.budget}</span>
                </div>
              )}
              
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
              
              {feature.implementation && (
                <div className="feature-implementation">
                  <h4>구현 방안</h4>
                  <ul>
                    {feature.implementation.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
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
              
              {feature.systemArchitecture && (
                <div className="feature-system-architecture">
                  <h4>{feature.systemArchitecture.title}</h4>
                  <p className="architecture-description">{feature.systemArchitecture.description}</p>
                  
                  <div className="architecture-components">
                    <h5>주요 구성요소</h5>
                    {feature.systemArchitecture.components.map((component, compIndex) => (
                      <div className="component-item" key={compIndex}>
                        <span className="component-name">{component.name}</span>
                        <p className="component-description">{component.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="architecture-workflow">
                    <h5>작동 프로세스</h5>
                    <ul className="workflow-steps">
                      {feature.systemArchitecture.workflow.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ul>
                  </div>
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