import style from '../styles/Home.module.css';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacs}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>Гринько Ольга</h1>
          <p>Зуспублика: Беларусь</p>
          <p>Телефон: +37544-7502021</p>
          <p>E-mail: olgagrinko.87@mail.ru</p>
        </div>
      </div>
    </div>
  )
}
