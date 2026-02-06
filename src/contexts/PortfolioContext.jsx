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
    school: '컴퓨터공학과',
    major: '웹 개발',
    status: '신입',
    email: 'sanggu@example.com',
    github: 'https://github.com/sanggu',
    shortIntro: '가치를 만드는 프론트엔드 개발자',
    fullIntro: '안녕하세요! 무에서 유를 창조하는 즐거움에 빠져 웹 개발을 시작한 김상구입니다. 단순히 코드를 치는 것이 아니라, 사용자에게 진정한 가치를 전달하는 개발자가 되고 싶습니다.',
  },
  sections: [
    {
      id: 'story',
      title: '나의 개발 스토리',
      subtitle: '생각을 현실로 만드는 코드의 매력',
      icon: 'BookOpen',
      content: `무에서 유를 창조하는 즐거움에 빠져 웹 개발을 시작했습니다.

처음 HTML로 간단한 웹페이지를 만들었을 때의 설렘은 아직도 생생합니다. 빈 화면에 한 줄씩 코드를 입력할 때마다 눈앞에서 형태가 잡혀가는 그 순간, 저는 개발의 매력에 완전히 빠져들었습니다.

단순히 코드를 치는 것이 아니라, 사용자의 문제를 해결하고 가치를 만드는 개발자가 되고 싶습니다. 기술은 도구일 뿐, 진정한 목표는 사람들의 삶을 조금 더 편리하게 만드는 것이라고 믿습니다.

매일 조금씩 성장하며, 더 나은 사용자 경험을 제공하기 위해 끊임없이 고민하고 있습니다.`,
      showInHome: true,
    },
    {
      id: 'philosophy',
      title: '개발 철학',
      subtitle: '동료의 시간을 아끼는 코드',
      icon: 'Lightbulb',
      content: `유지보수하기 좋은 코드, 동료가 읽기 편한 코드가 좋은 코드라고 믿습니다.

**가독성이 최우선입니다**
변수명 하나, 함수명 하나에도 의미를 담습니다. 6개월 후의 나 자신도, 내 코드를 처음 보는 동료도 쉽게 이해할 수 있어야 합니다.

**책임감 있는 개발**
"일단 돌아가니까"가 아닌 "이게 정말 최선인가?"를 항상 질문합니다. 버그가 발생하면 근본 원인을 찾아 해결합니다.

**열린 협업**
코드 리뷰를 통해 배우고, 제 의견도 적극적으로 공유합니다. 함께 만드는 것이 더 좋은 결과를 낸다고 생각합니다.`,
      showInHome: true,
    },
    {
      id: 'personal',
      title: '개인적인 이야기',
      subtitle: '일상에서 영감을 찾다',
      icon: 'Heart',
      content: `새로운 카페 탐방과 사진 촬영을 통해 영감을 얻고 리프레시합니다.

**카페 탐방**
조용한 카페에서 코딩하는 것을 좋아합니다. 새로운 환경에서 새로운 아이디어가 떠오르곤 합니다. 커피 한 잔의 여유가 복잡한 문제의 실마리를 풀어주기도 합니다.

**사진 촬영**
카메라를 들고 거리를 걷다 보면, 평소에 스쳐 지나가던 것들이 새롭게 보입니다. 빛의 각도, 사람들의 표정... 이런 디테일을 발견하는 눈이 UI 디자인에도 도움이 됩니다.

**기록하는 습관**
오늘 배운 것, 해결한 문제, 떠오른 아이디어를 기록합니다. 이 습관이 개발자로서의 성장을 돕습니다.`,
      showInHome: false,
    },
  ],
  skills: [
    { name: 'HTML', level: 80, category: 'Frontend', color: '#E34F26' },
    { name: 'CSS', level: 75, category: 'Frontend', color: '#1572B6' },
    { name: 'JavaScript', level: 70, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', level: 60, category: 'Framework', color: '#61DAFB' },
    { name: 'Tailwind CSS', level: 65, category: 'Framework', color: '#06B6D4' },
    { name: 'Figma', level: 65, category: 'Design', color: '#F24E1E' },
    { name: 'Git', level: 55, category: 'Tools', color: '#F05032' },
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

  const homeSections = portfolioData.sections.filter(
    (section) => section.showInHome
  );

  return {
    name: portfolioData.basicInfo.name,
    school: portfolioData.basicInfo.school,
    major: portfolioData.basicInfo.major,
    status: portfolioData.basicInfo.status,
    shortIntro: portfolioData.basicInfo.shortIntro,
    topSkills,
    homeSections,
  };
};

/**
 * 섹션 ID로 섹션 데이터를 가져오는 함수
 * @param {string} id - 섹션 ID
 * @returns {Object|null} 섹션 데이터
 */
const getSectionById = (id) => {
  return portfolioData.sections.find((section) => section.id === id) || null;
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
    getSectionById,
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
