import Image from "next/image";
import styles from "./page.module.css";
import cx from "classnames";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Big Bear</h1>
        <h1 className={styles.subtitle}>Conditions</h1>
      </div>
      <div className={styles.conditionsContainer}>
        <a href="#" className={styles.conditionsLink}>
          <h2 className={cx(styles.conditionsTitle, styles.weather)}>
            Weather
          </h2>
        </a>
        <a href="#" className={styles.conditionsLink}>
          <h2 className={cx(styles.conditionsTitle, styles.roads)}>Roads</h2>
        </a>
      </div>
      <div className={styles.footer}>
        <h3 className={styles.footerTitle}>Big Bear Conditions</h3>
        <div className={styles.footerContent}>
          <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubTitle}>Menu</h4>
              <div className={styles.footerItemContainer}>
                <a href="#" className={styles.footerItemLink}>
                  Weather
                </a>
              </div>
              <div className={styles.footerItemContainer}>
                <a href="#" className={styles.footerItemLink}>
                  Roads
                </a>
              </div>
              <div className={styles.footerItemContainer}>
                <a href="#" className={styles.footerItemLink}>
                  Contact
                </a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubTitle}>Social</h4>
              <div className={styles.footerItemContainer}>
                <a href="#" className={styles.footerItemLink}>
                  Instagram
                </a>
              </div>
              <div className={styles.footerItemContainer}>
                <a href="#" className={styles.footerItemLink}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className={styles.shareContainer}>
            <h4 className={styles.footerSubTitle}>Let&apos;s stay connected</h4>
            <p className={styles.footerItem}>Reach out about any conditions</p>
            <p className={styles.footerItem}>or just to say hello!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
