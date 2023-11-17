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
      <div className={style.skillsblok}>
        <div className={style.block}>
          {['JavaScript', 'TypeScript', 'Node.js', 'React'].map((el, index) => <p key={index}>{el}</p>)}
        </div>
        <div className={style.block}>
          {['Express.js', 'SQL/MySQL', 'PostgreSQL', 'MongoDB'].map((el, index) => <p key={index}>{el}</p>)}
        </div>
        <div className={style.block}>
          {['HTML5', 'CSS/SCSS', 'Redux', 'Redux Toolkit'].map((el, index) => <p key={index}>{el}</p>)}
        </div>
      </div>


      <div className={style.progress}>

        <div className={style.education}>
          <div className={style.imglogo1}></div>
          <div className={style.list} >
            {['Education', 'Bobruisk State Agrarian and Economic College', 'Belarusian State Agricultural Academy of the Order of the October Revolution and the Red Banner of Labor', 'HSchool'].map((el, index) => <p key={index}>{el}</p>)}
          </div>
        </div>

        <div className={style.language}>
          <div className={style.imglogo2}></div>
          <div className={style.list}>
            {['Language', 'English A1', 'Russian'].map((el, index) => <p key={index}>{el}</p>)}
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
