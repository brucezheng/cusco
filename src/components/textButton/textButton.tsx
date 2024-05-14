import Link from "next/link";
import styles from "./textButton.module.css";
import { ReactNode } from "react";

interface TextButtonProps {
  href: string;
  children?: ReactNode;
  disabled?: boolean;
}

export function TextButton({href, children, disabled}: TextButtonProps) {
  if (disabled) {
    return <span data-disabled="true" className={styles.textButton}>{children}<div className={styles.textButtonGap}></div>→</span>
  }
  return <span className={styles.textButton}><Link href={href}>{children}<div className={styles.textButtonGap}></div>→</Link></span>;
}
