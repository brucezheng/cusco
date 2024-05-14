import { ReactNode } from "react";
import styles from "./card.module.css";

export interface CardProps {
  children?: ReactNode;
  width: string;
}

export function Card({children, width}: CardProps) {
  return <div style={{width}} className={styles.card}>{children}</div>
}