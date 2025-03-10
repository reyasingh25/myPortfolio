/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Reya Singh",
  description:
    "A passionate and creative undergraduate learning on any new technology and being updated on the latest developments in the field of AI/ML. Quick to learn, a team player with a goal-set mindset who aims to apply analytical skills and creativity to address real-world problems.",
  og: {
    title: "Reya Singh Portfolio",
    type: "website",
    url: "",
  },
};
//Home Page
const greeting = {
  title: "Reya Singh",
  logo_name: "ReyaSingh",
  nickname: "",
  subTitle:
    "A passionate and creative undergraduate learning on any new technology and being updated on the latest developments in the field of AI/ML. Quick to learn, a team player with a goal-set mindset who aims to apply analytical skills and creativity to address real-world problems.",
  resumeLink: "",
  portfolio_repository: "https://github.com",
  githubProfile: "https://github.com",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/reyasingh84",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/reya-singh-433ab92aa",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:reyasingh.edu@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imkhushisingh_",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:expressjs-wordmark",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Familiar with multiple cloud platforms",
        "⚡ Experience with hosting and maintaining websites on virtual machine instances, as well as database integration",
        
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Reya_singh/",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.geeksforgeeks.org/user/reyasingrdl/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/reyasingh2592",
    },  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh Engineering College, CGC, Landran, Mohali. Affiliated to IK GUJRAL Punjab Technical University, Jalandhar",
      subtitle: "B.Tech. in Artificial Intelligence & Machine Learning",
      logo_path: "classic-logo.png",
      alt_name: "CEC_PTU",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Artificial Intelligence & Machine Learning.",
        
      ],
      website_link: "https://ptu.ac.in",
    },
    {
      title: "St. Soldier International Convent School,Phase VII, Mohali",
      subtitle: "XII (Higher Secondary Examination-CBSE)",
      logo_path: "saint-logo.png",
      alt_name: "St. Soldier",
      duration: "2021-22",
      descriptions: [
        "⚡ I was non-medical student focused on developing strong problem-solving skills, logical thinking, and an understanding of fundamental programming concepts",
        "⚡ I possess a strong foundation in subjects like mathematics, physics, and computer science, with a keen interest in problem-solving, technology, and innovation. I aim to apply my skills to explore opportunities in engineering and tech-driven fields.",
        
      ],
      website_link: "https://stsoldiermohali.com/",
    },
    {
      title: "Army Public School,Unchi Bassi,Dasuya",
      subtitle: "X (Secondary Examination-CBSE)",
      logo_path: "aps-logo.png",
      alt_name: "APS",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I was very adaptable and have quality of adjusting quickly to new situations, challenges, or environments",
       ],
      website_link: "https://www.armyschoolunchibassi.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Natural Language Processing",
      subtitle: "- Infosys Springboard",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aRZhshvlcdvgStA-qAwm0RsH8AyNLPxx/view?usp=sharing",
      alt_name: "Infosys Springboard",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Infosys Springboard",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JbUJJxd4xdIzJ0sB7hlYAAiGRi7vG4-A/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Dataplex",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/c8d3480f-6b4a-45d6-a3fa-f4e5e62c639b/public_url",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "MongoDB",
      subtitle: "- MongoDB",
      logo_path: "MongoDB-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1wpKJf_QhErV0086c6M55_7WG-iFlo9sy/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Academy Graduate",
      subtitle: "- Cloud Operations",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1v-u1tu3wm2BkjXxSQmpe1UfZ5nGhw5PF/view?usp=sharing",
      alt_name: "AWS Academy Graduate",
      color_code: "#D83B0199",
    },
    {
      title: "Build Infrastructure with Terraform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/dc8f0865-fe50-458d-a744-ca02f877adf4/public_url",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "BigQuery Data on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.credly.com/badges/e875adcd-f64b-44ca-9b42-deb833376da3/public_url",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Data Base Management System",
      subtitle: "-Prof. Partha Pratim Das",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lrHXzQNJhg-TWUkTU3K7IsWAUwhFvDkr/view?usp=drive_link",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Storage",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.credly.com/badges/8fde9909-d9c7-43ca-84b6-19cc96a7bd16/public_url",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Training",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "work",
      work: true,
      experiences: [
        {
          title: "Python ",
          company: " Skilltone Graziti Interactive",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2024 - July 2024",
          location: "Panchkula",
          description:
            "During the internship, I contributed to the development of web applications by leveraging Python for backend logic and integrating HTML, CSS, and JavaScript for frontend design. I worked with MongoDB for efficient data storage and management, ensuring seamless database interactions. Additionally, I utilized Postman to test and troubleshoot APIs, ensuring smooth communication between the client and server. ",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Python Technology",
          company: "Graziti Interactive",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2024 - June 2024",
          location: "Panchkula",
          description:
            "During the internship, I contributed to the development of web applications by leveraging Python for backend logic and integrating HTML, CSS, and JavaScript for frontend design. I worked with MongoDB for efficient data storage and management, ensuring seamless database interactions. Additionally, I utilized Postman to test and troubleshoot APIs, ensuring smooth communication between the client and server. ",
          color: "#000000",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "#",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "#",
    },
    
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.Feel free to contact me.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hoshiarpur",
    locality: "Hajipur",
    country: "India",
    region: "Punjab",
    postalCode: "144221",
    streetAddress: "Hajipur",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  competitiveSites,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
