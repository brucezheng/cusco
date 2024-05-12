import { ReactNode } from "react";
import styles from "./page.module.css";
import { TextShadow } from "../../components/textShadow/TextShadow";
import { TextButton } from "../../components/textButton/textButton";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <div><TextShadow color="green">About {`[Under Construction]`}</TextShadow></div>
        </div>
        <span>Sorry! I'm still working on this hehe</span>
        <TextButton href="/schedule">See the itinerary</TextButton>
      </div>
    </main>
  );
}
