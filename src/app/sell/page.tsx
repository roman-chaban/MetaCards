import type { Metadata } from 'next'
import styles from './Sell.module.scss'

export const metadata: Metadata = {
  title: 'DivSea | Sell'
}

export default function Sell() {
  return <section className={styles.sell}></section>
}
