import style from "./main.module.scss";
import MyWork from "../MyWork/myWork";
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import { useState } from "react";

export default function Main() {
  const [data, setData] = useState(false);

  const pull_data = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <div className={style.mainContainer}>
      <div className={`${style.mainWrapper} ${data ? style.activeMain : ""}`}>
        <Header func={pull_data}></Header>
        <MyWork></MyWork>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}
