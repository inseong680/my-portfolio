import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ArrowRight } from 'lucide-react';

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
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
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
 * SkillSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillSection />
 */
function SkillSection() {
  const { getHomeData } = usePortfolio();
  const homeData = getHomeData();

  return (
    <section className="py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 md:text-3xl">
          Top Skills
        </h2>
        <p className="mt-2 text-muted-foreground">
          가장 자신 있는 기술 스택입니다
        </p>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {homeData.topSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 200} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                전체 스킬 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default SkillSection;
