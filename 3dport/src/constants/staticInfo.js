export const navLinks = [
    {
        id:1,
        name:'Home',
        href: '#Hero',
    },
    {
        id:2,
        name: 'About',
        href: '#about',
    },
    {
        id:3,
        name: 'Projects',
        href: '#MyProjects',
    },
    {
        id:4,
        name: 'Contact',
        href:  '#contact'
    }
]

export const myProjects = [
    {
        title: 'Bike Akinator - Motorcycle Finder Platform',
        desc: 'Bike Akinator is a website that helps users find the right next bike for them. My website guides users through a quiz that narrows down their options and then presents the top rated options as links to their stat pages. All stats come from user data found via the internet or from users themselves inputing information on their profiles. And then lastly this website is 100% supported by the cloud as an AWS Amplify projects that utilizes several other Amazon services. ',
        href: 'https://master.d3ao0vrc5bac3j.amplifyapp.com/',
        className:'animatedText1',
        texture:'/textures/project/project1.mp4',
        logo: '/assets/motor-logo.svg',
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
            {
              id: 4,
              name: 'Framer Motion',
              path: '/assets/aws.svg',
            },
          ],
    },
    {
        title: 'LocalLyfe - Community Improvement App',
        desc: 'LocalLyfe is mobile app with the aim to empower users with the ability to make change in their local cities/towns. The process today for affecting city development usually comes in the form of city hall meetings or social media campaigns on popular apps. We believe these methods are outdated or filtered out by the other clutter on social media apps. LocalLyfe provides a dedicated space where users can interact with only people form their cities to exchange and improve ideas they have to shape their city.',
        href: 'None',
        className:'animatedText1',
        texture:'/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: 'rgba(61, 168, 175, 0.3)',
            border: '0.2px solid rgba(61, 168, 175, 0.3)',
            boxShadow: '0px 0px 60px 0px rgba(61, 168, 175, 0.3)',
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
              path: 'assets/expo.svg',
            },
            {
              id: 3,
              name: 'TypeScript',
              path: '/assets/typescript.png',
            },
            {
              id: 4,
              name: 'Framer Motion',
              path: '/assets/firebase.svg',
            },
          ],
    }
]

export const myExperiences = [
  {
    id:1,
    name:'3D Portfolio Website',
    skill:'ReactJS + ThreeJS Programming',
    duration:'Feb 2025 - Mar 2025',
    title:'Created a ReactJS portfolio website with the the help of ThreeJS 3D modeling',
    icon: '/assets/Three.js_Icon.png',
    animation: 'victory'
  },
  {
    id:2,
    name:'Bike Akinator',
    skill:'AWS Cloud Services + React Typescript',
    duration:'Nov 2024 - Jan 2025',
    title:'A fully cloud supported React website that supports users in finding the right motorcycle',
    icon:'/assets/motor-logo.svg',
    animation:'salute'
  },
  {
    id:3,
    name:'Revature Backend Bootcamp',
    skill:' Spring + SQL + Backend Development',
    duration: 'Nov 2024 - Nov 2024',
    title: 'Completed an online bootcamp with Revature and learned about Java backend development utilizing the Spring framework',
    icon: '/assets/revature-logo.png',
    animation:'clapping'
  },
  {
    id:4,
    name:'AWS Cloud Practitioner',
    skill:'AWS Cloud Services',
    duration:'Oct 2024 - Oct 2024',
    title: 'Completed an online course via ZeroToMastery that taught about utilizing AWS Cloud Services to support projects and businesses',
    icon: '/assets/aws.svg',
    animation:'salute'
  },
  {
    id:5,
    name:'Linux System Administration',
    skill:'Linux Terminal + Bash',
    duration:'Sept 2024 - Sept 2024',
    title: 'Took an online course via ZeroToMastery that taught the fundamentals of utilizing the Linux console to manage the system',
    icon: '/assets/bash-icon.svg',
    animation:'clapping'
  },
  {
    id:6,
    name:'COMPTIA A+ IT',
    skill:'Networks + Desktop Configuration + Hardware Troubleshooting',
    duration:'July 2024 - August 2025',
    title: 'Completed an online course that prepped me with knowledge to take and pass the COMPTIA A+ exam for general IT knowledge',
    icon: '/assets/CompTIA-A.jpg',
    animation:'victory'
  
  }


]