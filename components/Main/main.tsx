import style from "./main.module.scss";
import Header from "../Header/header";
import MyWork from "../MyWork/myWork";
import Footer from "../Footer/footer";

export default function Main() {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainWrapper}>
        <Header></Header>
        <MyWork></MyWork>
        <Footer></Footer>
      </div>
    </div>
  );
}
