import style from '../styles/Home.module.css';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div className={style.wrapper}>

      <div className={style.contacs}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>ГРИНЬКО ОЛЬГА</h1>
          <p>Республика: Беларусь</p>
          <p>Телефон: +37544-7502021</p>
          <p>E-mail: grinkowork17@mail.ru</p>
        </div>
      </div>

      <div>
        <h1 className={style.title}>ОПЫТ РАБОТЫ</h1>
        <div className={style.work}>
          <h2>Должность</h2>
          <p>Компания</p>
          <p>Период</p>
          <p>Опишите, в чем заключалась ваша работа,
            чем вы занимались на своей должности.
          </p>
        </div>
      </div>

      <div className={style.contentBlok}>
        <h1 className={style.content}>НАВЫКИ</h1>

        <div className={style.skills}>

        </div>

        <div className={style.progress}>
          <div className={style.education}>
            <div className={style.imglogo1}></div>
            <div className={style.list1} >
              <p>Оброзование</p>
              <p>1.средне-специальное</p>
              <p>2.высшее</p>
            </div>
          </div>

          <div className={style.language}>
            <div className={style.imglogo2}></div>
            <div className={style.list2}>
              <p>Языки</p>
              <p>1.Русский</p>
              <p>2.Английский</p>
            </div>
          </div>
        </div>

        <div className={style.portfolio}>
          <div className={style.imgqr}></div>
          <div className={style.navig}>
            <h1>MY PORTFOLIO ON DRIBBLE</h1>
            <p>dribbble.com/pashbe</p>
          </div>
        </div>
      </div>
    </div>
  )
}
