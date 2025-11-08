export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Sudipto Acharjee</p>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/DiptoAc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sudipto-acharjee-036179315/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sudipto64.sust@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sudipto Acharjee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

