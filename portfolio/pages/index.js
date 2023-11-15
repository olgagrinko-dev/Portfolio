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
          <p>E-mail: olgagrinko.87@mail.ru</p>
        </div>
      </div>

      <h1 className={style.workExperience}>ОПЫТ РАБОТЫ</h1>

      <div className={style.experience}>
        <h2>Должность</h2>
        <p>Компания</p>
        <p>Период</p>
        <p>Опишите, в чем заключалась ваша работа,
          чем вы занимались на своей должности.
        </p>
      </div>

      <h1 className={style.content}>НАВЫКИ</h1>

      <div className={style.skills}>

      </div>

      <div className={style.progress}>
        <div className={style.education}>
          <div className={style.imglogo1}></div>
          <div className={style.list1} ></div>
        </div>

        <div className={style.language}>
          <div className={style.imglogo2}></div>
          <div className={style.list2}></div>
        </div>
      </div>

      <div className={style.portfolio}>

      </div>

    </div>
  )
}
