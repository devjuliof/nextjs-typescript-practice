import Image from "next/image";
import logo from "@/../public/images/logo.png";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="Logo" width={48} height={48} />
      <h2>Curriculo.xyz</h2>
    </header>
  );
}
