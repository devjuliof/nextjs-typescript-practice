import BlackButton from "@/ui/BlackButton";
import styles from "./index.module.css";

export default function HeroSection() {
  return (
    <section id="hero-section" className={styles["hero-section"]}>
      <article className={styles["hero-text"]}>
        <div className={styles["div-text"]}>
          <h1>
            Crie seu currículo <strong>PERSONALIZADO</strong> para a vaga que
            você está aplicando!
          </h1>
          <p>
            Carregue seu currículo e a descrição da vaga para uma personalização
            instantânea!
          </p>
        </div>
        <BlackButton text={"Personalizar Currículo"} />
      </article>
      <article className={styles["hero-img"]}>
        <div
          style={{
            width: "450px",
            height: "450px",
            backgroundColor: "#D9D9D9",
          }}
        ></div>
      </article>
    </section>
  );
}
