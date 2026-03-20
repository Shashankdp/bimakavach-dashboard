import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/Logotype.png" alt="BimaKavach" width={210} height={24} />
    </header>
  );
}