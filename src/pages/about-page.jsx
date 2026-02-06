import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { User, GraduationCap, Briefcase, BookOpen, Lightbulb, Heart } from 'lucide-react';

/**
 * ProfileCard 컴포넌트
 *
 * Props:
 * @param {Object} basicInfo - 기본 정보 객체 [Required]
 *
 * Example usage:
 * <ProfileCard basicInfo={basicInfo} />
 */
function ProfileCard({ basicInfo }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white md:h-32 md:w-32">
            <User className="h-12 w-12 md:h-16 md:w-16" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-blue-900 md:text-3xl">
              {basicInfo.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{basicInfo.nameEn}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                <GraduationCap className="h-4 w-4" />
                {basicInfo.department}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                <Briefcase className="h-4 w-4" />
                {basicInfo.title}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {basicInfo.level}
              </span>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {basicInfo.fullIntro}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * TabButton 컴포넌트
 *
 * Props:
 * @param {boolean} isActive - 활성화 여부 [Required]
 * @param {function} onClick - 클릭 핸들러 [Required]
 * @param {ReactNode} icon - 아이콘 컴포넌트 [Required]
 * @param {string} label - 버튼 라벨 [Required]
 *
 * Example usage:
 * <TabButton isActive={true} onClick={handleClick} icon={<BookOpen />} label="스토리" />
 */
function TabButton({ isActive, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
        isActive
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

/**
 * TabContent 컴포넌트
 *
 * Props:
 * @param {Object} section - 섹션 데이터 [Required]
 *
 * Example usage:
 * <TabContent section={sections.story} />
 */
function TabContent({ section }) {
  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-900">{section.title}</h3>
          {section.subtitle && (
            <p className="mt-1 text-sm font-medium text-purple-600 italic">
              "{section.subtitle}"
            </p>
          )}
        </div>
        <div className="prose prose-gray max-w-none">
          {section.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * SkillBar 컴포넌트
 *
 * Props:
 * @param {Object} skill - 스킬 데이터 [Required]
 * @param {number} delay - 애니메이션 딜레이 (ms) [Optional, 기본값: 0]
 *
 * Example usage:
 * <SkillBar skill={{ name: 'React', level: 85, color: '#61DAFB' }} delay={100} />
 */
function SkillBar({ skill, delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: skill.color,
          }}
        />
      </div>
    </div>
  );
}

/**
 * SkillsSection 컴포넌트
 *
 * Props:
 * @param {Array} skills - 스킬 배열 [Required]
 *
 * Example usage:
 * <SkillsSection skills={skills} />
 */
function SkillsSection({ skills }) {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-blue-900">Skills</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {category}
              </h4>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={index * 150}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * AboutPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  const { basicInfo, sections, skills } = usePortfolio();
  const [activeTab, setActiveTab] = useState('story');

  const iconMap = {
    BookOpen: <BookOpen className="h-4 w-4" />,
    Lightbulb: <Lightbulb className="h-4 w-4" />,
    Heart: <Heart className="h-4 w-4" />,
  };

  const tabs = [
    { key: 'story', label: '나의 개발 스토리', icon: iconMap.BookOpen },
    { key: 'philosophy', label: '개발 철학', icon: iconMap.Lightbulb },
    { key: 'personal', label: '개인적인 이야기', icon: iconMap.Heart },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8">
        <ProfileCard basicInfo={basicInfo} />

        <div className="space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <TabButton
                key={tab.key}
                isActive={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                icon={tab.icon}
                label={tab.label}
              />
            ))}
          </div>
          <TabContent section={sections[activeTab]} />
        </div>

        <SkillsSection skills={skills} />
      </div>
    </div>
  );
}

export default AboutPage;
