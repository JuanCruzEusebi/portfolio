import style from "./mywork.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MyWork() {
  function Link() {}

  return (
    <div className={style.wrapper}>
      <div className={style.mainContainer}>
        {/* <Image
        src={"/imgs/FrameWhite.png"}
        alt="'img"
        width={500}
        height={500}
        className={style.img}
      /> */}

        <div className={style.circle}>
          <h1 className={style.circleHeading}>ForzaGym</h1>
        </div>
        <div className={style.circle}>
          <h1 className={style.circleHeading}>
            Nuevos <br /> Servicios
          </h1>
        </div>
        <div className={style.circle}>
          <h1 className={style.circleHeading}>WineNot?</h1>
        </div>
      </div>
    </div>
  );
}
