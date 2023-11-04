// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Abdul",
  middleName: "Baari",
  lastName: "Davids",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/abduldavids",
    },
    //{
    //  image: "fa-instagram",
    //  url: "https://www.instagram.com/username/",
    //},
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abduldavids/",
    },
    //{
    //  image: "fa-twitter",
    //  url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/abduldavids.jpeg"),
  imageSize: 375,
  message:
    "My name is Abdul Baari. I’m a software engineer currently studying towards my BSc in Computer Science. I'm passionate about new technologies, especially artificial intelligence. I'm looking for opportunities to work on projects that will help me grow as a developer and contribute to society.",
  resume: "https://docs.google.com/document/d/1yi6HG69-CCjXuHrV0Z_pAkan2BQBMHIL/edit?usp=sharing&ouid=112174512699894154976&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "abduldavids", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["bulletin", "lifetimer"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
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
    { name: "Python", value: 80 },
    { name: "HTML/CSS", value: 55 },
    { name: "Java", value: 75 },
    { name: "SQL", value: 55 },
    { name: "Java", value: 90 },
    { name: "PHP", value: 65 },
    { name: "Git", value: 80 },
    { name: "JavaScript", value: 70 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Detail-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Initiative", value: 75 },
    { name: "Learning Skills", value: 70 },

  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part-time Software Engineering opportunities to pursue alongside my studies! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "abdulbaaridavids04@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Junior Software Engineer at CodeInfinity',// Here Add Company Name
      companylogo: require('../assets/img/codeinfinitylogo.jpg'),
      date: 'October 2023 – Present',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/finishline.jpg'),
      date: 'March 2022 – October 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
