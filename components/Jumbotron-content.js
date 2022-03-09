import styles from "../styles/Jumbotron-Content.module.css";
import Image from "next/image";
import Link from "next/link";

export default function JumbotronContent() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div>
          <Link href={"/"}>
            <a>HOME</a>
          </Link>
          <Link href={"/"}>
            <a>GALLERY</a>
          </Link>
          <Link href={"/"}>
            <a>RESTAURANTS</a>
          </Link>
        </div>
        <div>
          <Image
            src="/images/Logo.png"
            width={125}
            height={120}
            alt="indian-food-logo"></Image>
        </div>
        <div>
          <Link href={"/"}>
            <a>HISTORY</a>
          </Link>
          <Link href={"/"}>
            <a>ABOUT US</a>
          </Link>
          <Link href={"/"}>
            <a>CONTACT</a>
          </Link>
        </div>
      </div>
      <div className={styles.jumbotronText}>
        <Image
          src="/images/jumbotron-text.png"
          alt="Best indian food in Vasteras"
          width={794}
          height={270}></Image>
      </div>
      <div className={styles.carouselControls}>
        <div className={styles.carouselDotsActive}></div>
        <div className={styles.carouselDots}></div>
        <div className={styles.carouselDots}></div>
      </div>
      <div className={styles.carouselCTAContainer}>
        <div className={styles.carouselCTA}>
          <div className={styles.carouselCtaIcon}>
            <Image
              alt="clock"
              width={54}
              height={54}
              src={"/images/clock.png"}></Image>
          </div>
          <div className={styles.carouselCTAContent}>
            <h4>ÖPPETTIDER</h4>{" "}
            <button>
              IDAG: 08:00 - 16:00
              <div className={styles.circle}>
                <Image
                  src={"/images/dropdown-arrow.png"}
                  width={10}
                  height={6}
                  alt="basket"></Image>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.carouselCTA}>
          <div className={styles.carouselCtaIcon}>
            <Image
              alt="location"
              width={54}
              height={54}
              src={"/images/location-white-circle.png"}></Image>
          </div>
          <div className={styles.carouselCTAContent}>
            <h4>ADRESS</h4>{" "}
            <p>Drabantvägen 4, 194 33 Upplands Väsby, Sverige</p>
          </div>
        </div>
        <div className={styles.carouselCTA}>
          <div className={styles.carouselCtaIcon}>
            <Image
              alt="takeaway"
              width={54}
              height={54}
              src={"/images/cuttlery2.png"}></Image>
          </div>
          <div className={styles.carouselCTAContent}>
            <h4>TAKEAWAY?</h4>
            <button>
              <Image
                alt="basket"
                src={"/images/basket.png"}
                width={22}
                height={19}></Image>{" "}
              BESTÄLL TAKEAWAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
