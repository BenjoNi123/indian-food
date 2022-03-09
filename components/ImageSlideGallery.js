import Image from "next/image";
import styles from "/styles/ImageSlideGallery.module.css";
import { useState } from "react";
export default function ImageSlideGallery() {
  const imageLinks = [["/images/gallery1.jpg","/images/gallery2.jpg"], ["/images/gallery3.jpg"], ["/images/gallery4.jpg","/images/gallery5.jpg"],["/images/gallery6.jpg"]];
  const [translation, setTranslation] = useState(-330);
  const translate  = (amount)=> {
    let newAmount = amount + translation;
    if(newAmount > 0){
      newAmount = 0;
    }
    if(newAmount < -785) {
      newAmount = -785
    }
    setTranslation(newAmount)
  }

  return (
    <div className={styles.galleryContainer}>
      
      <div style={{transform: `translateX(${translation}px)`}} className={styles.galleryInner}>
        {imageLinks.map((urls, index) => (
          <div className={styles.imageContainer} key={index}>{urls.map((url, id) =>(
            <Image width={660} quality={100} objectFit="cover" height={640/urls.length} alt={url} src={url} key={id}></Image>
          ))}</div> 
        ))}
      </div>
      <div onClick={() => translate(-200)} className={styles.galleryControlsDesno}><Image alt="left" width={56} height={56} src={"/images/galleryRight.png"}></Image></div>
      <div onClick={() => translate(200)} className={styles.galleryControlsLijevo}><Image alt="right" width={56} height={56} src={"/images/galleryLeft.png"}></Image></div>
    </div>
  );
}
