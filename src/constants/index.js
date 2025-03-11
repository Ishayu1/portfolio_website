import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import research from "../assets/projects/Ghosh_thumbnail.jpg"
import cricket from "../assets/projects/Cricket_website.jpg"

export const HERO_CONTENT = `I am a university student who is passionate about AI, maths and full-stack development. I build scalable applications, analyze complex data, and innovate with AI to solve real-world problems. I'm Always learning, always creating, and always looking for experience.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    "year": "October 2024 - Present",
    "role": "Software Developer",
    "company": "Data Science Student Society at UCSD",
    "description": "Developing a new website using TypeScript, React, and HTML/CSS to enhance user experience for 1,900+ members and event participants.",
    "technologies": ["TypeScript", "React", "HTML", "CSS"]
  },
  {
    "year": "June 2023 - September 2023",
    "role": "Research Intern",
    "company": "Fractal",
    "description": "Co-authored a research paper on sensory integration in the brain to advance multimodal generative AI. Proposed innovative applications of multimodal AI to improve accessibility and enhance user experience.",
    "technologies": ["AI", "Machine Learning", "Multimodal AI", "Research"]
  },
  {
    "year": "January 2023 - April 2023",
    "role": "Data Science Intern",
    "company": "Infinite Uptime",
    "description": "Using my skills in Python, with libraries including Pandas and Numpy, I manipulated large-scale datasets to provide insights and diagnostics on data from diverse global manufacturing industries.",
    "technologies": ["Python", "Pandas", "NumPy", "Data Analysis"]
  }
];


export const PROJECTS = [
  {
    title: "Sports Predictive Analysis Research Paper",
    image: research,
    description:
      "Co-authored a research paper on predicting cricket player ratings using data analysis and machine learning techniques. Analyzed 1,700+ player ratings and compared linear regression, KNN, and decision tree models, achieving an R-Squared of 0.84.",
    technologies: ["Pandas", "Matplotlib", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Specialized Data Analysis Projects",
    image: project3,
    description:
      "Developed multiple data science projects, including car price prediction using Scikit-learn, COVID-19 statistical analysis software, and a life expectancy prediction model based on population data.",
    technologies: ["Scikit-learn", "Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Dubai College Cricket Scoring Web App",
    image: cricket, // Replace with actual image variable if applicable
    description:
      "Developed a website for online cricket scoring and data analytics using Flask, Pandas, NumPy, and Matplotlib. The website replaces the school's current system, allowing teams to store match results and analyze performance.",
    technologies: ["Flask","SQL","CSS","Javascript","Pandas", "NumPy", "Matplotlib"],
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
