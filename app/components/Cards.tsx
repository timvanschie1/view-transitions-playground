"use client";

import clsx from "clsx";
import styles from "./Cards.module.scss";
import { startTransition, useState } from "react";
import { defaultCards, getDummyCard } from "@/app/components/exampleData";
import { useLocalStorage } from "usehooks-ts";
import { Card, CardType } from "@/app/components/Card";

export function Cards() {
  const [mode, setMode] = useLocalStorage<"one" | "two">("mode", "one");
  const [cards, setCards] = useState<CardType[]>(defaultCards);

  function handleAddClick() {
    startTransition(() => {
      setCards([getDummyCard(cards.length + 1), ...cards]);
    });
  }

  return (
    <>
      <div className={styles.controls}>
        <button type="button" onClick={handleAddClick}>
          Add dummy card
        </button>

        <select
          name="mode"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as "one" | "two");
          }}
        >
          <option value="one">Mode 1</option>
          <option value="two">Mode 2</option>
        </select>
      </div>

      {/*<ViewTransition name="cards">*/}
      <div className={clsx(styles.cards, styles[`cards--mode-${mode}`])}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      {/*</ViewTransition>*/}
    </>
  );
}
