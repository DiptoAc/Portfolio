export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              I'm a Computer Science student at <strong>Shahjalal University of Science and Technology</strong> (SUST), 
              passionate about building innovative web and mobile applications. Currently serving as <strong>Vice President 
              of the CSE Society</strong>, I lead technical initiatives for 500+ students.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              With expertise in <strong>Full-Stack Development</strong>, I've built AI-powered platforms, interactive 
              web applications, and IoT-based systems. I'm also an <strong>AI Trainer at Outlier</strong>, where I enhance 
              large language models through RLHF.
            </p>
            
            <p className="text-lg text-gray-700">
              As a competitive programmer, I've solved <strong>1500+ problems</strong> and participated as an 
              <strong> ICPC Regionalist 2025</strong>. When I'm not coding, you'll find me on the sports field - 
              I'm an active player in football, cricket, and basketball tournaments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1500+</div>
              <div className="text-gray-700">Problems Solved</div>
            </div>
            
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-700">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

