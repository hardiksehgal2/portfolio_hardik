import { links } from "@/config";
import { ReactElement } from "react";
export const navItems: {
  name: string;
  link: string;
  icon?: ReactElement;
}[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building scalable and high-performance applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experience in React.js, Flutter, and Next.js",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Software Engineer passionate about problem-solving",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Developed AI-powered auditing platform at IAI Solutions",
    description: "Built entire Fullstack Website using Next.js, TypeScript, and React",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build something innovative together!",
    description: "Open to collaborations on AI, web, and mobile applications",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;
// skills.ts
// skills.ts
export const skills = [
  { id: 1, name: "TypeScript", icon: "/ts.svg", color: "#3178C6", bgColor:"#001528" },
  { id: 2, name: "React.js", icon: "/re.svg", color: "#61DAFB", bgColor:"#001528" },
  { id: 3, name: "Next.js", icon: "/next.svg", color: "#000000", bgColor:"#001528" },
  { id: 4, name: "Flutter", icon: "/flutter.svg", color: "#02569B", bgColor:"#001528" },
  { id: 5, name: "Node.js", icon: "/node.svg", color: "#339933", bgColor:"#001528" },
  { id: 6, name: "Tailwind CSS", icon: "/tail.svg", color: "#06B6D4", bgColor:"#001528" },
  { id: 7, name: "MongoDB", icon: "/mongo.svg", color: "#47A248", bgColor:"#001528" },
  { id: 9, name: "Git", icon: "/git.svg", color: "#F05032", bgColor:"#001528" },
  { id: 10, name: "Docker", icon: "/docker.svg", color: "#2496ED", bgColor:"#001528" },
  { id: 11, name: "Dart", icon: "/dart.svg", color: "#0175C2", bgColor:"#001528" },
] as const;

export const projects = [
  {
    id: 1,
    title: "IAI-Solution Job & Blog Platform",
    des: "Designed and developed the entire frontend and backend of a job and blog platform. Features include job listings, job applications, blogs, an admin dashboard with special privileges for company members and admins.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/docker.svg"],
    link: "https://iai-solution.netlify.app",
    sourceCode: "https://github.com/sanidhyy/iai-solution",
  },
  {
    id: 2,
    title: "AI Audit - AI-powered Auditing Platform",
    des: "Built the complete frontend using React and TypeScript in Next.js. Implemented SSR, dark mode, responsiveness, and seamless API integration, enhancing usability and performance by 25%.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/docker.svg", "/git.svg"],
    link: "/#projects",
    sourceCode: "/#projects",
  },
  {
    id: 3,
    title: "Reels-Pro - AI-powered Reels Platform",
    des: "A full-stack Next.js application where users can upload reels, view all reels, and authenticate using Auth.js. Integrated a secure backend with Firebase and Stripe for payments.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/authjs.png", "/mongo.svg"],
    link: "https://github.com/hardiksehgal2/Reels-Pro",
    sourceCode: "https://github.com/hardiksehgal2/Reels-Pro",
},

  {
    id: 4,
    title: "Empower Her - Women Safety App",
    des: "Built a real-time safety app using Flutter and Firebase. Features include live location sharing, parent-child chat, shake-to-alert emergency functionality, and integration with emergency services.",
    img: "/p4.svg",
    iconLists: ["/flutter.svg", "/dart.svg", "/mongo.svg"],
    link: "https://empower-her.netlify.app",
    sourceCode: "https://github.com/sanidhyy/empower-her",
  },
] as const;


export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full Stack App Developer",
    desc: "Developed and maintained both frontend and backend applications using Next.js, TypeScript, and Node.js. Designed scalable architectures and optimized API performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Implemented SSR, dark mode, responsiveness, and seamless API integration using React.js and Next.js, improving performance and usability.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    desc: "Built and deployed cross-platform mobile applications using Flutter and Dart. Integrated APIs and optimized app performance with state management techniques.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    desc: "Worked on full-cycle application development, including UI/UX improvements, API integration, and deployment using Docker and GitHub Actions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/hardiksehgal2/",
  },
  {
    name: "Mail",
    img: "/mail_pers.svg",
    link: "mailto:jobs.hardik00@gmail.com",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hardik-sehgal-8086731b5/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Node.js", "MongoDB", "Docker", "GitHub"],
} as const;
