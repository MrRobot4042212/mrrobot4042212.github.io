import React, { useState } from 'react';

const contentMap = {
  'Work experience': {
    right: [
      {
        title: 'GEOPOST S.L ',
        subtitle:'Infrastructure Engineer || Front-end Developer',
        description: 'I am in charge of the installation and maintenance of the company’s infrastructure, as well as the development of the front-end of the company’s website. Additionally, I have carried out process automation projects and developed microservices, certificate automation, and an alerting system. I also manage the infrastructure on platforms such as OpenShift, Azure, OCI, and PKS.Furthermore, I am responsible for administering Jira, overseeing platform maintenance, and creating automation workflows to optimize operations.',
        description2: 'I also have experience in front-end development, having built a corporate application called GEDDIS using Angular 19, Ionic, and Capacitor for mobile development. This application integrates with our APIs to manage and monitor services, generate real-time analytics and visualizations, and track operations within our Jira system, allowing efficient control of projects and tickets.'
      },
      {
        title: 'INDRA Sistemas',
        subtitle:'ATM Systems Technician',
        description: 'Assisted in the installation of different subsystems related to ATMs, carried out the installation of INDRAs proprietary software on various devices while also helping to create the database (PostgreSQL).',
        description2: 'We had a return of a string (Set of devices) from a course, so we had to perform the installation from scratch of an entire string for different projects at the same time, we acted immediately with the coordination and physical structuring of the devices, then we created different groups to perform a synchronized work with the installation of each project, each project required a database, the proprietary system and the creation of scripts for an automation of the installation, the result was successful so the entire string was installed within the established deadline to work on it.'
      },
      {
        title: 'Infibail Ibérica',
        subtitle:'IT Technician',
        description: 'I was in charge of the companys systems administration along with a specialized team for this purpose, maintenance and repair of computer equipment, and preparation of orders.',
        description2: 'When we worked at the company, we had to repair a piece of computer equipment that was not working correctly. After many hours of searching and solving, we managed to completely resolve the problem. After diagnosing the issue, we found that the problem was an electrical current issue in the equipments case.'
      }
    ],
    left: [
      {
        imagen: "/image/icons/LogoGeopost.webp",
        description: 'Madrid, Spain',
        fecha: "07/09/2024 – Now",
        alt: 'Geopost Logo',
        title: 'Geopost',
      },
      {
        imagen: "/image/icons/indra.webp",
        description: 'Madrid, Spain',
        fecha: "20/03/2023 – 11/06/2024",
        alt: 'Indra Logo',
        title: 'Indra',
      },
      {
        imagen: "/image/icons/infibail.webp",
        description: 'Madrid, Spain',
        fecha: "18/09/2021 – 21/06/2022",
        alt: 'Infibail logo',
        title: 'Infibail',
      },
    ],
  },
  'Education': {
    right: [
      { title: 'Network Computer Systems Administration Technician', description: 'European University Madrid (Alcobendas).' },
      { title: 'Microcomputer Systems and Networks', description: 'I.E.S Santa María de los Apóstoles.' },
      { title: 'Audio Engineering and Production Degree', description: 'SAE Institute.' },
      { title: 'Compulsory Secondary Education', description: 'Colegio Ártica.' }
    ],
    left: [
      { imagen: "/image/icons/UEM.webp", description: 'Madrid, Spain', fecha: "18/09/2023 – 21/06/2024", alt: 'UEM Logo', title: 'UEM' },
      { imagen: "/image/icons/SMA.webp", description: 'Madrid, Spain', fecha: "18/09/2020 – 21/06/2022", alt: 'SMA logo', title: 'SMA' },
      { imagen: "/image/icons/SAE.webp", description: 'Madrid, Spain', fecha: "12/09/2016 – 20/06/2017", alt: 'SAE logo', title: 'SAE' },
      { imagen: "/image/icons/ART.webp", description: 'Madrid, Spain', fecha: "08/09/2010 – 21/06/2014", alt: 'colegio artica logo', title: 'ART' },
    ],
  },
  'Curses': {
    right: [
      { title: 'CS50s Introduction to Computer Science', description: 'Harvard University. Instructor: David J. Malan' },
      { title: 'JavaScript Essentials 1 (JSE)', description: 'European University of Madrid. Instructor: Adrián Ciudad Sanz' },
      { title: 'Cybersecurity Essentials', description: 'European University of Madrid. Instructor: Adrián Ciudad Sanz' },
      { title: 'Big Data & Analytics', description: 'European University of Madrid. Instructor: Adrián Ciudad Sanz' },
      { title: 'Introduction to Cybersecurity', description: 'European University of Madrid. Instructor: Adrián Ciudad Sanz' },
      { title: 'NDG Linux Essentials', description: 'European University of Madrid. Instructor: Ismael El Hamiti Molina' },
      { title: 'CCNAv7: Introduction to Networks', description: 'European University of Madrid. Instructor: Ricardo Laorga Suárez' },
    ],
    left: [
      { imagen: "/image/icons/hardvard.webp", description: 'Madrid, Spain', fecha: "19/05/2024 – 20/11/2024", alt: 'hardvar Logo', title: 'HRV' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "19/05/2024 – Actualmente", alt: 'hardvar Logo', title: 'CISCO' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "11/12/2023", alt: 'hardvar Logo', title: 'CISCO' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "11/12/2023", alt: 'hardvar Logo', title: 'CISCO' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "30/11/2023", alt: 'hardvar Logo', title: 'CISCO' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "10/01/2023", alt: 'hardvar Logo', title: 'CISCO' },
      { imagen: "/image/icons/cisco.webp", description: 'Madrid, Spain', fecha: "21/06/2021", alt: 'hardvar Logo', title: 'CISCO' },
    ],
  },
  'Projects': {
    right: [
      { title: 'JustCompress', description: `It's an open-source image compressor that compresses images using different compression algorithms. It's free and unlimited.`, link1: { href: 'https://mrrobot4042212.github.io/JustCompress/', text: 'Website' }, link2: { href: 'https://github.com/MrRobot4042212/JustCompress', text: 'Github' } },
      { title: 'La Mirada de Maraboo', description: 'The "La Mirada de Maraboo" Association is committed to improving the lives of 100 orphaned children in Tanzania, specifically at the "Msamaria" orphanage in the town of Moshi. Our mission is to provide them with a safe home, access to quality education, medical care, and emotional support, so they can grow and develop in a conducive environment.' },
      { title: 'PowerPulse', description: '"PowerPulse" is a fitness platform that offers tools such as a daily calorie calculator and a personalized meal planner. It also includes varied workout routines and progress tracking, all designed to help you effectively reach your goals. The platform features a variety of tools that cover different aspects of your fitness journey.' },
      { title: 'El Hamiti News', description: 'El Hamiti News aims at the design, development, and implementation of a news platform specialized in the field of computing and technology. This platforms mission is to provide accurate, timely, and relevant information on the latest developments in the tech industry, including innovations in hardware and software, trends in artificial intelligence, cybersecurity, among others.', link1: { href: '/utils/Grupo05_Memoria_ElHamitiNews.pdf', text: 'Document' }, link2: { href: 'https://github.com/MrRobot4042212/El-Hamiti-News.github.io', text: 'Github' } },
      { title: 'FilmsNCritics', description: 'FilmsNCritics is an online platform dedicated to collecting and presenting user opinions on movies from various eras, genres, and cinematic cultures. The website has established itself as an interactive space where movie lovers can express their thoughts and evaluations on the latest film productions, timeless classics, and independent movies. FilmsNCritics also provides detailed information about the movies and an intuitive and user-friendly interface.', link1: { href: 'https://mrrobot4042212.github.io/FNC.github.io/', text: 'Website' }, link2: { href: 'https://github.com/MrRobot4042212/FNC.github.io', text: 'Github' } },
    ],
    left: [
      { imagen: "/image/icons/justCompress.webp", description: 'Open-source project for compressing images.', date: "16 / 08 / 2024", alt: 'JustCompress Logo', title: 'JC' },
      { imagen: "/image/icons/maraboo.webp", description: 'Website project for the non-profit association "La Mirada de Maraboo"', date: "In development", alt: 'La Mirada de Maraboo Logo', title: 'MRB' },
      { imagen: "/image/icons/PP.webp", description: 'Website / mobile app project that has different tools to help you on your fitness journey', date: "In development", alt: 'PowerPulse Logo', title: 'PP' },
      { imagen: "/image/icons/hamitiNews.webp", description: 'End of course project for ASIR 2024 (Group 5) - European University of Madrid (Alcobendas)', date: "06/10/2024", alt: 'El Hamiti news Logo', title: 'HN' },
      { imagen: "/image/icons/FNC.webp", description: 'Project for creating a website for the 1st year ASIR web implementation subject', date: "01/20/2024", alt: 'FNC Logo', title: 'FNC' },
    ],
  },
  'Skills': {
    right: [
      { title: 'Front-end', description: 'HTML, CSS, Vanilla JavaScript, Vite, React.js, JQuery, ASTRO, Sass, WordPress, Git, Github.' },
      { title: 'Back-end', description: 'MySQL, MariaDB, PostgreSQL, InnoDB, PHP, C#, Python.' },
      { title: 'OS', description: 'Windows, Ubuntu, Debian, CentOS, Redhat, Raspberry Pi, Command Language (Bash and batch).' },
      { title: 'Microservices', description: 'DHCP, Bind9, OpenVPN, Wireguard, OpenSSL, Encryption, Apache2, Nginx, Databases, Docker, Kubernetes, LXC, VMware Workstation, Oracle VM VirtualBox.' },
    ],
    left: [
      { imagen: "/image/icons/FRONT.webp", alt: 'FNC Logo', title: 'FRONT' },
      { imagen: "/image/icons/BACK.webp", alt: 'FNC Logo', title: 'BACK' },
      { imagen: "/image/icons/SO.webp", alt: 'FNC Logo', title: 'SO' },
      { imagen: "/image/icons/MS.webp", alt: 'FNC Logo', title: 'MS' },
    ],
  },
  'Soft Skills': {
    right: [
      { title: 'Adaptability', description: 'I am able to quickly adjust to new environments and situations, learning and growing with each change.' },
      { title: 'Interest', description: 'I genuinely take an interest in learning and continuously improving, showing enthusiasm for my work.' },
      { title: 'Initiative', description: 'I take proactive actions without needing to be asked, identifying and addressing opportunities and problems.' },
      { title: 'Teamwork', description: 'I collaborate effectively with others, communicating well and respecting my colleagues\' ideas.' },
      { title: 'Customer Service', description: 'I interact positively with customers, understanding their needs and offering appropriate solutions.' },
      { title: 'Professionalism', description: 'I behave in an ethical and responsible manner, adhering to standards and positively representing my organization.' },
    ],
    left: [
      { alt: 'FNC Logo' },
      { alt: 'FNC Logo' },
      { alt: 'FNC Logo' },
      { alt: 'FNC Logo' },
      { alt: 'FNC Logo' },
      { alt: 'FNC Logo' },
    ],
  },
  'Recommendations': {
    right: [
      { title: 'Adrián Ciudad Sanz', link1: { href: 'mailto:a.ciudad@universidadeuropea.es', text: 'Email' }, link2: { href: 'https://www.linkedin.com/in/adrian-ciudad/', text: 'Linkedin' } },
      { title: 'Ismael El Hamiti Molina', link1: { href: 'mailto:ielhamiti@educa.madrid.org', text: 'Email' }, link2: { href: 'https://www.linkedin.com/in/el-hamiti/', text: 'Linkedin' } },
      { title: 'Brice Magd', link1: { href: 'mailto:brice.magd@infibail.com', text: 'Email' }, link2: { href: 'Business Development Manager- INFIBAIL Ibérica', text: 'Linkedin' } },
    ],
    left: [
      { description: 'Mentor 2nd year ASIR - European University Madrid' },
      { description: 'Mentor 1st year ASIR - European University Madrid' },
      { description: 'Business Development Manager- INFIBAIL Ibérica' },
    ],
  },
};

const DynamicContent = () => {
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [leftContent, setLeftContent] = useState([]);
  const [rightContent, setRightContent] = useState([]);

  const showContent = (option) => {
    setSelectedOption(option);
    setLeftContent(contentMap[option]?.left || []);
    setRightContent(contentMap[option]?.right || []);
  };

  return (
    <section id='main-content' className="main-content">
      <nav>
        {Object.keys(contentMap).map((key) => (
          <button key={key} onClick={() => showContent(key)}>
            {key}
          </button>
        ))}
      </nav>
      <section className="cronological-content">
        <h1 id={selectedOption}>{selectedOption}</h1>
        <section className="container">
          {leftContent.map((item, index) => (
            <article id={item.title} key={index}>
              {item.imagen && <img draggable="false" src={item.imagen} alt={item.alt || 'Imagen'} className='imgIcons' />}
              {rightContent[index] && (
                <div className="right-column">
                  <h2>{rightContent[index].title}</h2>
                  <h3>{rightContent[index].subtitle}</h3>
                  <p>{item.fecha}</p>
                  <footer>{item.description}</footer>
                  <p>{rightContent[index].description}</p>
                  <p>{rightContent[index].description2}</p>
                  {rightContent[index].link1 && rightContent[index].link2 && (
                    <nav id='sublinks-content'>
                      <a href={rightContent[index].link1.href}>{rightContent[index].link1.text}</a>
                      <a href={rightContent[index].link2.href}>{rightContent[index].link2.text}</a>
                    </nav>
                  )}
                </div>
              )}
            </article>
          ))}
        </section>
      </section>
    </section>
  );
};

export default DynamicContent;