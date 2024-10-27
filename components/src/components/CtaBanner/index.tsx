"use client";

import { useEffect, useState } from "react"; // Adicione useEffect e useState
import Image from "next/image";
import banner from "@/../public/images/banner.png";
import styles from "./index.module.css";
import WhiteButton from "@/ui/WhiteButton";
import BlackButton from "@/ui/BlackButton"; // Importando o BlackButton

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 901); // Verifica se a largura da tela é menor que 901px
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função para definir o estado inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="banner" className={styles.banner}>
      <Image alt="banner" src={banner} className={styles.image} />
      <div className={styles.buttonContainer}>
        {isMobile ? (
          <BlackButton text={"Experimente o Plano Free"} /> // Substitui pelo BlackButton
        ) : (
          <WhiteButton text={"Experimente o Plano Free"} />
        )}
      </div>
    </section>
  );
}
