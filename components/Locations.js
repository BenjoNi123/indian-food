import SectionTitle from "./SectionTitle";
import { getLocationsData } from "../lib/locations";
import Image from "next/image";
import styles from "/styles/Locations.module.css"

export default function Locations() {
  const locations = getLocationsData();
  return (
    <div style={{paddingTop: "80px"}}>
      <SectionTitle title={"Our locations"}></SectionTitle>
      <div style={{display: "flex", justifyContent: "space-between",padding: "0 268px", marginTop: "50px"}}>
        {locations.map(
          ({
            type,
            name,
            text,
            address,
            email,
            phone,
            work_hours,
            image
          },index) => (
            <div style={{ maxWidth:"660px", margin: "0 12px"}} key={index}>
              <div>
                <Image priority width={660} height={280} src={image} alt={name}></Image>
              </div>
              <div className={styles.locationsInner}>
                <div >
                  <p>{type}</p>
                  <h2>{name}</h2>
                  <span className={styles.description}>{text}</span>
                </div>
                <div className={styles.contactGroup}>
                    <div><Image width={12} height={13} src={"/images/location.png"} alt={address}></Image> <span className={styles.contactItem}>{address}</span> </div>
                    <div><Image width={13} height={11} src={"/images/email.png"} alt={email}></Image> <span className={styles.contactItem}>{email}</span> </div>
                    <div><Image width={9} height={13} src={"/images/phone.png"} alt={phone}></Image> <span className={styles.contactItem}>{phone}</span></div>
                </div>
                <div className={styles.openingHoursTitle}>
                  <Image src={"/images/clock.png"} width={14} height={14} alt="opening hours"></Image>
                  <span style={{padding:"0 16px 0 10px" }}>Opening Hours</span><div className={styles.greyLine}></div></div>
                { <div style={{display: "flex", flexWrap: "wrap"}}>
                    {work_hours.map(({day, time},index) => (
                        <div className={styles.dayItem} key={index}><span className={styles.dayItemDay}>{day}</span><span className={styles.dayItemTime}>{time}</span></div>
                    ))}
                </div>}
                <button className={styles.buttonCTA}><Image alt="cuttlery" width={19} height={19} src={"/images/cuttlery.png"}></Image><span style={{paddingLeft: "10px"}}>VISA MENY</span></button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
