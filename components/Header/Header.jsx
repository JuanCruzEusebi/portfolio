import { useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";

export default function Header(props) {
  const [pressed, setPressed] = useState(false);

  function ContactForm() {
    setPressed(true);
    return props.func(pressed);
  }

  return (
    <div className={style.linkContainer}>
      <Link className={style.link} href={""} onClick={ContactForm}>
        Contact .
      </Link>
      <h1 className={style.heading}>
        Hi! My name is Juan, <br /> i make websites <br /> sometimes
      </h1>
      <Link className={style.link} href={""}>
        Work .
      </Link>
    </div>
  );
}
