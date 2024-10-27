import styles from "./index.module.css";
import Image from "next/image";
import resultImage from "@/../public/images/result_image.png";
import BlackButton from "@/ui/BlackButton";

export default function BenefitsSection() {
  return (
    <section id="benefits-section" className={styles["benefits-section"]}>
      <article className={styles.result}>
        <Image
          alt=""
          src={resultImage}
          width={444}
          height={705}
          className={styles.image}
          layout="responsive"
        ></Image>
      </article>
      <article className={styles.benefits}>
        <h1>
          <strong>AUMENTE SUAS CHANCES</strong> de conseguir sua vaga dos
          sonhos!
        </h1>
        <ul className={styles.benefitsList}>
          <li>
            <b>Personalização estratégica:</b> Destaque suas habilidades e
            experiências mais relevantes para a vaga especifíca.
          </li>
          <li>
            <b>Primeira impressão profissional:</b>Transmita uma imagem de
            profissionalismo e dedicação logo no início
          </li>
          <li>
            <b>Adequação às exigências:</b> Demonstre que você entende
            exatamente o que o recrutador procura.
          </li>
          <li>
            <b>Economize tempo:</b> Tenha um currículo otimizado e pronto em
            minutos.
          </li>
        </ul>
        <BlackButton text={"Personalizar Currículo"} />
      </article>
    </section>
  );
}
