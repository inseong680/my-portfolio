import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { User, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

/**
 * AboutSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  const { getHomeData } = usePortfolio();
  const homeData = getHomeData();

  return (
    <section className="py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 md:text-3xl">
          About Me
        </h2>
        <p className="mt-2 text-muted-foreground">
          저에 대해 간단히 소개합니다
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white md:h-24 md:w-24">
              <User className="h-10 w-10 md:h-12 md:w-12" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                {homeData.name}
              </h3>
              <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  <GraduationCap className="h-3 w-3" />
                  {homeData.department}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                  <Briefcase className="h-3 w-3" />
                  {homeData.title}
                </span>
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  {homeData.level}
                </span>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {homeData.shortIntro}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:justify-end">
            <Button asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                더 알아보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
