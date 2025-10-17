import styles from "./Card.module.scss";
import Image from "next/image";

export type CardType = {
  id: string;
  title: string;
  text: string;
  imageSrc: string;
};

export type CardProps = CardType;

export function Card({ title, text, imageSrc }: CardProps) {
  return (
    <div className={styles.card} data-test="Card">
      <Image src={imageSrc} alt="" fill={true} sizes="300px" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
