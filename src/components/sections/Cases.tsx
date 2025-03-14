import React from 'react';
import '../../styles/Cases.css';

interface Case {
  title: string;
  description: string;
  broadcaster: string;
  results?: string[];
  quote?: string;
  quoteAuthor?: string;
  image?: string;
  futureVision?: string;
  developmentPlan?: {
    workforce?: string;
    publicValue?: string;
    budget?: string;
  };
}

interface CasesProps {
  sectionTitle?: string;
  subtitle?: string;
  cases?: Case[];
}

const Cases: React.FC<CasesProps> = ({
  sectionTitle = '도입 사례',
  subtitle = '지역방송사들이 AI 기술을 활용하여 공영성을 강화하고 시청자 서비스를 확대한 실제 사례입니다. 각 사례는 단계적으로 발전하여 장기적인 가치를 창출합니다.',
  cases = [
    {
      title: '주말 뉴스 AI 앵커 도입',
      description: 'CJB청주방송은 2024년 3월부터 주말 뉴스에 AI 앵커를 도입하여 최소 인력으로 뉴스를 제작하고 있습니다. 주말 뉴스 인력 부담을 줄이면서도 시청자에게 정보를 전달할 수 있게 되었습니다.',
      broadcaster: 'CJB청주방송',
      results: [
        '주말 뉴스 제작 인력을 10명에서 3명으로 감소시켜 효율성 증대',
        '중단되었던 주말 뉴스 서비스 재개로 시청자 만족도 향상',
        '외국인 거주자를 위한 영어 자막 서비스 확대'
      ],
      quote: "AI 앵커를 도입한 후 주말 뉴스를 복원할 수 있었고, 현재는 영어 자막까지 실험적으로 제공하고 있습니다.",
      quoteAuthor: "김종기 CJB 보도국장",
      futureVision: "단순 시범 적용에서 AI 다국어 뉴스 플랫폼으로 확장하여 지역 내 다양한 외국인 커뮤니티에 맞춤형 뉴스 서비스를 제공할 계획입니다.",
      developmentPlan: {
        workforce: "AI가 단순 낭독 업무를 담당하는 동안 기자들은 심층 취재와 분석에 집중하여 뉴스 품질 향상",
        publicValue: "지역 내 소외된 외국인 주민들에게 모국어로 지역 소식을 전달하는 공적 서비스 강화",
        budget: "초기 2~5천만원 규모의 시범 사업 → 지자체 협력 → 다국어 서비스 확대로 지속가능한 운영 구조 확립"
      }
    }
  ]
}) => {
  return (
    <section className="cases" id="사례">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <div className="case-image">
                <div className="image-placeholder">
                  <span className="case-icon">{caseItem.broadcaster.charAt(0)}</span>
                </div>
              </div>
              <div className="case-content">
                <h3 className="case-title">{caseItem.title}</h3>
                <p className="case-broadcaster">{caseItem.broadcaster}</p>
                <p className="case-description">{caseItem.description}</p>
                {caseItem.results && (
                  <div className="case-results">
                    <h4>주요 성과</h4>
                    <ul>
                      {caseItem.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {caseItem.quote && (
                  <div className="case-quote">
                    <blockquote>"{caseItem.quote}"</blockquote>
                    {caseItem.quoteAuthor && <cite>- {caseItem.quoteAuthor}</cite>}
                  </div>
                )}
                {caseItem.futureVision && (
                  <div className="case-future-vision">
                    <h4>미래 비전</h4>
                    <p>{caseItem.futureVision}</p>
                  </div>
                )}
                {caseItem.developmentPlan && (
                  <div className="case-development-plan">
                    <h4>발전 방향</h4>
                    {caseItem.developmentPlan.workforce && (
                      <div className="development-item">
                        <span className="development-tag">인력 구조:</span>
                        <p>{caseItem.developmentPlan.workforce}</p>
                      </div>
                    )}
                    {caseItem.developmentPlan.publicValue && (
                      <div className="development-item">
                        <span className="development-tag">공적 가치:</span>
                        <p>{caseItem.developmentPlan.publicValue}</p>
                      </div>
                    )}
                    {caseItem.developmentPlan.budget && (
                      <div className="development-item">
                        <span className="development-tag">예산 구조:</span>
                        <p>{caseItem.developmentPlan.budget}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases; 