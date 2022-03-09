import SectionTitle from "./SectionTitle";
import styles from "/styles/History.module.css";
import { getHistoryData } from "../lib/history";
import Image from "next/image"

export default function History() {
  const historyData = getHistoryData();
  return (
    <div className={styles.container}>
      <SectionTitle style={{paddingBottom: "50px"}} title={"History"}></SectionTitle>
      <div className={styles.contentContainer}>
        {historyData.map(({ title, time, text, image }, index) => (
          <div className={styles.historyItem} key={index}>
              <div style={{position: "absolute", top: "-10px"}}>

              <Image alt="eclipse" height={16} width={16} src={"/images/eclipse-border-white.png"}></Image>
              </div>
            <span className={styles.historyItemTitle}>{title}</span>
            <span className={styles.historyItemTime}>{time}</span>
            <span className={styles.historyItemText}>{text}</span>
              <Image lay priority width={432} height={360} alt={title} src={image}></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
