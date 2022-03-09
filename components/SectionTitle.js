import { getSectionTitlesData } from "../lib/sectionTitles";
import styles from "/styles/SectionTitle.module.css";
import Image from "next/image";

export default function SectionTitle({ title }) {
  const titleData = getSectionTitlesData(title);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{titleData.title}</h1>
        <p>{titleData.text}</p>
      </div>
      <Image
        src={"/images/SectionTitleBorder-bottom.png"}
        width={160}
        height={15}
        alt="Title border"></Image>
    </div>
  );
}
