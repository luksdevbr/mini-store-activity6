import styles from './ProductCardSkeleton.module.css';

import { useTheme } from '../../contexts/ThemeProvider';

export default function ProductCardSkeleton() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.card} ${theme === 'dark' && styles.dark}`}>
      <div className={`${styles.image} ${theme === 'dark' && styles.dark}`}></div>
      <div className={styles.details}>
        <h1 className={styles.title}>
          <div className={`${styles.titleLine} ${theme === 'dark' && styles.dark}`}></div>
          <div className={`${styles.titleLine} ${styles.titleLineShort} ${theme === 'dark' && styles.dark}`}></div>
        </h1>
        <h2 className={`${styles.price} ${theme === 'dark' && styles.dark}`}></h2>
        <div className={`${styles.rating} ${theme === 'dark' && styles.dark}`}></div> 
        <div className={styles.buttonContainer}>
          <div className={`${styles.button} ${theme === 'dark' && styles.dark}`}></div>
        </div>
      </div> 
    </div>
  );
}
