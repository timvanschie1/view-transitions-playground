"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { Card, CardType } from "@/app/components/Card";
import { defaultCards, getDummyCard } from "@/app/components/exampleData";

export default function Home() {
  const [cards, setCards] = useState<CardType[]>(defaultCards);

  function handleAddClick() {
    setCards([...cards, getDummyCard(cards.length + 1)]);
  }

  return (
    <div className={styles.page}>
      <button
        className={styles.addButton}
        type="button"
        onClick={handleAddClick}
      >
        Add dummy card
      </button>

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
