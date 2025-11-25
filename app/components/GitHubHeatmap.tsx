"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-pulse text-slate-400">Loading contribution graph...</div>
      </div>
    )
  }
);

export default function GitHubHeatmap() {
  return (
    <section id="github" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-100 mb-8 sm:mb-10 md:mb-12">
          GitHub Contributions
        </h2>
        
        <div className="flex justify-center min-w-max md:min-w-0">
          <GitHubCalendar
            username="DiptoAc"
            colorScheme="dark"
            blockSize={10}
            blockMargin={3}
            fontSize={12}
            theme={{
              light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              color: '#e2e8f0',
            }}
            labels={{
              totalCount: '{{count}} contributions in {{year}}',
            }}
          />
        </div>
      </div>
    </section>
  );
}

