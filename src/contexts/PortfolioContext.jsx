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
      subtitle: '생각을 현실로 만드는 코드의 매력에 빠지다',
      icon: 'BookOpen',
      content: `아무것도 없는 빈 화면에서 시작해 하나의 완성된 서비스를 만들어내는 순간, 저는 개발의 진정한 매력을 느꼈습니다.

처음 웹 개발을 접했을 때, 머릿속에만 있던 아이디어가 코드 한 줄 한 줄을 통해 실제로 동작하는 모습을 보며 전율을 느꼈습니다. 무(無)에서 유(有)를 창조하는 이 과정이 저를 개발의 세계로 이끌었습니다.

특히 사용자 경험을 개선하는 작업에 큰 보람을 느낍니다. 버튼 하나의 위치, 로딩 시간 0.1초의 차이가 사용자에게 얼마나 큰 영향을 미치는지 깨달았을 때, 저는 "디테일에 집착하는 개발자"가 되기로 결심했습니다.

사용자가 "이 서비스 정말 편하다"라고 느끼는 순간을 위해, 보이지 않는 곳에서 수많은 고민과 시행착오를 거칩니다. 그 과정 자체가 저에게는 성장이고, 즐거움입니다.

앞으로도 생각을 현실로 만드는 개발자로서, 사용자의 일상을 조금 더 편리하게 만드는 서비스를 만들어가고 싶습니다.`,
    },
    philosophy: {
      title: '개발 철학',
      subtitle: '동료의 시간을 아끼는 코드',
      icon: 'Lightbulb',
      content: `**"내가 작성한 코드는 나만 보는 것이 아니다"**

이 문장은 제가 개발할 때 항상 되새기는 원칙입니다. 좋은 코드란 단순히 동작하는 코드가 아니라, 다른 사람이 읽었을 때 쉽게 이해할 수 있는 코드라고 생각합니다.

**가독성이 최우선입니다**
변수명 하나, 함수명 하나에도 의미를 담으려 노력합니다. 6개월 후의 나 자신도, 내 코드를 처음 보는 동료도 빠르게 이해할 수 있어야 합니다. 주석보다 코드 자체가 설명이 되는 것이 이상적입니다.

**책임감 있는 개발을 추구합니다**
제가 작성한 코드가 서비스에 미치는 영향을 항상 생각합니다. "일단 돌아가니까"라는 마인드 대신, "이게 정말 최선인가?"를 끊임없이 질문합니다. 버그가 발생하면 회피하지 않고 근본 원인을 찾아 해결합니다.

**동료와의 협업을 소중히 여깁니다**
코드 리뷰를 통해 배우고, 제 의견도 적극적으로 공유합니다. 비판은 코드에 대한 것이지 사람에 대한 것이 아니라는 마음으로, 열린 자세로 소통합니다.

결국 좋은 개발자는 동료의 시간을 아껴주는 개발자라고 믿습니다.`,
    },
    personal: {
      title: '개인적인 이야기',
      subtitle: '렌즈를 통해 세상을 기록하다',
      icon: 'Heart',
      content: `개발 외에 저를 설명하는 또 다른 키워드는 바로 **사진 촬영**입니다.

**순간을 포착하는 즐거움**
카메라를 들고 거리를 걷다 보면, 평소에 스쳐 지나가던 것들이 새롭게 보입니다. 빛의 각도, 그림자의 형태, 사람들의 표정... 이런 디테일을 발견하고 프레임 안에 담는 과정이 개발에서 UI를 다듬는 것과 닮아 있다고 느낍니다.

**기록하는 습관의 힘**
사진뿐만 아니라 일상의 작은 것들도 기록하는 습관이 있습니다. 오늘 배운 것, 해결한 문제, 떠오른 아이디어를 노트에 적어둡니다. 이 습관은 개발할 때도 큰 도움이 됩니다. 과거에 겪었던 비슷한 문제의 해결책을 빠르게 찾을 수 있고, 성장 과정을 돌아볼 수 있기 때문입니다.

**관찰력이 개발에 주는 영향**
사진을 찍으면서 기른 관찰력은 사용자 경험을 설계할 때 빛을 발합니다. 사용자가 어떤 동선으로 화면을 보는지, 어떤 요소에 먼저 시선이 가는지를 자연스럽게 고민하게 됩니다.

렌즈를 통해 세상을 바라보듯, 코드를 통해 더 나은 디지털 경험을 만들어가고 있습니다.`,
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
