import { createContext, useContext } from 'react';

/**
 * PortfolioContext
 *
 * 포트폴리오 전체 데이터를 통합 관리하는 Context
 * basicInfo, sections, skills 데이터를 포함
 */

const portfolioData = {
  basicInfo: {
    name: '김상구',
    nameEn: 'Sanggu Kim',
    title: '웹 개발자',
    department: '컴퓨터공학과',
    level: '신입',
    email: 'sanggu@example.com',
    github: 'https://github.com/sanggu',
    linkedin: 'https://linkedin.com/in/sanggu',
    profileImage: null,
    shortIntro: '사용자 경험을 중시하는 프론트엔드 개발자입니다.',
    fullIntro: '안녕하세요! 저는 웹 개발에 열정을 가진 신입 개발자 김상구입니다. 컴퓨터공학을 전공하며 프론트엔드 기술을 깊이 학습했고, 사용자 중심의 인터페이스를 만드는 것에 큰 보람을 느낍니다.',
  },
  sections: {
    story: {
      title: '나의 개발 스토리',
      icon: 'BookOpen',
      content: `대학교 2학년 때 처음 웹 개발을 접했습니다. HTML로 간단한 페이지를 만들었을 때의 그 설렘은 아직도 생생합니다.

처음에는 단순히 화면에 글자가 나타나는 것이 신기했지만, JavaScript를 배우면서 웹의 무한한 가능성을 깨달았습니다. 버튼을 클릭하면 동작하고, 데이터가 실시간으로 변하는 것을 보며 "이것이 내가 하고 싶은 일이다"라고 확신했습니다.

React를 배우면서 컴포넌트 기반 개발의 매력에 빠졌고, 재사용 가능한 코드를 작성하는 것에 큰 재미를 느꼈습니다. 졸업 프로젝트로 팀원들과 함께 웹 애플리케이션을 개발하며 협업의 중요성도 배웠습니다.

지금은 더 나은 사용자 경험을 제공하기 위해 매일 조금씩 성장하고 있습니다.`,
    },
    philosophy: {
      title: '개발 철학',
      icon: 'Lightbulb',
      content: `**"사용자가 편해야 좋은 코드다"**

저는 기술적으로 뛰어난 코드보다 사용자가 편하게 느끼는 결과물을 만드는 것이 더 중요하다고 생각합니다.

**1. 단순함을 추구합니다**
복잡한 기능보다 직관적인 인터페이스를 선호합니다. 사용자가 설명서 없이도 바로 사용할 수 있어야 합니다.

**2. 작은 것에도 신경 씁니다**
버튼의 크기, 색상의 대비, 로딩 속도 등 작은 디테일이 전체 경험을 좌우한다고 믿습니다.

**3. 끊임없이 배웁니다**
기술은 빠르게 변합니다. 새로운 것을 두려워하지 않고, 필요하다면 언제든 배울 준비가 되어 있습니다.

**4. 협업을 중시합니다**
혼자 만드는 것보다 함께 만드는 것이 더 좋은 결과를 낸다고 생각합니다. 열린 마음으로 피드백을 주고받습니다.`,
    },
    personal: {
      title: '개인적인 이야기',
      icon: 'Heart',
      content: `코딩 외에도 다양한 취미를 가지고 있습니다.

**독서**
기술 서적뿐만 아니라 인문학 책도 즐겨 읽습니다. 최근에는 "클린 코드"와 "사피엔스"를 동시에 읽고 있습니다.

**운동**
주 3회 헬스장에서 운동하며 체력을 관리합니다. 건강한 몸에서 좋은 코드가 나온다고 믿습니다.

**게임**
가끔 친구들과 함께 게임을 즐깁니다. 게임 속 UI/UX에서 영감을 얻기도 합니다.

**카페 투어**
조용한 카페에서 코딩하는 것을 좋아합니다. 새로운 환경에서 새로운 아이디어가 떠오르곤 합니다.

이러한 다양한 경험들이 개발자로서의 시야를 넓혀준다고 생각합니다.`,
    },
  },
  skills: [
    { name: 'React', level: 85, category: 'Frontend', color: '#61DAFB' },
    { name: 'JavaScript', level: 80, category: 'Frontend', color: '#F7DF1E' },
    { name: 'TypeScript', level: 65, category: 'Frontend', color: '#3178C6' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend', color: '#E34F26' },
    { name: 'Tailwind CSS', level: 75, category: 'Frontend', color: '#06B6D4' },
    { name: 'Node.js', level: 60, category: 'Backend', color: '#339933' },
    { name: 'Python', level: 55, category: 'Backend', color: '#3776AB' },
    { name: 'Git', level: 70, category: 'Tools', color: '#F05032' },
    { name: 'Figma', level: 50, category: 'Tools', color: '#F24E1E' },
    { name: 'SQL', level: 55, category: 'Backend', color: '#4479A1' },
  ],
};

/**
 * 홈 탭에 보여줄 요약 데이터를 추출하는 함수
 * @returns {Object} 홈 탭용 요약 데이터
 */
const getHomeData = () => {
  const topSkills = [...portfolioData.skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, 4);

  return {
    name: portfolioData.basicInfo.name,
    title: portfolioData.basicInfo.title,
    department: portfolioData.basicInfo.department,
    level: portfolioData.basicInfo.level,
    shortIntro: portfolioData.basicInfo.shortIntro,
    topSkills,
  };
};

const PortfolioContext = createContext(null);

/**
 * PortfolioProvider 컴포넌트
 *
 * Props:
 * @param {ReactNode} children - 자식 컴포넌트 [Required]
 *
 * Example usage:
 * <PortfolioProvider><App /></PortfolioProvider>
 */
function PortfolioProvider({ children }) {
  const value = {
    ...portfolioData,
    getHomeData,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

/**
 * usePortfolio 커스텀 훅
 *
 * @returns {Object} 포트폴리오 Context 데이터
 *
 * Example usage:
 * const { basicInfo, skills, getHomeData } = usePortfolio();
 */
function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

export { PortfolioProvider, usePortfolio };
