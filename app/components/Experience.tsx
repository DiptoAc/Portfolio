export default function Experience() {
  const experiences = [
    {
      title: "Vice President",
      organization: "CSE Society, SUST",
      period: "July 2025 - Present",
      description: "Leading technical workshops, seminars, and hackathons for 500+ computer science students.",
      type: "leadership"
    },
    {
      title: "AI Trainer",
      organization: "Outlier (Formerly Remotask)",
      period: "2024 - Present",
      description: "Analyzing limitations of LLMs like Gemini and Imagen. Enhancing LLM capabilities through RHFL by improving code generation, decision-making, and response quality.",
      type: "work"
    },
    {
      title: "Campus Manager",
      organization: "UIHP (World Bank Funded)",
      period: "November 2024 - April 2025",
      description: "Managed campus-wide initiatives and coordinated with university administration and ambassadors for smooth event execution.",
      type: "leadership"
    },
    {
      title: "Competitive Programming",
      organization: "Self-Directed Learning",
      period: "2022 - Present",
      description: "Solved 1500+ problems on Codeforces, CodeChef, and LeetCode. ICPC Regionalist 2025.",
      type: "education"
    }
  ];

  const certifications = [
    {
      name: "Supervised Machine Learning",
      issuer: "Stanford University, Coursera"
    },
    {
      name: "React 18 for Beginners",
      issuer: "CodeWithMosh"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      leadership: "bg-purple-100 border-purple-300 text-purple-700",
      work: "bg-blue-100 border-blue-300 text-blue-700",
      education: "bg-green-100 border-green-300 text-green-700"
    };
    return colors[type as keyof typeof colors] || colors.work;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience & Leadership
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${getTypeColor(exp.type)}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-600 italic">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-blue-600 font-medium mb-3">
                  {exp.organization}
                </p>
                <p className="text-gray-700">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">{cert.name}</p>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sports & Extracurricular
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Represented CSE Department in football and cricket tournaments</li>
              <li>• Winning member of Interdepartment Basketball Tournament 2024</li>
              <li>• Active in university sports fostering teamwork and leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

