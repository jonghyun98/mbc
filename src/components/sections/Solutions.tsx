import React from 'react';
import '../../styles/Solutions.css';

interface Solution {
  title: string;
  description: string;
  benefits: string[];
  budgetInfo?: string;
  implementation?: string;
  image?: string;
  expandability?: string[];
  problemSolving?: {
    workforce?: string;
    publicValue?: string;
    sustainability?: string;
  };
}

interface SolutionsProps {
  sectionTitle?: string;
  subtitle?: string;
  solutions?: Solution[];
}

const Solutions: React.FC<SolutionsProps> = ({
  sectionTitle = '솔루션',
  subtitle = '지역방송의 공영성을 강화하고 사회적 약자를 배려하는 AI 기술 솔루션을 제공합니다. 단순 비용 절감이 아닌 새로운 가치 창출에 중점을 둡니다.',
  solutions = [
    {
      title: 'AI 다국어 라디오 뉴스',
      description: '인력이 부족한 지역 라디오(주말·심야·특정 시간대)에 AI 보이스(AI TTS) 기반의 다국어 뉴스를 제공합니다. 외국인 노동자, 다문화 가정, 관광객을 위한 지역 정보 서비스입니다.',
      budgetInfo: '예산 규모: 2천만원~5천만원 (공익형 단편 교양 지원 대상)',
      implementation: '기존 뉴스를 AI 번역 → AI 음성으로 재생 → 다국어 라디오 방송 실현',
      benefits: [
        '메인 뉴스(한글)를 AI가 자동 번역하여 AI 음성으로 재생',
        '현장음과 AI 아나운서 음성 결합으로 풍부한 뉴스 경험 제공',
        '다양한 언어(영어, 베트남어, 중국어 등)로 지역 소식 전달',
        '라디오는 화면·CG 문제에서 자유로워 AI 도입 부담이 적음',
        '소규모 예산으로도 빠른 개발·운영 가능'
      ],
      expandability: [
        '지역 특화 AI 라디오 서비스 플랫폼으로 확장 가능',
        '지역 행정기관과 협력하여 외국인 주민 대상 생활정보 전달',
        '유튜브/팟캐스트 플랫폼으로 오디오 클립 형태 추가 배포',
        'AI와 사람의 협업 라디오 오픈 스튜디오 구축 가능'
      ],
      problemSolving: {
        workforce: '주말·야간 등 비어있는 편성을 보완하되, 기사 취재·본격 뉴스 편집은 기존 인력이 계속 담당',
        publicValue: '외국인 주민·이주민이 꼭 필요한 정보를 라디오로 쉽게 접할 수 있도록 지원',
        sustainability: '초기 AI TTS 솔루션 비용·파일럿 제작 후 지자체 협력(MOU)과 지역사회단체 후원으로 확대'
      }
    },
    {
      title: 'AI 기상캐스터 + 외국어/수어 통합',
      description: '기상·교통·생활정보 코너를 AI 버추얼 캐릭터가 진행하며 동시에 외국어 자막과 수어를 제공합니다. 전체 뉴스가 아닌 특정 코너에 적용하여 안전하게 AI 솔루션을 테스트할 수 있습니다.',
      budgetInfo: '예산 규모: 3천만원~7천만원 (공익형 장·단편 교양 지원 대상)',
      implementation: 'AI 캐릭터 생성 → 기상정보 연동 → 다국어/수어 자동 생성 시스템 구축',
      benefits: [
        'AI 합성 캐릭터가 기상청/내부 기상취재 정보를 받아 예보 제공',
        '동시 통역 자막(외국어·수어) 기능을 AI 자막 시스템으로 제공',
        '노인층·외국인 노동자 등 정보 취약계층을 위한 시각·자막 기반 정보 제공',
        '프로그램 일부만 AI로 대체하여 구성원 반발 최소화',
        '재난·위기 상황에서 24시간 정보 제공 가능'
      ],
      expandability: [
        'AI 버추얼 스튜디오로 확장하여 다양한 정보 코너 제작 가능',
        '버추얼 프로덕션(XR)이나 AR그래픽 결합으로 시각적 효과 강화',
        '멀티플랫폼 전개: TV뿐만 아니라 지역 SNS·유튜브 채널 운영',
        '지역 관광청, 교통공사 등 유관기관과 B2B 협력 모델 구축'
      ],
      problemSolving: {
        workforce: '기존 스튜디오 인력을 "가상 그래픽·합성 오퍼레이터" 등 새로운 기술직으로 재배치',
        publicValue: '기상안내 시 동시에 수어·외국어 자막 제공으로 접근성 향상 및 포용적 뉴스 실현',
        sustainability: '지자체(관광, 문화재단) 협약 및 스폰서십을 통한 장기적 운영 모델 확보'
      }
    },
    {
      title: '다문화 노동자를 위한 긴급속보',
      description: '지역 뉴스의 긴급속보나 재난·사건 정보를 다국어로 자동 생성하고 송출하는 시스템입니다. 외국인 노동자, 관광객 등 한국어에 능숙하지 않은 지역민에게도 생존 정보를 전달합니다.',
      budgetInfo: '예산 규모: 2천만원~5천만원 (공익형 단편 프로그램 지원 대상)',
      implementation: '재난정보 DB 구축 → AI 자동 번역·음성합성 → 푸시 알림 시스템 연동',
      benefits: [
        '재난 정보 발생 시 AI 번역·TTS를 활용한 다국어 긴급속보 제공',
        '주말·야간 등 상시 인력 없는 상황에서도 AI가 기본 스크립트를 번역·음성으로 처리',
        '모바일(앱·SNS)을 통한 푸시 알림 발송으로 넓은 도달률 확보',
        '지역 공영방송의 공적 책무 강화 및 사회안전망 역할 수행',
        'PDF 가이드라인의 "사람을 살리는 AI" 및 "공익성 강화" 요건 충족'
      ],
      expandability: [
        '재난정보 AI 통합 플랫폼으로 확장 가능(지자체·소방청 등 협업)',
        '앱/모바일 알림 서비스로 발전시켜 더 넓은 이용자층 확보',
        '해외동포·관광객 대상 "안전 안내 챗봇" 서비스로 확대',
        '전국 또는 다른 지역방송사에 서비스로 판매 가능'
      ],
      problemSolving: {
        workforce: '재난방송 시 다국어 부분을 AI가 담당하여 기존 인력의 과도한 업무 부담 해소',
        publicValue: '외국인 근로자, 관광객에게 즉각적 생존 정보 제공으로 지역방송의 사회적 역할 강화',
        sustainability: '재난안전 관련 지자체, 정부(행안부) 예산 지원 가능성이 높음'
      }
    }
  ]
}) => {
  return (
    <section className="solutions" id="솔루션">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="solutions-container">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-item">
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                {solution.budgetInfo && (
                  <p className="solution-budget">{solution.budgetInfo}</p>
                )}
                {solution.implementation && (
                  <div className="solution-implementation">
                    <h4>구현 방식</h4>
                    <p>{solution.implementation}</p>
                  </div>
                )}
                <h4>주요 혜택</h4>
                <ul className="solution-benefits">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
                
                {solution.expandability && (
                  <div className="solution-expandability">
                    <h4>확장 가능성</h4>
                    <ul>
                      {solution.expandability.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {solution.problemSolving && (
                  <div className="solution-problemsolving">
                    <h4>문제 해결 접근법</h4>
                    {solution.problemSolving.workforce && (
                      <div className="problemsolving-item">
                        <span className="problemsolving-tag">인력 및 조직:</span>
                        <p>{solution.problemSolving.workforce}</p>
                      </div>
                    )}
                    {solution.problemSolving.publicValue && (
                      <div className="problemsolving-item">
                        <span className="problemsolving-tag">공적 가치:</span>
                        <p>{solution.problemSolving.publicValue}</p>
                      </div>
                    )}
                    {solution.problemSolving.sustainability && (
                      <div className="problemsolving-item">
                        <span className="problemsolving-tag">지속가능성:</span>
                        <p>{solution.problemSolving.sustainability}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="solution-image">
                <div className="image-placeholder">
                  {/* 솔루션 이미지 */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 