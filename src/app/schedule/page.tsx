import styles from "./page.module.css";
import { TextShadow } from "../components/textShadow/TextShadow";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <div><TextShadow color="green">Schedule {`[Under Construction]`}</TextShadow></div>
        </div>
        <span>Sorry! I'm still working on this hehe</span>
      </div>
    </main>
  );
}
