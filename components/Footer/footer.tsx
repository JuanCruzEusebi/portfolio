import style from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={style.mainContainer}>
      <Link className={style.link} href={""}>
        About Me <span></span>.
      </Link>
    </div>
  );
}
