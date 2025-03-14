const resumeData = {
  profile: {
    name: 'Ashutosh Muni',
    resumeTitle: 'Ashutosh Muni - Resume - 2024',
    email: 'ashutoshmuni1997@gmail.com',
    phoneCountryCode: '+91',
    phoneNumber: '8338982865',
    phoneType: 'Mobile',
    linkedin: 'https://www.linkedin.com/in/ashutoshmuni',
    website: 'https://muniashutosh.github.io/resume',
  },
  professionalSummary: {
    startDate: {
      year: 2019,
      month: 4,
      day: 29,
    },
    yearsOfExperience: '5.10',
    summary:
      'Software Engineer with <time id="experience" datetime="2019-04">${data.professionalSummary.experience}</time> years of experience, adept at delivering high-performance, maintainable, and scalable software solutions. Skilled in system architecture, microservices, and distributed systems, with expertise in writing efficient, bug-free code using best industry practices. Proven track record of collaborating with cross-functional teams to ensure seamless integration and deployment in diverse environments. Strong communication skills, with success in agile teams across geographies. Committed to continuous learning and delivering user-friendly, high-quality software.',
  },
  skills: [
    'Java',
    'Spring Boot',
    'Golang',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'Linux',
    'Istio Service Mesh',
    'Kafka',
    'Angular',
    'React',
    'MySQL',
    'Hibernate',
    'Redis',
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'AWS',
    'Git',
    'Jenkins',
    'Maven',
    'Helm',
    'JUnit',
    'Selenium',
  ],
  workExperience: [
    {
      company: "Lowe's India",
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHoNPNGRZYG-w/company-logo_100_100/company-logo_100_100/0/1630617454317/lowes_india_logo?e=1750291200&v=beta&t=jeZSNBJRdWwxOVrnAK6WwxVFFkmIv6fn7MfcyloIE3s',
      position: 'Senior Software Engineer',
      location: 'Bengaluru, Karnataka, India',
      period: {
        start: '2025-02',
        end: 'Present',
      },
      roles: [],
    },
    {
      company: 'Dell Technologies',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQF0hQrvoqdRNw/company-logo_100_100/company-logo_100_100/0/1725894960637/delltechnologies_logo?e=1750291200&v=beta&t=h85QSGFDuqpSX2wOWSJTrrrayUOj6nelqXfSq8CWe6U',
      position: 'Software Engineer 2',
      location: 'Bengaluru, Karnataka, India',
      period: {
        start: '2023-01',
        end: '2025-02',
      },
      roles: [
        {
          title: 'Software Engineer - Backend',
          tasks: [
            'Collaborated in designing and scaling multi-tenant microservices architecture to support consumer-scale systems, ensuring high availability and performance.',
            'Spearheaded the integration of service mesh architecture to improve security, observability, and traffic management within a microservice ecosystem.',
            'Worked extensively with distributed datastores (MongoDB, Redis) to ensure high-volume data processing and consistency in consumer-scale systems.',
            'Architected and optimized messaging queues using Kafka to improve communication efficiency between microservices and handle asynchronous event processing at scale.',
            'Implemented and maintained CI/CD pipelines that ensure high-quality code delivery with automated testing, security scanning, and continuous integration practices.',
            'Adopted modern engineering best practices with a strong focus on achieving speed and quality through automation, unit testing, and code quality standards.',
            'Developed custom APIs and services using Golang for high-performance systems, focusing on speed, reliability, and scaling through optimized protocols like gRPC.',
            'Mentored junior engineers and shared expertise in microservices, containerization, and modern technologies to improve overall team capability.',
            'Actively participated in design reviews and contributed to architectural decisions, ensuring that all technical solutions aligned with business goals.',
          ],
        },
      ],
    },
    {
      company: 'Accenture in India',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHbx0URQnbCKg/company-logo_100_100/company-logo_100_100/0/1719978199717/accentureindia_logo?e=1750291200&v=beta&t=rrZvm7l9dokrVmqU52wgmZHC1D8V6lcnpHmducCMYFs',
      position: 'Application Development Senior Analyst',
      location: 'Bengaluru, Karnataka, India',
      period: {
        start: '2021-11',
        end: '2023-01',
      },
      roles: [
        {
          title: 'Angular Developer',
          tasks: [
            'Worked as a frontend Angular developer for developing a back office web application for a reputed Italian bank. The app would serve to create, manage and track campaigns through multiple channels.',
            'Responsible for creating reusable angular components that adhered to the W3C AccessibilityStandards. ',
            'Cooperating with the back-end developer in the process of creation of RESTful API.',
            'Coordinated with the devops team in CI pipeline, deployment in AWS EKS, of the containeraized applications.',
            'Taken an active role to create and structure our project to make them easy to maintain.',
            'Took initiative to introduce advance design patterns after discussing with the team and also refactoring old code to adhere to the new standards.',
            'Mentored junior developers on team in expanding Javascript, Angular skillset.',
          ],
        },
      ],
    },
    {
      company: 'Tata Consultancy Services',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGsGR9p4ikS5w/company-logo_100_100/company-logo_100_100/0/1708946550425/tata_consultancy_services_logo?e=1750291200&v=beta&t=S7pRRvEMW4gm64fSyOgkYMKt-ghe_zu-u8svlzTcjqE',
      position: 'Systems Engineer',
      location: 'Bengaluru, Karnataka, India',
      period: {
        start: '2019-04',
        end: '2021-11',
      },
      roles: [
        {
          title: 'Full Stack Java Developer',
          tasks: [
            'Worked as a Full Stack Java Developer for developing end-to-end solution to create a multipage form web app that is used by Financial Advisers authorised by FCA in the UK.',
            'The application includes standalone application, backend application and business services.',
            'Service Oriented base application with agile practice.',
            'Technologies used - Java, HTML, CSS, Javascript, JBOSS, Websphere 9, RESTful services, Maven, Gitlab, Junit.',
          ],
        },
        {
          title: 'SOA Developer',
          tasks: [
            'Worked as a SOA Developer for developing and deploying enhancements for Service oriented based applications.',
            'Technologies used - Java, HTML, CSS, Javascript, Spring Boot, Jenkins, Websphere 9, RESTful services, AngularJS, Maven, CVS.',
          ],
        },
      ],
    },
  ],
  education: [
    {
      course: 'B.Tech in Electrical and Electronics Engineering',
      institution:
        'Institute Of Technical Education and Research, Bhubaneswar, Odisha 751030',
      university: 'SOA Deemed to be University',
      date: '2019',
      marks: '90%',
    },
    {
      course: 'Secondary',
      institution: 'DAV Public School, Basanti Nagar, Rourkela, Odisha 769012',
      university: 'CBSE',
      date: '2015',
      marks: '75%',
    },
    {
      course: 'Matriculation',
      institution:
        'Chinmaya Vidyalaya (E.M.), Gopabandhu Nagar, Chhend, Rourkela, Odisha 769015',
      university: 'ICSE',
      date: '2013',
      marks: '85%',
    },
  ],
};

function generateResumeHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>">
    <title>${data.profile.name} - Resume - ${new Date()
    .toISOString()
    .substring(0, 10)}</title>
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./resume.css?version=nocache">
</head>

<body>
    <main>
        <section class="profile">
            <header class="name">
                <a href="${data.profile.website}">
                    <h1>${data.profile.name}
                        <input type="button" class="no-print" style="position:absolute;opacity:0.05;" value="🖶"
                            onClick="window.print()">
                    </h1>
                </a>
            </header>
            <div class="connect">
                <span class="mail-id">
                    ✉
                    <a href="mailto:${data.profile.email}">${
    data.profile.email
  }</a>
                </span>
                <span class="phone-num print-only">
                    📱
                    <a data-phone-device-type="${
                      data.profile.phoneType
                    }" href="tel:${
    data.profile.phoneCountryCode + data.profile.phoneNumber
  }">${data.profile.phoneNumber}</a>
                </span>
                <span class="linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <rect width="100%" height="100%" fill="white" />
                        <title>LinkedIn</title>
                        <g>
                            <path
                                d="m 20.4 1.5 v 17.4 a 1.5 1.5 90 0 1 -1.5 1.5 h -17.4 a 1.5 1.5 90 0 1 -1.5 -1.5 v -17.4 a 1.5 1.5 90 0 1 1.5 -1.5 h 17.4 a 1.5 1.5 90 0 1 1.5 1.5 z m -14.4 6.3 h -3 v 9.6 h 3 z m 0.27 -3.3 a 1.728 1.728 90 0 0 -1.716 -1.74 h -0.054 a 1.74 1.74 90 0 0 0 3.48 h 0 a 1.728 1.728 90 0 0 1.77 -1.686 z m 11.13 7.068 c 0 -2.886 -1.836 -4.008 -3.66 -4.008 a 3.42 3.42 90 0 0 -3.036 1.548 h -0.084 v -1.308 h -2.82 v 9.6 h 3 v -5.106 a 1.992 1.992 90 0 1 1.8 -2.148 h 0.114 c 0.954 0 1.662 0.6 1.662 2.112 v 5.142 h 3 z"
                                fill="#0a66c2"></path>
                        </g>
                    </svg>
                    <a target="_blank" href="${
                      data.profile.linkedin
                    }">${data.profile.linkedin.substring(
    data.profile.linkedin.indexOf('linkedin')
  )}</a>
                </span>
            </div>
        </section>

        <section class="prof-summary">
            <header>
                <h2>Professional Summary</h2>
            </header>
            <div>
                ${data.professionalSummary.summary}
            </div>
        </section>

        <section class="skills">
            <header>
                <h2>Skills</h2>
            </header>
            <ul>
                ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
            </ul>
        </section>

        <section class="work-experience">
            <header>
                <h2>Work Experience</h2>
            </header>
            ${renderWorkExperience(data.workExperience)}
        </section>

        <section class="education">
            <header>
                <h2>Education</h2>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Institution</th>
                        <th>Date</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                ${renderEducation(data.education)}
                    
                </tbody>
            </table>
        </section>
    </main>

    <script>
        let startDate = new Date(${data.professionalSummary.startDate.year}, ${
    data.professionalSummary.startDate.month
  } - 1, ${data.professionalSummary.startDate.day});
        let todayDate = new Date();

        let experience = Math.round(((todayDate - startDate ) / (24*60*60*1000*365))*10)/10

        let experienceSpan = document.getElementById("experience");
        experienceSpan.innerHTML = experience;
    </script>
</body>

</html>
`;
}

const resumeHTML = generateResumeHTML(resumeData);
document.write(resumeHTML); // Renders the HTML on the page

function renderWorkExperience(workExperience) {
  return workExperience
    .map(
      (work) => `
  <article class="work">
      <header>
          <img width="48" height="48" src="${work.logo}" alt="${
        work.company
      } logo">
          <div>
              <div class="company">
                  <h2>${work.company}</h2>
              </div>
              <div class="position"><strong>${work.position}</strong></div>
              <div class="period">
                  <time class="start" datetime="${work.period.start}">${
        work.period.start
      }</time> to <time
                      class="end" datetime="${work.period.end}">${
        work.period.end
      }</time>
              </div>
              <div class="location">${work.location}</div>
          </div>
      </header>
      ${renderRoles(work.roles)}
       
     
  </article>
  `
    )
    .join('');
}

function renderRoles(roles) {
  return roles
    .map(
      (role) => `
  
    <section class="projects">
     <h3>${role.title}</h3>
     <ul>
         ${role.tasks.map((task) => `<li>${task}</li>`).join('')}
     </ul>
    </section>
  `
    )
    .join('');
}

function renderEducation(education) {
  return education
    .map(
      (edu) => `
  <tr>
      <td class="course">${edu.course}</td>
      <td class="institution">${edu.institution}</td>
      <td class="university" style="display:none">${edu.university}</td>
      <td class="dates"><time datetime="${edu.date}">${edu.date}</time></td>
      <td class="mark">${edu.marks}</td>
  </tr>
  `
    )
    .join('');
}

function printConfig() {
  var config = [
    {
      browser: 'edge',
      paperSize: 'A4',
      scale: 100,
      marginTop: '0.1"',
    },
  ];
}
