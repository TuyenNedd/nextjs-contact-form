import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>
        <ContactForm />
      </div>
    </main>
  );
}