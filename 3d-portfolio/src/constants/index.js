import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    oasis,
    
    shopingCart,
    shopify,
    Portfolio,
    MovieApps,
    tripguide,
    threejs,
    byjus,
    shopeal,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer intern",
      company_name: "Shoppeal tech",
      icon: shopeal,
      iconBg: "#383E56",
      date: "Nov 2022 - May 2023",
      points: [
        "React.js & TypeScript: Developed web apps with React.js andTypeScript.",
        "State Management & Testing: Used Redux for statemanagement; tested with Jest and Enzyme.",
        "Collaboration & Optimization: Created responsive interfaces,optimized performance, and fixed usability issues.",
        "Collaborated with UX/UI designers to implement responsive and user-friendly interfaces.",
        "Worked with senior developers to optimize and enhance website performance.",
      ],
    },
    {
      title: "Front-end Developer intern",
      company_name: "Oasis Info Byte",
      icon: oasis,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - march 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Business Development Associate",
      company_name: "Byjus",
      icon:byjus,
      iconBg: "#E6DEDD",
      date: "| Oct 2020-Aug-2022",
      points: [
        "Successfully generated and converted leads through strategic outreach, contributing to a 20% increase in monthly sales.",
        "Conducted detailed product demonstrations and consultations, building strong customer relationships and enhancing product engagement.",
        "Communicate with stakeholders, providing guidance and highlighting any updates to the Lead/Manager.",
        "Delivered high-impact product presentations to parents and students, effectively communicating.",
        "Exceeded sales targets by consistently achieving 120%+ of monthly quotas through effective client engagement and personalized sales approaches.Develop protocols aimed at identifying and mitigating potential risks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Shoppeal Tech",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shopping Cart",
      description:
        "I built a shopping cart app using ReactJS, Rapid API, and Tailwind CSS. Users can add products to a wishlist, and the app dynamically calculates the total value of the wishlist. The combination of these technologies provides a seamless, responsive experience with real-time data fetching and intuitive design..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shopingCart,
      source_code_link: "https://app.netlify.com/sites/sweet-bienenstitch-767941/overview",
    },
    {
      name: "3-D Portfolio",
      description:
        "I created a 3D portfolio using ReactJS for interactive components, Tailwind CSS for responsive styling, and Three.js to add dynamic 3D visual elements. It offers an immersive user experience with smooth navigation and eye-catching 3D effects. The portfolio is designed to showcase both functionality and creativity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://new-portfolio-kohl-six.vercel.app/",
    },
    {
      name: "Movie Apps",
      description:
        "I created a movie app where users can search for movies, add or remove movies from their favorites, and manage a watchlist for future viewing. The app offers a smooth, intuitive interface that allows users to explore a wide range of movies, view details, and keep track of their personal preferences. With features like sorting by genre and ratings .",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "green-text-gradient",
        },
        {
          name: "ContextAPI",
          color: "pink-text-gradient",
        },
      ],
      image: MovieApps,
      source_code_link: "https://sensational-meringue-e39caf.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects }; 