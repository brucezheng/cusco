import { ReactNode } from "react";
import styles from "./textShadow.module.css";

export interface TextShadowProps {
  children: ReactNode;
  color?: string;
}

export function TextShadow({children, color}: TextShadowProps) {
  return <span data-color={color} className={styles.outline}>
    <span className={styles.outlineMain}>{children}</span>
    <span className={styles.outlineOuter}>{children}</span>
    <span className={styles.outlineInner}>{children}</span>
  </span>
}