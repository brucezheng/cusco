import styles from "./page.module.css";
import { TextShadow } from "../components/textShadow/TextShadow";
import { TextButton } from "../components/textButton/TextButton";

const RSVP_LINK = "https://forms.gle/BrtkuYS6Tqhhvi1g8";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <div>Bruce's <TextShadow>30th</TextShadow></div>
          <div><TextShadow>Cusco</TextShadow>, Peru</div>
          <div>Sep <TextShadow>6-8</TextShadow>, 2024</div>
        </div>
        <a className={styles.button} href={RSVP_LINK}>RSVP</a>
        <TextButton href="/about">Learn More</TextButton>
      </div>
    </main>
  );
}