import { ReactNode } from "react";
import styles from "./page.module.css";

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
      </div>
    </main>
  );
}

interface TextShadowProps {
  children: ReactNode;
}

function TextShadow({children}: TextShadowProps) {
  return <span className={styles.outline}>
    <span className={styles.outlineMain}>{children}</span>
    <span className={styles.outlineOuter}>{children}</span>
    <span className={styles.outlineInner}>{children}</span>
  </span>
}