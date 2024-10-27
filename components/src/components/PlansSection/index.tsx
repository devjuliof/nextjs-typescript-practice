import CardPlan from "@/ui/CardPlan";
import styles from "./index.module.css";

export default function PlansSection() {
  const benefits = [
    { description: "1 curriculo (creditos)", available: true },
    { description: "Design responsivo", available: true },
    { description: "Suporte por 30 dias", available: true },
    { description: "Otimização para SEO", available: false },
    { description: "1 ano de dominio (.com ou .com.br)", available: false },
    { description: "Entrega em até 7 dias", available: false },
  ];

  return (
    <>
      <section id="plans-section" className={styles["plans-section"]}>
        <CardPlan name={"Free"} price={"R$ 0,00/mês"} benefits={benefits} />
        <CardPlan
          name={"Iniciante"}
          price={"R$ 9,90/mês"}
          benefits={benefits}
        />
        <CardPlan
          name={"Profissional"}
          price={"R$ 19,90/mês"}
          benefits={benefits}
        />
      </section>
    </>
  );
}
