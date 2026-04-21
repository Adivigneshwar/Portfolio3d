export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Lost & Found AI - Smart Item Verification System',
    desc: 'Lost & Found AI is a data-driven platform that enhances lost item recovery through AI-based image processing and intelligent description generation. It enables efficient matching between found items and user-reported data using a scoring mechanism.',
    subdesc: 'Developed with Django, React, and MySQL, the system integrates backend processing, database management, and matching algorithms to deliver a secure, scalable, and real-world problem-solving solution.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      
    ],
  },
  {
   title: 'CampusFlow - Real-Time Bus Tracking System',
desc: 'CampusFlow Bus Tracking is an intelligent web-based system that provides real-time monitoring of campus transportation. It enables students to track live bus locations, view routes, and receive instant updates, ensuring a seamless and reliable commuting experience across the campus.',
subdesc:
  'With CampusFlow, users can eliminate uncertainty in transportation through accurate GPS-based tracking, real-time notifications, and dynamic route management. Built with modern web technologies and real-time database integration, it ensures efficient communication between students and transport administrators without delays.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'TurfPro - Intelligent Turf Booking Platform',
desc: 'TurfPro is a full-stack web application that automates turf reservations and streamlines booking operations. It allows users to check availability, book slots in real time, and provides administrators with powerful tools for managing schedules and transactions.',
subdesc:
  'Developed using Django, React, and MySQL, the platform features real-time updates, dynamic dashboards, and efficient backend systems to enhance user experience and optimize booking management processes.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'EduShare - Intelligent Academic Resource Hub',
desc: 'EduShare is a full-stack platform designed to streamline the sharing and management of college notes and academic resources. It enables students to easily upload, browse, and access study materials categorized by subjects and courses.',
subdesc:
  'Built with Django, React, and MySQL, the system offers efficient data organization, secure file handling, and responsive dashboards, improving collaboration and accessibility of academic content across the campus.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.5 : isMobile ? 0.6 : isTablet ? 0.65 : 0.75,
    deskPosition: isSmall ? [0.2, -3.5, -2.5] : isMobile ? [0.2, -3.0, -2.2] : isTablet ? [1.2, -2.5, -1.8] : [1.9, -2.25, -1.5],
    cubePosition: isSmall ? [4, -4, 0] : isMobile ? [5, -4.5, 0] : isTablet ? [6, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 2.5, 0] : isMobile ? [4, 3, 0] : isTablet ? [6, 4, 0] : [8, 3, 0],
    ringPosition: isSmall ? [-4, 3.5, 0] : isMobile ? [-6, 4, 0] : isTablet ? [-8, 6, 0] : [-15, 7, 0],
    targetPosition: isSmall ? [-4, -7, -10] : isMobile ? [-6, -7, -10] : isTablet ? [-8, -7, -10] : [-11, -9, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Nex Jire Solutions',
    pos: 'Project Head',
    duration: '2025 - Present',
    title: "As Project Head, I manage end-to-end project workflows—bridging design and development, guiding teams, and delivering scalable solutions with a strong focus on usability and performance.",
    icon: '/assets/nx.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Muonium AI',
    pos: 'Intern',
    duration: '2025 - Present',
    title: "As an intern at Muonium AI, I use Figma to collaborate with teams and clients, enabling real-time feedback, rapid design iterations, and efficient handoff for development.",
    icon: '/assets/mn.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'GDSC',
    pos: 'Designer',
    duration: '2019 - 2020',
    title: "Contributed as a designer for the GDSC club by creating visually engaging designs that enhanced events and student outreach.",
    icon: '/assets/gd.png',
    animation: 'salute',
  },
];