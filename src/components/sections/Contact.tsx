import React, { useState } from 'react';
import '../../styles/Contact.css';

interface ContactProps {
  title?: string;
  subtitle?: string;
}

const Contact: React.FC<ContactProps> = ({
  title = '문의하기',
  subtitle = 'AI 방송 솔루션 도입 및 공영성 강화를 위한 제안이 필요하시면 언제든지 문의해 주세요.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 여기에서 폼 데이터 처리 로직을 추가할 수 있습니다.
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="contact" id="문의하기">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>이메일</h3>
              <p>ai-broadcast@example.com</p>
            </div>
            <div className="info-item">
              <h3>전화번호</h3>
              <p>02-123-4567</p>
            </div>
            <div className="info-item">
              <h3>지원 정보</h3>
              <p>2025년 AI‧디지털 기반 방송프로그램 제작지원 사업 관련 상담을 제공합니다.</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">소속 방송사/기관</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">문의 내용</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">문의하기</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 