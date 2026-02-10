export interface Project {
  title: string;
  color?: string; 
  image?: string;
  description: string;
  fullDescription?: string;
  tech: string[];
  github: string | null;
  live: string | null;
  highlights?: string[];
  customRoute?: string;
}

export const projects: Project[] = [
  {
      title: "EcoNest – Employee Management Service",
      image: "/Images/Econest.png",
      color: "border-t-emerald-500", // Emerald/Green for EcoNest
      description: "Developed an RBAC office management system with 6 different roles. Cross-platform access on phones, tablets, and computers for modern hybrid workplace.",
      fullDescription: "A comprehensive employee management system with Role-Based Access Control (RBAC) featuring 6 distinct user roles. The system provides seamless cross-platform access across phones, tablets, and computers, making it ideal for modern hybrid workplaces. Features include hybrid manual/AI operations and dynamic, shareable table architecture with secure user permissions.",
      tech: ["React Native", "PostgreSQL", "Supabase", "Expo", "JavaScript"],
      github: "https://github.com/Brikkhobondhon/EcoNest",
      live: null,
      highlights: [
        "6 different role-based access levels",
        "Cross-platform compatibility (mobile, tablet, desktop)",
        "Hybrid manual/AI operations",
        "Secure user permission system",
        "Real-time data synchronization"
      ]
    },
    {
      title: "AttManager App: Attendance Management System",
      image: "/Images/AttManager.png",
      color: "border-t-sky-500", // Sky Blue for a professional tool
      description: "Implemented robust core application logic and attendance management using Kotlin. Designed responsive, native UI/UX layouts for Android devices.",
      fullDescription: "A native Android application built with Kotlin that streamlines attendance management. Features robust core application logic, responsive UI/UX design using XML, and local data persistence for offline functionality and stability.",
      tech: ["Kotlin", "Android Studio", "XML"],
      github: "https://github.com/DiptoAc/Android_App_Kt",
      live: null,
      highlights: [
        "Native Android development with Kotlin",
        "Responsive UI/UX with XML layouts",
        "Local data persistence",
        "Offline functionality",
        "Material Design implementation"
      ]
    },
    {
      title: "Professional Employee Directory",
      image: "/Images/EmpDir.png",
      color: "border-t-indigo-500",
      description: "Complete management system featuring CRUD operations and robust data persistence using local SQLite. Professional UI/UX with form validation and confirmation dialogs.",
      fullDescription: "A cross-platform mobile application built with React Native and Expo, featuring complete CRUD operations and robust local data persistence using SQLite. The app includes professional UI/UX design, comprehensive form validation, and confirmation dialogs to ensure data safety and integrity.",
      tech: ["React Native", "TypeScript", "Expo", "SQLite"],
      github: "https://github.com/DiptoAc/Mock_App",
      live: null,
      highlights: [
        "Full CRUD operations",
        "SQLite local database",
        "Form validation",
        "Confirmation dialogs for data safety",
        "Cross-platform (iOS & Android)"
      ]
    },
    {
      title: "Traffic Violation Detection System",
      image: "/Images/IoT.png",
      color: "border-t-orange-500",
      description: "Automated traffic violation detection using Arduino UNO, ESP32-CAM, and ultrasonic sensors. Real-time image capture to Telegram bot with 95%+ accuracy.",
      fullDescription: "An IoT-based smart monitoring system for automated traffic violation detection. Uses Arduino UNO, ESP32-CAM, and ultrasonic sensors (HC-SR04) to detect violations in real-time. Features intelligent traffic light control with automated interval management, Wi-Fi connectivity for cloud communication, and instant image transmission to Telegram bot with 95%+ reliability.",
      tech: ["Arduino", "ESP32-CAM", "C++", "IoT", "Telegram API"],
      github: "https://github.com/rayhanulamint2/Traffic-Violation-Detection-System",
      live: "/Microprocessor",
      customRoute: "/Microprocessor", 
      highlights: [
        "95%+ detection accuracy",
        "Real-time image capture",
        "Automated traffic light control",
        "Wi-Fi cloud communication",
        "Instant Telegram notifications"
      ]
    },
    {
      title: "Professional Engineer Portfolio",
      image: "/Images/Portfolio.png",
      color: "border-t-fuchsia-500",
      description: "A high-performance personal brand platform featuring glassmorphism design, interactive 3D-style carousels, and automated WhatsApp/Email integration for lead generation.",
      fullDescription: "A premium, dark-themed portfolio developed for an Executive Support Engineer. The project focuses on high-end UI/UX using Framer Motion for smooth transitions, a custom-built 3D-style rotating photo gallery, and direct lead generation tools via WhatsApp and Gmail API integration. It's fully responsive and optimized for rapid loading on Vercel.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/DiptoAc/Rahul-s-Portfolio",
      live: "https://rahulchandradey.vercel.app/",
      highlights: [
        "Interactive 3D-style Photo Carousel",
        "Automated Lead Generation via WhatsApp/Email",
        "Sophisticated Glassmorphism UI",
        "Dynamic Certificate & Experience Timeline",
        "SEO Optimized & Fully Responsive Design"
      ]
    },

];