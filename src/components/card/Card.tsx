import { ReactNode } from "react";
import styles from "./card.module.css";

export interface CardProps {
  children?: ReactNode;
  width?: string;
  height?: string;
}

export function Card({children, width, height}: CardProps) {
  return <div style={{width, height}} className={styles.card}>{children}</div>
}