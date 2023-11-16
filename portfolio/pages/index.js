import style from '../styles/Home.module.css';
// import '../styles/globals.css';

export default function Home() {
  const array = [
    {      
      Job_title: "FullStack",
      Company: "HSC Technology",
      time_period: "2022 - 2023",
      duty: "Development and maintenance of front-end and back-end parts of client-server web applications using the technologies specified in the skills section"
    }
  ];

  const result1 = array.map((elem) => (
    <div className={style.workelem}>
      <h2>{elem.Job_title}</h2>
      <p>{elem.Company}</p>
      <p>{elem.time_period}</p>
      <p>{elem.duty}</p>
    </div>
  ));

  return (
    <div className={style.wrapper}>

      <div className={style.contacs}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>GRINKO OLGA</h1>
          <p>Based: Republic of Belarus</p>
          <p>Phone: +37544-7502021</p>
          <p>E-mail: grinkowork17@mail.ru</p>
        </div>
      </div>

      <div>
        <h1 className={style.title}>Work Experience</h1>
        <div className={style.work}>{result1}</div>
      </div>

      <h1 className={style.content}>Skills</h1>
      <div className={style.skills}>

        <div className={style.skillsblok}>
          <div className={style.block}>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Node.js</p>
            <p>React</p>
          </div>
          <div className={style.block}>
            <p>Express.js</p>
            <p>SQL/MySQL</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </div>
          <div className={style.block}>
            <p>HTML5</p>
            <p>CSS/SCSS</p>
            <p>Redux</p>
            <p>Redux Toolkit</p>
          </div>
        </div>
      </div>

      <div className={style.progress}>

        <div className={style.education}>
          <div className={style.imglogo1}></div>
          <div className={style.list} >
            <p>Education</p>
            <p>"Bobruisk State Agrarian and Economic College"</p>
            <p>"Belarusian State Agricultural Academy
              of the Order of the October Revolution and
              the Red Banner of Labor"
            </p>
            <p>HShcool</p>
          </div>
        </div>

        <div className={style.language}>
          <div className={style.imglogo2}></div>
          <div className={style.list}>
            <p>Language</p>
            <p>English A1</p>
            <p>Russian</p>
          </div>
        </div>
      </div>

      <div className={style.portfolio}>
        <div className={style.imgqr}></div>
        <div className={style.navig}>
          <h1>MY PORTFOLIO ON GITHUB</h1>
          <a href="https://github.com/olgagrinko-dev">https://github.com/olgagrinko-dev</a>
        </div>
      </div>
    </div>
  )
}
