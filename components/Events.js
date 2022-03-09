import { getEventsData } from "../lib/events";
import styles from "../styles/Events.module.css";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import EventItem from "./EventItem";

export default function Events() {
  const events = getEventsData();
  return (
    <div className={styles.eventsContainer}>
      <div>
        <SectionTitle title={"Events"}></SectionTitle>
      </div>
      <div className={styles.eventsInner}>
        <div className={styles.borderLeft}>
          <Image
            src={"/images/border-left.png"}
            width={56}
            height={592} alt="border-left"></Image>
        </div>
        <div className={styles.eventDiv}>
          {events.map(({ id, title, time, text, buttons, image }) => (
            <EventItem key={id} event={events[id]}></EventItem>
          ))}
        </div>
        <div className={styles.borderRight}>
          <Image
            src={"/images/border-right.png"}
            width={56}
            height={592} alt="border-right"></Image>
        </div>
      </div>
    </div>
  );
}
