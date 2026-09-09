/**
 * Central content file for the portfolio.
 *
 * Replace placeholder URLs (`#`) with real links before publishing.
 * Placeholder fields are never rendered as working links in the UI.
 *
 * WHERE TO UPDATE:
 * - Resume: personal.resumeUrl
 * - GitHub / LinkedIn / LeetCode: personal.githubUrl, linkedinUrl, leetcodeUrl
 * - Project GitHub + live demos: projects[].githubUrl, projects[].liveUrl
 * - Certifications: add another object to `certifications` (see comment below)
 * - Canonical site URL: also update index.html (og:url / canonical)
 */

export type ProjectCategory =
  | 'Full Stack'
  | 'Backend'
  | 'APIs'
  | 'Payments'
  | 'Cloud'

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  role?: string
  technologies: string[]
  highlights: string[]
  tags: string[]
  categories: ProjectCategory[]
  challenge: string
  engineeringResponse: string
  /** Insert the real repository URL. Keep "#" until available. */
  githubUrl: string
  /** Insert the real live demo URL. Keep "#" until available. */
  liveUrl: string
  featured: boolean
}

export interface Certification {
  title: string
  issuer: string
  issueDate?: string
  expiryDate?: string
  credentialId?: string
  /** Insert a real verification URL. Keep "#" until available. */
  credentialUrl?: string
  /** Path under /public or an absolute URL to a PDF/image. Empty = no preview. */
  certificateFile?: string
  description?: string
  skills?: string[]
  logo?: string
}

export interface Achievement {
  year: string
  title: string
  organization: string
  detail: string
  proofUrl?: string
}

export interface LeadershipRole {
  organization: string
  role: string
  description: string
}

export interface EducationItem {
  title: string
  institution: string
  period: string
  detail?: string
}

export const socialPlaceholders = {
  linkedinUrl: 'https://www.linkedin.com/in/ashu-mehta-a664052b2/',
  githubUrl: 'https://github.com/ashumehta18',
  leetcodeUrl: 'https://leetcode.com/u/Ashu_129/',
  resumeUrl: '#',
} as const

export const portfolioData = {
  personal: {
    name: 'Ashu Mehta',
    role: 'Full-Stack Developer',
    email: 'ashu.2005.mehta@gmail.com',
    phone: '+91-7082162638',
    location: 'Haryana, India',
    degree: 'B.Tech in Computer Science and Engineering',
    university: 'Chitkara University, Punjab',
    educationPeriod: '2023–2027',
    // TODO: replace "#" with your real profile URLs
    linkedinUrl: socialPlaceholders.linkedinUrl,
    githubUrl: socialPlaceholders.githubUrl,
    leetcodeUrl: socialPlaceholders.leetcodeUrl,
    resumeUrl: socialPlaceholders.resumeUrl,
  },

  seo: {
    title: 'Ashu Mehta | Full-Stack Developer',
    description:
      'Portfolio of Ashu Mehta, a Computer Science Engineering student and full-stack developer building secure, scalable web applications with the MERN stack.',
    // TODO: replace with the deployed site URL
    canonicalUrl: 'https://your-domain.example/',
  },

  hero: {
    eyebrow: 'Computer Science Engineering Student • Full-Stack Developer',
    heading: 'Building secure, scalable web experiences.',
    tagline: 'Building secure, scalable, and user-focused web applications with the MERN stack.',
    supporting:
      'Computer Science Engineering student interested in full-stack development, backend engineering, cloud technologies, and real-world product development.',
    paragraph:
      'I’m Ashu Mehta, a B.Tech Computer Science Engineering student at Chitkara University. I build full-stack applications with the MERN stack, focusing on clean architecture, secure APIs, thoughtful user experiences, and real-world product workflows.',
  },

  stats: [
    { value: '3', label: 'Featured full-stack projects' },
    { value: 'MERN', label: 'Primary development stack' },
    { value: '2024', label: 'Hackathon finalist' },
    { value: '2027', label: 'Expected graduation' },
  ],

  about: {
    heading: 'A developer focused on useful engineering.',
    paragraphs: [
      'I enjoy turning complex product requirements into practical software systems. My work spans responsive frontend interfaces, RESTful backend services, authentication, payment verification, database design, third-party API integrations, and cloud fundamentals.',
      'I am particularly interested in building applications that are reliable, secure, maintainable, and easy for users to understand.',
    ],
    focus: [
      'MERN full-stack development',
      'Secure authentication',
      'REST API design',
      'Payment workflows',
      'Database optimization',
      'Cloud and DevOps fundamentals',
      'Real-world problem solving',
      'Team collaboration',
    ],
    cards: [
      {
        title: 'Product Thinking',
        body: 'Building features around real user workflows.',
      },
      {
        title: 'Backend Focus',
        body: 'APIs, validation, authentication, payments, and data modeling.',
      },
      {
        title: 'Continuous Learning',
        body: 'Strengthening computer science fundamentals and modern development practices.',
      },
      {
        title: 'Team Collaboration',
        body: 'Git workflows, event coordination, and student community leadership.',
      },
    ],
  },

  skillGroups: [
    {
      id: 'languages',
      title: 'Languages',
      items: ['Java', 'C++', 'Python', 'JavaScript'],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      id: 'backend',
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    },
    {
      id: 'databases',
      title: 'Databases',
      items: ['MongoDB', 'MySQL'],
    },
    {
      id: 'cloud',
      title: 'Cloud and DevOps',
      items: [
        'AWS EC2',
        'AWS S3',
        'AWS RDS',
        'AWS Lambda',
        'AWS VPC',
        'Docker',
        'Linux',
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'Jira'],
    },
    {
      id: 'cs',
      title: 'Core Computer Science',
      items: [
        'Object-Oriented Programming',
        'Data Structures and Algorithms',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ],

  /**
   * TypeScript is used to implement this portfolio site.
   * It is labeled separately so it is not presented as a resume skill.
   */
  portfolioOnlyTech: ['TypeScript', 'Vite', 'Tailwind CSS'],

  projectFilters: [
    'All',
    'Full Stack',
    'Backend',
    'APIs',
    'Payments',
    'Cloud',
  ] as const,

  projects: [
    {
      id: 'eventra',
      name: 'Eventra',
      subtitle: 'Online Event Ticket Booking Platform',
      description:
        'A full-stack event discovery and ticket booking platform with an end-to-end booking workflow for attendees and organizers.',
      role: 'API Integration & Organizer Dashboard',
      technologies: ['MERN', 'JWT', 'Mapbox API', 'QR Ticket API', 'MongoDB'],
      highlights: [
        'Built an event discovery and ticket booking workflow.',
        'Integrated Mapbox API for venue rendering and interactive navigation.',
        'Implemented QR-based ticket generation and verification for secure check-in.',
        'Built an organizer dashboard with booking analytics.',
        'Added order status, payment validation, and user engagement tracking.',
        'Contributed to API integration and database schema design.',
        'Used modular development practices and Git workflow.',
        'Improved reliability through structured routing, secure endpoints, and optimized data handling.',
        'Optimized MongoDB queries using indexing to reduce API response time.',
      ],
      tags: [
        'Booking workflow',
        'Role-based dashboard',
        'API integration',
        'QR verification',
        'MongoDB indexing',
        'Secure endpoints',
      ],
      categories: ['Full Stack', 'Backend', 'APIs'],
      challenge:
        'Supporting a reliable booking and check-in workflow across users, organizers, payments, and QR-based verification.',
      engineeringResponse:
        'Separated routing and validation concerns, added secure endpoints, optimized database access, and designed organizer-facing analytics.',
      githubUrl: 'https://github.com/ashumehta18/FreshRush',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 'freshrush',
      name: 'FreshRush',
      subtitle: 'Healthy Food Ordering Platform',
      description:
        'A full-stack food ordering platform featuring group ordering, split payments, subscriptions, pay-later workflows, and AI-powered food recommendations.',
      role: 'Full-stack development',
      technologies: ['MERN', 'JWT', 'Razorpay', 'Gemini API', 'MongoDB'],
      highlights: [
        'Built a scalable MERN application with secure JWT-based authentication.',
        'Designed collaborative group ordering using unique session codes.',
        'Enabled multiple users to contribute to a shared cart.',
        'Implemented split-bill payments.',
        'Built meal subscription workflows for 7, 15, and 30-day plans.',
        'Added pay-later workflows with monthly payment consolidation.',
        'Developed REST APIs for authentication, cart management, order lifecycle, and payment verification.',
        'Integrated Gemini API for AI-powered food recommendations.',
        'Integrated Razorpay with backend payment verification.',
        'Added idempotent validation logic to prevent duplicate or failed transactions.',
        'Applied centralized error handling, input validation, and environment-based configuration.',
      ],
      tags: [
        'Group ordering',
        'Payment verification',
        'Idempotency',
        'Subscription workflows',
        'REST APIs',
        'AI integration',
        'Authentication',
      ],
      categories: ['Full Stack', 'Backend', 'APIs', 'Payments'],
      challenge:
        'Managing shared carts and reliable payment workflows for multiple users.',
      engineeringResponse:
        'Used session-based group ordering, backend payment verification, idempotent validation, centralized error handling, and structured order lifecycle APIs.',
      githubUrl: 'https://github.com/ashumehta18/CampusIQ',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 'campusiq',
      name: 'CampusIQ',
      subtitle: 'University Academic Management Platform',
      description:
        'A production-style MERN platform for managing students, faculty, subjects, attendance, assessments, assignments, notifications, and academic analytics.',
      role: 'Full-stack development',
      technologies: ['MERN', 'React Router', 'Axios', 'JWT', 'MongoDB', 'Recharts'],
      highlights: [
        'Designed role-based dashboards for students, faculty, and administrators.',
        'Structured REST APIs with authentication, authorization, validation, and centralized error handling.',
        'Modeled academic relationships across departments, subjects, enrollments, attendance, marks, and submissions.',
        'Derived attendance percentages from attendance records instead of storing unreliable totals.',
        'Added transparent rule-based attendance and performance alerts for academic monitoring.',
        'Kept a clean service boundary for future ML integration without implementing predictions yet.',
      ],
      tags: [
        'Role-based access',
        'Academic analytics',
        'Attendance tracking',
        'REST APIs',
        'MongoDB relationships',
        'Future ML-ready architecture',
      ],
      categories: ['Full Stack', 'Backend', 'APIs', 'Cloud'],
      challenge:
        'Building a maintainable academic system that supports three user roles without mixing current rule-based analytics with future ML predictions.',
      engineeringResponse:
        'Separated frontend, API, database, and service responsibilities, with reusable React views, protected Express routes, referenced MongoDB models, and an explicit future prediction-service boundary.',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
  ] satisfies Project[],

  /**
   * Add a certification by inserting another object:
   * {
   *   title: "Certificate name",
   *   issuer: "Organization",
   *   issueDate: "2025",
   *   credentialUrl: "https://...",
   *   certificateFile: "/certificates/name.pdf",
   *   skills: ["Skill A", "Skill B"],
   * }
   */
  certifications: [
    {
      title: 'IBM Certified: Introduction to DevOps',
      issuer: 'IBM',
      issueDate: undefined,
      credentialUrl: '#',
      certificateFile: '',
      skills: ['DevOps'],
      description: 'Foundational certification covering DevOps concepts and practices.',
    },
  ] satisfies Certification[],

  achievements: [
    {
      year: '2024',
      title: 'Finalist',
      organization: 'Somnium Hackathon',
      detail: 'Selected as a finalist for Somnium Hackathon 2024.',
    },
    {
      year: '2024',
      title: 'Top 50',
      organization: 'Hack With Her',
      detail: 'Placed in the top 50 among 350+ teams.',
    },
    {
      year: 'Certification',
      title: 'Introduction to DevOps',
      organization: 'IBM',
      detail: 'IBM Certified: Introduction to DevOps.',
    },
  ] satisfies Achievement[],

  leadership: [
    {
      organization: 'GeeksforGeeks Student Chapter',
      role: 'Marketing Team Leader',
      description:
        'Organized technical hackathons and collaborated with development teams.',
    },
    {
      organization: 'Anveshan – AIU National Convention',
      role: 'Student Coordinator',
      description:
        'Coordinated national-level research and innovation events.',
    },
  ] satisfies LeadershipRole[],

  education: [
    {
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Chitkara University, Punjab',
      period: '2023–2027',
    },
    {
      title: 'Class XII — Higher Secondary',
      institution: 'Satluj Public School, Sirsa — CBSE',
      period: '2022–2023',
    },
    {
      title: 'Class X — Secondary',
      institution: 'Satluj Public School, Sirsa — CBSE',
      period: '2020–2021',
    },
  ] satisfies EducationItem[],

  contact: {
    heading: 'Have a product, problem, or opportunity in mind?',
    supporting:
      'I’m open to conversations about software engineering opportunities, internships, full-stack development, and interesting technical projects.',
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ],
}

export type PortfolioData = typeof portfolioData
