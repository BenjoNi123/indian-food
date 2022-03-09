import Image from "next/image";
import styles from "/styles/Events.module.css";

export default function EventItem({ event }) {
  return (
    <div className={styles.eventItem}>
      {event.image != null && (
        <Image src={event.image} width={318} height={192} alt={event.title} />
      )}

      <div className={styles.innerPaddingTop}>
        <span className={styles.eventTitle}>{event.title}</span>
        <br></br>
        <span className={styles.eventTime}>{event.time}</span>
      </div>
      <div className={styles.innerPaddingBottom}>
        <span>{event.text}</span>
        <div className={event.buttons.length < 2 ? styles.eventButtons : styles.twoButtons}>
          {event.buttons.map((btn, index) => (
            <button key={index}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
