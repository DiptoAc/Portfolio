export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Kotlin", "Java", "C++", "C", "React Native"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "Django", "Flask", "Tailwind CSS"],
      color: "indigo"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "Firebase", "PostgreSQL", "MongoDB"],
      color: "purple"
    },
    {
      title: "Specialized Areas",
      skills: ["Full-Stack Development", "Cloud Computing", "RESTful APIs", "Mobile Development", "DevOps", "AI/ML"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-300",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-300",
      purple: "bg-purple-100 text-purple-700 border-purple-300",
      pink: "bg-pink-100 text-pink-700 border-pink-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

