// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Souvik",
  middleName: "",
  lastName: "Das",
  message: " Passionate about software development. I want to contribute to the world in the field of IT industry.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/souvikdas0718",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/souvik.das.1671",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/souvik-das-04996ba6/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/SouvikDas.jpeg"),
  imageSize: 375,
  message:
    "Hi there. I’m a graduate student of 2021 from Dalhousie University, Halifax with a degree in Master of Applied Computer Science. Currently, I am looking for a full-time software development roles.",
  resume: "https://drive.google.com/file/d/1d8zRSJP1J1miCqcDBvFyHamR-P06Vtpr/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "souvikdas0718",
  reposLength: 20,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Teaching Assistant: Serverless Computing\n: Handled individual tutoring for 100 master students to help master/reinforce serverless AWS and GCP lab concepts.\n" +
      "Monitored BrightSpace/Teams channel for questions from the class\n" +
      "Assisted students in doubt clearing sessions\n" +
      "Communicated with the Lead TA's and Markers for preparing class materials.",
  message2:"Infosys: As a Senior Systems Engineer, I pioneered the skill of assisting peers and help new joinees in on-boarding training process.\n" +
      "Supervised a team of five junior developers and reported daily progress to Technology leads.",
  message3:"Hackathon: Lead a team of three members to pitch in our idea of contactless on-boarding process in Aviation Technology Hackathon conducted by Shift Key labs and HaliFax Stanfield Airport.",
  images: [
    {
      img: require("../editable-stuff/serverless.png"),
    },
    {
      img: require("../editable-stuff/SouvikDas.jpeg"),
      label: "Senior Systems Engineer",
      paragraph: "Assisted newly joined team members as a buddy and provided smooth on-boarding process."
    },
    {
      img: require("../editable-stuff/Hackathon.png"),
      label: "Safe Flight Hackathon",
      paragraph: "Lead a team of three members to pitch in our idea of contactless on-boarding process."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Big Data Technologies", value: 80 },
    { name: "Cloud Technologies", value: 90 },
    { name: "SQL", value: 85 },
    { name: "Data Structures", value: 80 },
    { name: "Python", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 65 },
    { name: "Shell", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Big Data Developer, Software Engineering or Cloud Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "souvikdas0718@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Big Data Developer Intern',// Here Add Company Name
      companylogo: require('../assets/img/BlackBerry.png'),
      date: 'May 2021 – Present',
    },
    {
      role: 'Teaching Assistant(CSCI 5410 Serverless Computing)',
      companylogo: require('../assets/img/Dalhousie University.jpeg'),
      date: 'May 2021 – Present',
    },
    {
      role: 'Senior Systems Engineer',
      companylogo: require('../assets/img/Infosys.jpeg'),
      date: 'Aug 2016 – Dec 2019',
    },
    {
      role: 'Systems Engineer Intern',
      companylogo: require('../assets/img/Infosys.jpeg'),
      date: 'Jan 2016 – May 2016',
    },
  ]
};

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      certificate: 'The ultimate hands-on hadoop-tame your big data by Frank Kane',// Here Add Company Name
      certificatelogo: require('../assets/img/BigData.jpeg'),
      date: 'Sept. 22, 2021',
    },
    {
      certificate: 'AWS Certified Solutions Architect - Associate certificate',
      certificatelogo: require('../assets/img/AWS.png'),
      date: 'Oct. 06, 2021 – Oct. 06, 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certifications };
