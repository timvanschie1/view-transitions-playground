"use client";

import { ViewTransition } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";
import Image from "next/image";

export type CardType = {
  id: string;
  title: string;
  text: string;
  imageSrc: string;
};

export type CardProps = CardType;

export function Card({ id, title, text, imageSrc }: CardProps) {
  return (
    <ViewTransition name={`card_${id}`}>
      <div className={clsx(styles.card, "card")}>
        <Image src={imageSrc} alt="" fill={true} sizes="300px" />

        <ViewTransition name={`text_${id}`}>
          <div className="text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </ViewTransition>
      </div>
    </ViewTransition>
  );
}
