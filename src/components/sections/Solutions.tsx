import React from 'react';
import '../../styles/Solutions.css';

interface Solution {
  title: string;
  description: string;
  benefits: string[];
  budgetInfo?: string;
  implementation?: string;
  image?: string;
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
      ]
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
      ]
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
      ]
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