import styles from "./index.module.css";
import Image from "next/image";
import checkIcon from "@/../public/images/check_icon2.png";
import noIcon from "@/../public/images/no_icon.png";

interface Benefit {
  description: string;
  available: boolean;
}

interface CardPlanProps {
  name: string;
  price: string;
  benefits: Benefit[];
}

export default function CardPlan({ name, price, benefits }: CardPlanProps) {
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className={styles.benefitItem}
            style={{ color: benefit.available ? "inherit" : "#ccc" }} // Cor condicional
          >
            <Image
              src={benefit.available ? checkIcon : noIcon}
              alt={
                benefit.available
                  ? "Benefício disponível"
                  : "Benefício não disponível"
              }
              width={20}
              height={20}
              className={styles.icon}
            />
            {benefit.description}
          </li>
        ))}
      </ul>
      <button>{`Plano ${name}`}</button>
    </article>
  );
}
