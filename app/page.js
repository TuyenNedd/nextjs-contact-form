import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.description}>
          We're excited to hear from you! Have a question or want to get in touch?
        </p>
        <Link href="/contact" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </main>
  );
}