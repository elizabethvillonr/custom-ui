import { FaGraduationCap } from 'react-icons/fa'
import { BsStack, BsWindow } from 'react-icons/bs'
import { BiCodeBlock } from 'react-icons/bi'

export const EXPERIENCE_LIST = [
  {
    timeLabel: 'June, 2020 - Present',
    company: 'Giraffe Media Group, LLC',
    jobTitle: 'Software Developer',
    techStack: ['Javascript', 'ReactJs', 'NodeJs', 'PHP', 'MySQL', 'Redis', 'Jira', 'Git Flow', 'AWS resources'],
    icon: BsStack,
    jobActivities: [
      "Actively participated in agile development processes and contributed to the continuous improvement of the development workflow.",
      "Collaborated with cross-functional teams to develop and maintain the company's web application.",
      "Implemented front-end functionalities and user interface enhancements to improve the overall user experience.",
      "Built and integrated APIs and third-party libraries to extend the company's web application functionality.",
      "Conducted code reviews, performed testing, and resolved bugs to ensure high-quality deliverables."
    ]
  },
  {
    timeLabel: 'July 2015 - June 2020',
    company: 'CellForce',
    jobTitle: 'Front-end Developer',
    techStack: ['Javascript', 'JQuery', 'ReactJs', 'HTML', 'CSS', 'PHP', 'MySQL', 'Jira', 'Git Flow'],
    icon: BiCodeBlock,
    jobActivities: [
      "Successfully completed front-end web development of the company's management system.",
      "Worked closely with the operation team to gather requirements and translate them into functional web interfaces.",
      "Collaborated with remote teams through effective communication and project management tools like Jira and Trello.",
      "Conducted training for new develop"]
  }
  ,
  {
    timeLabel: 'July 2015 - December 2016',
    company: 'Cryptext',
    jobTitle: 'Front-end Developer',
    techStack: ['Javascript', 'JQuery', 'ReactJs', 'HTML', 'CSS', 'Git'],
    icon: BsWindow,
    jobActivities: [
      "Implemented web chat user interface based on pixel-perfect layouts.",
      "Implemented the company's website based on pixel-perfect designs.",
      "Integrated APIs and third-party libraries to extend the application's functionality"
    ]
  },
  {
    timeLabel: ' May 2017',
    company: 'Escuela Superior Politécnica del Litoral (ESPOL)',
    jobTitle: 'Engineer\'s degree, Computer Science',
    techStack: ['Javascript', 'JQuery', 'ReactJs', 'HTML', 'CSS', 'Git'],
    icon: FaGraduationCap
  }
]