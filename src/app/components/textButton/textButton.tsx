import Link from "next/link";
import styles from "./textButton.module.css";
import { ReactNode } from "react";

interface TextButtonProps {
  href: string;
  children?: ReactNode;
}

export function TextButton({href, children}: TextButtonProps) {
  return <span className={styles.textButton}><Link href={href}>{children}<div className={styles.textButtonGap}></div>→</Link></span>;
}
