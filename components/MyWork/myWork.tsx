import style from "./mywork.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MyWork() {
  return (
    <div className={style.mainContainer}>
      <Image
        src={"/imgs/Frame1.png"}
        alt="'img"
        width={500}
        height={500}
        className={style.img}
      />
      <Image
        src={"/imgs/Frame2.png"}
        alt="'img"
        width={400}
        height={400}
        className={style.img}
      />
      <Image
        src={"/imgs/Frame3.png"}
        alt="'img"
        width={400}
        height={400}
        className={style.img}
      />
    </div>
  );
}
