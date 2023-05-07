import style from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={style.mainContainer} id="form">
      <div className={style.mainWrapper}>
        <div>
          <h1>Let's get in touch!</h1>
        </div>
        <div>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}
