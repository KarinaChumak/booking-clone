import styles from './HotelGallery.module.css';

function HotelGallery({ hotel }) {
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.firstImageRow}>
        <div className={styles.imageGrid}>
          <img src={hotel.images[0]} alt="" />

          <img
            src={hotel.image}
            alt=""
            className={`${styles.imageGridCol2} ${styles.imageGridRow2}`}
          />
          <img src={hotel.images[1]} alt="" />
        </div>
      </div>
      <div className={styles.secondImageRow}>
        {hotel.images.map((image, i) => (
          <img key={i} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default HotelGallery;
