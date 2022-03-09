import styles from "/styles/Contact.module.css";
import Image from "next/image";

export default function Contact() {
  function submitContactForm(event) {
    alert("Hello");
    event.preventDefault()
  }
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInner}>
        <div className={styles.contactInformation}>
          <span className={styles.title}>CONTACT US</span>
          <span className={styles.subtitle}>Get in touch!</span>
          <span className={styles.text}>
            Fill in a form and contact us at any time.<br></br> Our support team
            is always there for you! 👋
          </span>
          <div style={{ margin: "27px 0" }} className={styles.contactBox}>
            <div>
              <Image
                alt="location"
                src={"/images/location-white-circle.png"}
                width={32}
                height={32}></Image>
            </div>
            <span className={styles.boxText}>
              Drabantvägen 4, 1294 33 Upplands Väsby, Sverige
            </span>
          </div>
          <div className={styles.contactBox}>
            <div>
              <Image
                alt="location"
                src={"/images/phone-white-circle.png"}
                width={32}
                height={32}></Image>
            </div>
            <span className={styles.boxText}>076 027 41 51</span>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form
            onSubmit={(e) => submitContactForm(e)}
            className={styles.formEntity}>
            <input
              className={styles.inputSmall}
              placeholder="Full Name"
              type="text"
              name="name"></input>
            <input
              className={styles.inputSmall}
              placeholder="Email Address"
              type="text"
              name="email"></input>
            <input
              className={styles.inputSmall}
              placeholder="Subject"
              type="text"
              name="subject"></input>
            <input
              className={styles.inputLarge}
              placeholder="Message"
              type="text"
              name="message"></input>
            <input
              className={styles.formSubmit}
              type="submit"
              value="SUBMIT MESSAGE"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
