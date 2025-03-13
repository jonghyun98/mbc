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
}

interface CasesProps {
  sectionTitle?: string;
  subtitle?: string;
  cases?: Case[];
}

const Cases: React.FC<CasesProps> = ({
  sectionTitle = '도입 사례',
  subtitle = '지역방송사들이 AI 기술을 활용하여 공영성을 강화하고 시청자 서비스를 확대한 실제 사례입니다.',
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
      quoteAuthor: "김종기 CJB 보도국장"
    },
    {
      title: 'AI 다국어 자막 서비스',
      description: 'JIBS제주방송은 2024년 5월부터 주요 뉴스에 AI 자동 번역 자막 서비스를 도입하여 제주도 내 외국인 관광객과 이주민을 위한 정보 접근성을 높였습니다. 특히 재난·안전 정보를 중국어, 영어로 동시에 제공하는 서비스가 호평을 받고 있습니다.',
      broadcaster: 'JIBS제주방송',
      results: [
        '주요 뉴스 4개 언어(한국어, 영어, 중국어, 일본어) 자막 서비스 제공',
        '외국인 관광객 대상 긴급 재난 정보 전달 체계 구축',
        '다국어 자막 서비스로 유튜브 해외 시청자 30% 증가'
      ],
      quote: "제주도는 외국인 관광객이 많은 지역 특성상 AI 다국어 서비스가 실질적인 공익 효과를 창출하고 있습니다.",
      quoteAuthor: "JIBS 디지털뉴스팀"
    },
    {
      title: 'AI 기상 캐스터',
      description: 'G1강원방송은 2024년 6월부터 기상 정보를 전달하는 AI 캐스터를 도입하여 24시간 실시간 기상 정보를 제공하고 있습니다. 특히 산간 지역 눈사태, 농가 냉해 등 지역 맞춤형 재난 경보 시스템을 구축하여 지역민의 안전에 기여하고 있습니다.',
      broadcaster: 'G1강원방송',
      results: [
        '24시간 기상 정보 제공으로 시청자 서비스 확대',
        '눈사태, 산불 등 강원도 지역 특화 재난 정보 제공',
        '농가 및 산간 지역 주민 대상 맞춤형 기상 정보 서비스 개발'
      ],
      quote: "AI 기상 캐스터 도입 초기에는 우려가 있었지만, 특히 취약 시간대와 산간 지역 주민들의 높은 호응을 얻고 있습니다.",
      quoteAuthor: "홍서표 G1 보도국장"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases; 