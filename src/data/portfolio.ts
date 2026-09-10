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
    role: 'Full-Stack Developer | Computer Science Student',
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
    title: 'Ashu Mehta | Full-Stack Developer & Computer Science Student',
    description:
      'Full-stack developer and Computer Science student building secure, scalable web applications with a focus on APIs, product thinking, and modern engineering practices.',
    // TODO: replace with the deployed site URL
    canonicalUrl: 'https://your-domain.example/',
  },

  hero: {
    eyebrow: 'Computer Science Engineering Student • Full-Stack Developer',
    heading: 'Building reliable software that solves real-world problems.',
    tagline:
      'I design and build full-stack web applications with a strong focus on scalable architecture, secure APIs, and user-centered product experiences.',
    supporting:
      'Computer Science student with practical experience in full-stack development, backend systems, cloud fundamentals, and product-oriented problem solving.',
    paragraph:
      'I am Ashu Mehta, a B.Tech Computer Science Engineering student at Chitkara University with a growing focus on full-stack product development. I enjoy building secure, maintainable applications using the MERN stack, combining clean architecture, thoughtful UX, and reliable backend systems to deliver meaningful user experiences.',
  },

  stats: [
    { value: '3+', label: 'Featured full-stack projects' },
    { value: 'MERN', label: 'Core development stack' },
    { value: '2024', label: 'Hackathon finalist' },
    { value: '2027', label: 'Expected graduation' },
  ],

  about: {
    heading: 'A developer focused on building useful, dependable software.',
    paragraphs: [
      'I enjoy turning ideas into practical software products that are secure, efficient, and easy for users to trust. My work spans responsive frontend development, RESTful backend services, authentication, payment workflows, database design, API integrations, and cloud-focused development learning.',
      'I am particularly interested in building applications that balance technical quality with real-world usability — combining strong engineering practices, clear communication, and a product mindset to create solutions that deliver value.',
    ],
    focus: [
      'Full-stack web development',
      'Backend architecture',
      'REST API design',
      'Authentication and security',
      'Database optimization',
      'Cloud and DevOps fundamentals',
      'Product-driven engineering',
      'Collaborative problem solving',
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
        'Built a complete event discovery and ticket booking workflow for users and organizers.',
        'Integrated Mapbox APIs for venue visualization and improved navigation experience.',
        'Implemented QR-based ticket generation and verification for secure event check-in.',
        'Created an organizer dashboard with booking insights and event operations visibility.',
        'Added status tracking, payment validation, and user engagement flows.',
        'Contributed to API integration and database structure design for a scalable product experience.',
        'Followed modular development practices and a clean Git-based workflow.',
        'Improved application reliability through structured routing, endpoint security, and optimized data handling.',
        'Optimized MongoDB queries with indexing to reduce response time and improve performance.',
      ],
      tags: [
        'Event Booking',
        'Role-Based Dashboard',
        'Map Integration',
        'QR Ticketing',
        'MongoDB Optimization',
        'Secure Checkout',
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
        'Built a scalable MERN application with secure JWT-based authentication and role-aware user flows.',
        'Designed collaborative group ordering using unique session codes for shared cart experiences.',
        'Enabled multiple users to contribute to a single order and manage split payment scenarios.',
        'Implemented subscription-based meal plans with flexible billing options and pay-later workflows.',
        'Developed REST APIs for authentication, cart management, order handling, and payment verification.',
        'Integrated Gemini AI for personalized food recommendations and improved user engagement.',
        'Connected Razorpay for secure payment processing and backend transaction validation.',
        'Added idempotent validation logic to prevent duplicate and failed transaction flows.',
        'Applied centralized error handling, validation, and environment-based configuration for production-minded reliability.',
      ],
      tags: [
        'Group Ordering',
        'Secure Payments',
        'Subscription Workflow',
        'REST APIs',
        'AI Recommendations',
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
        'Designed role-based dashboards for students, faculty, and administrators with clear access boundaries.',
        'Structured REST APIs with authentication, authorization, validation, and centralized error handling.',
        'Modeled academic relationships across departments, subjects, enrollments, attendance, marks, and submissions.',
        'Derived attendance percentages from records rather than storing inconsistent totals, improving reliability.',
        'Added transparent rule-based alerts for academic monitoring and performance tracking.',
        'Maintained a clean service boundary to support future ML or analytics integration without compromising current architecture.',
      ],
      tags: [
        'Academic Platform',
        'Role-Based Access',
        'Attendance Analytics',
        'REST APIs',
        'MongoDB Modeling',
        'Scalable Architecture',
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
    {
      title: 'Coursera Certificate',
      issuer: 'Coursera',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/VF9IA7X65GYO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      skills: ['Coursera', 'Professional Learning'],
      description: 'Completed a professional learning certificate from Coursera focused on applied technology skills and structured online learning.',
    },
    {
      title: 'SQL',
      issuer: 'Coursera',
      credentialUrl: 'https://coursera.org/share/f39e7de4ce4ed74bd878709343129b64',
      skills: ['SQL', 'Database Queries', 'Data Management'],
      description: 'Developed foundational SQL skills for querying, managing, and analyzing relational data.',
    },
    {
      title: 'Python Data Analytics',
      issuer: 'Coursera',
      credentialUrl: 'https://coursera.org/share/580e52c109a19857b343f19635a257c5',
      skills: ['Python', 'Data Analytics', 'Data Visualization'],
      description: 'Strengthened data analysis and visualization skills using Python for practical business and analytical workflows.',
    },
    {
      title: 'Machine Learning',
      issuer: 'Coursera',
      credentialUrl: 'https://coursera.org/share/44529eedc50622dc3e60ddfff40311d6',
      skills: ['Machine Learning', 'AI', 'Data Science'],
      description: 'Completed a Coursera machine learning course covering core ML concepts and practical implementation.',
    },
    {
      title: 'Git and GitHub',
      issuer: 'Coursera',
      credentialUrl: 'https://coursera.org/share/8873f8c6128e96a45ad55ca55164f348',
      skills: ['Git', 'GitHub', 'Version Control'],
      description: 'Completed a Coursera course covering Git fundamentals and GitHub workflows for collaboration and version control.',
    },
    {
      title: 'DevOps',
      issuer: 'Coursera',
      credentialUrl: 'https://coursera.org/share/fe95a89dbc829928d1773979afc3a035',
      skills: ['DevOps', 'CI/CD', 'Automation'],
      description: 'Completed a Coursera DevOps course focusing on automation, delivery workflows, and modern development practices.',
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
