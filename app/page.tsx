import styles from "./page.module.css"
import cx from "classnames"

import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Big Bear Conditions | Weather and Roads",
  description:
    "Big Bear Conditions is a website that provides up-to-date weather and road conditions for Big Bear, California.",
}

export default function Home() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Big Bear</h1>
        <h1 className={styles.subtitle}>Conditions</h1>
      </div>
      <div className={styles.conditionsContainer}>
        <Link href="/weather" className={styles.conditionsLink}>
          <h2 className={cx(styles.conditionsTitle, styles.weather)}>
            Weather
          </h2>
        </Link>
        <Link href="/roads" className={styles.conditionsLink}>
          <h2 className={cx(styles.conditionsTitle, styles.roads)}>Roads</h2>
        </Link>
      </div>
    </div>
  )
}
