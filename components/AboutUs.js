import SectionTitle from "./SectionTitle";
import styles from "/styles/AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <SectionTitle title={"About Us"}></SectionTitle>
      <div className={styles.aboutUsContent}>
        <div className={styles.aboutUsItem}>
          <Image
            alt="about us"
            height={554}
            width={838}
            src={"/images/aboutUs1.jpg"}></Image>
          <div className={styles.textContainer}>
            <span className={styles.title}>Always ready and prepared</span>
            <div className={styles.divider}></div>
            <span className={styles.content}>
              A tristique aenean vestibulum nisl, non proin. Aenean tempus, eget
              libero tortor amet in pellentesque morbi. Viverra velit, quis
              varius ac tempus. Arcu ac, vivamus varius fermentum fames eu at
              sit. Netus in etiam mi porta in posuere. Aenean ut lobortis eget
              venenatis eget eu et.
            </span>
          </div>
        </div>
        <div className={styles.aboutUsItem}>
          <div className={styles.textContainer}>
            <span className={styles.title}>Making food for the soul</span>
            <div className={styles.divider}></div>
            <span className={styles.content}>
              Leo vitae augue lectus dignissim magna non id augue vel. Sit nulla
              sit vitae odio quisque nulla platea. Sem mauris et imperdiet quis
              dignissim. A diam nibh magna viverra adipiscing etiam id.
              Phasellus malesuada lorem sed in nisl id massa. Id eu id et cursus
              risus id sit mus neque ultrices a.
            </span>
          </div>
          <Image
            priority="true"
            alt="about us"
            height={554}
            width={838}
            src={"/images/aboutUs2.jpg"}></Image>
        </div>
      </div>
    </div>
  );
}
