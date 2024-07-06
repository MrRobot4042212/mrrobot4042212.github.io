import React, { useState } from 'react';
import Buttons from './buttons.astro';

const contentMap = {
  'Experiencia laboral': {
    right: [
        { 
        title: 'INDRA Sistemas | Sistemas ATM (Practicas)',
        description:'Ayudante de instalación de sistemas ATM, instalación de sistemas propietarios, scripting mmanipulación de base de datos Mysql y postgreSQL' },
        {
        title: 'Infibail Ibérica | Técnico Informático',
        description:'Administrador de sistemas, Mantenimiento y reparación de equipos , Preparación de pedidos y tareas ofimáticas' },
    ],
    left: [
      { imagen: "/image/icons/indra.webp", 
        description: 'Madrid, España',
        fecha: "20/03/2023 – 11/06/2024",
        alt: 'Indra Logo',
        title: 'Indra',
      },
      { imagen: "/image/icons/infibail.webp", 
        description: 'Madrid, España',
        fecha: "18/09/2021 – 21/06/2022",
        alt: 'Infibail logo',
        title: 'Infibail',
      },
    ],
  },
  'Educación': {
    right: [
      { 
      title: 'Técnico de administración de Sistemas Informáticos en Red',
      description:'Universidad Europea Madrid (Alcobendas).' },
      {
      title: 'Sistemas Microinformáticos y redes',
      description:'I.E.S Santa María de los Apóstoles.'
      },
      {
      title: 'Grado de Ingeniería y producción de audio',
      description:'SAE Institute.' 
    },
      {
        title: 'Educación Secundaria Obligatoria',
        description:'Colegio Ártica.'
      },
  ],
  left: [
    { imagen: "/image/icons/UEM.webp", 
      description: 'Madrid, España',
      fecha: "18/09/2023 – 21/06/2024",
      alt: 'UEM Logo',
      title: 'UEM',
    },
    { imagen: "/image/icons/SMA.webp", 
      description: 'Madrid, España',
      fecha: "18/09/2020 – 21/06/2022",
      alt: 'SMA logo',
      title: 'SMA',
    },
    { imagen: "/image/icons/SAE.webp", 
      description: 'Madrid, España',
      fecha: "12/09/2016 – 20/06/2017",
      alt: 'SAE logo',
      title: 'SAE',
    },
    { imagen: "/image/icons/ART.webp", 
      description: 'Madrid, España',
      fecha: "08/09/2010 – 21/06/2014",
      alt: 'colegio artica logo',
      title: 'ART',
    },
  ],
  },
  'Cursos': {
    right: [
      { 
        title: 'CS50s Introduction to computer science',
        description:'Harvard University. Instructor: David J. Malan' 
      },
      { 
        title: 'JavaScript Essentials 1 (JSE)',
        description:'Universidad Europea de Madrid. Instructor: Adrián Ciudad Sanz' 
      },
      { 
        title: 'Cybersecurity Essentials',
        description:'Universidad Europea de Madrid. Instructor: Adrián Ciudad Sanz' 
      },
      { 
        title: 'Big Data & Analytics',
        description:'Universidad Europea de Madrid. Instructor: Adrián Ciudad Sanz' 
      },
      { 
        title: 'Introduction to Cybersecurity',
        description:'Universidad Europea de Madrid. Instructor: Adrián Ciudad Sanz' 
      },
      { 
        title: 'NDG Linux Essentials',
        description:'Universidad Europea de Madrid. Instructor: Ismael El Hamiti Molina' 
      },
      { 
        title: 'CCNAv7: Introducción a Redes',
        description:'Universidad Europea de Madrid. Instructor: Ricardo Laorga Suárez' 
      },
    ],
    left: [
      { imagen: "/image/icons/hardvard.webp", 
        description: 'Madrid, España',
        fecha: "19/05/2024 – Actualmente",
        alt: 'hardvar Logo',
        title: 'HRV',
      },
      { imagen: "/image/icons/cisco.webp", 
        description: 'Madrid, España',
        fecha: "19/05/2024 – Actualmente",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      {
        imagen: "/image/icons/cisco.webp",
        description: 'Madrid, España',
        fecha: "11/12/2023",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      {
        imagen: "/image/icons/cisco.webp",
        description: 'Madrid, España',
        fecha: "11/12/2023",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      {
        imagen: "/image/icons/cisco.webp",
        description: 'Madrid, España',
        fecha: "30/11/2023",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      {
        imagen: "/image/icons/cisco.webp",
        description: 'Madrid, España',
        fecha: "10/01/2023",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      {
        imagen: "/image/icons/cisco.webp",
        description: 'Madrid, España',
        fecha: "21/06/2021",
        alt: 'hardvar Logo',
        title: 'CISCO',
      },
      
    ],
  },
  'Proyectos': {
    right: [
      { 
        title: 'La Mirada de Maraboo',
        description: 'La Asociación "La Mirada de Maraboo" se compromete a mejorar la vida de 100 niños en situación de orfandad en Tanzania, específicamente en el el orfanato "Msamaria" en el pueblo de Moshi. Nuestra misión es brindarles un hogar seguro, acceso a educación de calidad, atención médica y apoyo emocional, para que puedan crecer y desarrollarse en un entorno propicio.',
        link1: { href: 'https://mrrobot4042212.github.io/La_mirada_de_maraboo.github.io/', text: 'Web' },
        link2: { href: 'https://github.com/MrRobot4042212/la-mirada-de-maraboo-V2', text: 'Github' },
      },
      { 
        title: 'PowerPulse',
        description: '"PowerPulse" es una plataforma fitness que ofrece herramientas como una calculadora de calorías diarias y un planificador de comidas personalizado. También incluye rutinas de entrenamiento variadas y seguimiento de progreso, todo diseñado para ayudarte a alcanzar tus objetivos de forma efectiva. La plataforma cuenta con una variedad de herramientas que abarcan diferentes aspectos de tu viaje fitness.',
        link1: { href: 'https://mrrobot4042212.github.io/PowerPulse.github.io/', text: 'Web' },
        link2: { href: 'https://github.com/MrRobot4042212/PowerPulse.github.io', text: 'Github' },
      },
      { 
        title: 'El Hamiti News',
        description: 'El Hamiti News tiene como objetivo el diseño, desarrollo e implementación de una plataforma de noticias especializadas en el ámbito de la informática y la tecnología. Esta plataforma tiene como misión proporcionar información precisa, oportuna y relevante sobre los últimos desarrollos en la industria tecnológica, incluyendo innovaciones en hardware y software, tendencias en inteligencia artificial, ciberseguridad, entre otros.',
        link1: { href: '/public/utils/Grupo05_Memoria_ElHamitiNews.pdf', text: 'Memoria' },
        link2: { href: 'https://github.com/MrRobot4042212/El-Hamiti-News.github.io', text: 'Github' },
      },
      { 
        title: 'FilmsNCritics',
        description: 'FilmsNcritics es una plataforma en línea dedicada a recopilar y presentar opiniones de usuarios sobre películas de diversas épocas, géneros y culturas cinematográficas. La página web se ha establecido como un espacio interactivo donde los amantes del cine pueden expresar sus pensamientos y evaluaciones sobre las últimas producciones cinematográficas, clásicos atemporales y películas independientes. FilmsNcritics también proporciona información detallada sobre las películas y una interfaz intuitiva y amigable.',
        link1: { href: 'https://mrrobot4042212.github.io/FNC.github.io/', text: 'Web' },
        link2: { href: 'https://github.com/MrRobot4042212/FNC.github.io', text: 'Github' },
      },
    ],
    left: [
      { 
        imagen: "/image/icons/maraboo.webp", 
        description: 'Proyecto de sitio web para la asociación sin ánimo de lucro "La Mirada de Maraboo"',
        fecha: "En desarrollo",
        alt: 'La Mirada de Maraboo Logo',
        title: 'MRB',
      },
      { 
        imagen: "/image/icons/PP.webp", 
        description: 'Proyecto de sitio web / aplicación movil que tiene diferentes herramientas para ayudarte en tu viaje fitness',
        fecha: "En desarrollo",
        alt: 'PowerPulse Logo',
        title: 'PP',
      },
      { 
        imagen: "/image/icons/hamitiNews.webp", 
        description: 'Trabajo fin de curso de ASIR 2024 (Grupo 5) - Universidad Europea de Madrid (Alcobendas',
        fecha: "10/06/2024",
        alt: 'El Hamiti news Logo',
        title: 'HN',
      },
      { 
        imagen: "/image/icons/FNC.webp", 
        description: 'Trabajo de realización de un sitio web para la asignatura implantacion web de 1ºASIR',
        fecha: "20/01/2024",
        alt: 'FNC Logo',
        title: 'FNC',
      },
    ],
  },
  'Aptitudes': {
    right: [
      { 
        title: 'Front-end', 
        description: 'HTML, CSS, Vanilla javaScript, Vite, React.js, JQuery, ASTRO , Sass, WordPress, Git, Github. ',
      },
      { 
        title: 'Back-end',  
        description: 'Mysql, MariaDB, PostgreSQL, InnoDB, PHP, C#,    ',
      },
      { 
        title: 'SO',  
        description: 'Windows, Ubuntu, Debian, CentOS, Redhat , Raspberry Pi, Lenguaje de comandos (Bash y batch)   ',
      },
      { 
        title: 'Microservicios',  
        description: 'DHCP, Bind9, OpenVPN, Wireguard, OpenSSL, Encriptación, Apache2, Nginx, BBDD, Docker, Kubernetes, LXC, VMware Workstation, Oracle VM VirtualBox.      ',
      },
    ],
    left: [
      { 
        imagen: "/image/icons/FRONT.webp", 
        alt: 'FNC Logo',
        title: 'FRONT',
      },
      { 
        imagen: "/image/icons/BACK.webp", 
        alt: 'FNC Logo',
        title: 'BACK',
      },
      { 
        imagen: "/image/icons/SO.webp", 
        alt: 'FNC Logo',
        title: 'SO',
      },
      { 
        imagen: "/image/icons/MS.webp", 
        alt: 'FNC Logo',
        title: 'MS',
      },


    ],
  },
  'Soft Skills': {
    right: [
      {title: 'Adaptación', 
        description: 'Soy capaz de ajustarme rápidamente a nuevos entornos y situaciones, aprendiendo y creciendo con cada cambio.',
      },
      {title: 'Interés', 
        description: 'Me intereso genuinamente por aprender y mejorar continuamente, mostrando entusiasmo por mi trabajo.',
      },
      {title: 'Iniciativa', 
        description: 'Tomo acciones proactivas sin necesidad de ser solicitado, identificando y abordando oportunidades y problemas.',
      },
      {title: 'Trabajo en Equipo', 
        description: 'Colaboro eficazmente con los demás, comunicándome bien y respetando las ideas de mis compañeros.',
      },
      {title: 'Trato con el Cliente', 
        description: 'Interacciono de manera positiva con los clientes, entendiendo sus necesidades y ofreciendo soluciones adecuadas.',
      },
      {title: 'Profesionalidad', 
        description: 'Me comporto de manera ética y responsable, cumpliendo con los estándares y representando a mi organización positivamente.',
      },
    ],
    left: [
      { 
        alt: 'FNC Logo',
      },
      { 
        alt: 'FNC Logo',
      },
      { 
        alt: 'FNC Logo',
      },
      { 
        alt: 'FNC Logo',
      },
      { 
        alt: 'FNC Logo',
      },
      { 
        alt: 'FNC Logo',
      },
    ],
  },
  'Recomendaciones': {
    right: [
      {title: 'Adrián Ciudad Sanz', 
        link1: { href: 'mailto:a.ciudad@universidadeuropea.es', text: 'Email' },
        link2: { href: 'https://www.linkedin.com/in/adrian-ciudad/', text: 'Linkedin' },
      },
      {title: 'Ismael El Hamiti Molina', 
        link1: { href: 'mailto:ielhamiti@educa.madrid.org', text: 'Email' },
        link2: { href: 'https://www.linkedin.com/in/el-hamiti/', text: 'Linkedin' },
      },
      {title: 'Brice Magd', 
        link1: { href: 'mailto:brice.magd@infibail.com', text: 'Email' },
        link2: { href: 'Business Development Manager- INFIBAIL Ibérica', text: 'Linkedin' },
      },

    ],
    left: [
      { 
        description: 'Mentor 2º año ASIR - Universidad Europea Madrid',
      },
      { 
        description: 'Mentor 1er año ASIR - Universidad Europea Madrid',
      },
      { 
        description: 'Business Development Manager- INFIBAIL Ibérica',
      },
    ],
  },
};

const DynamicContent = () => {
  const [selectedOption, setSelectedOption] = useState('Selecciona una opción');
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
              {item.imagen && <img src={item.imagen} alt={item.alt || 'Imagen'} className='imgIcons' />}
              {rightContent[index] && (
                <div className="right-column">
                  <h2>{rightContent[index].title}</h2>
                  <p>{item.fecha}</p>
                  <footer>{item.description}</footer>
                  <p>{rightContent[index].description}</p>
                  {rightContent[index].link1 && rightContent[index].link2 && (
                    <nav id='sublinks-content'>
                      <a  href={rightContent[index].link1.href}>{rightContent[index].link1.text}</a>
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
