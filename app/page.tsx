"use client";

import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Cards = dynamic(
  () => import("./components/Cards").then((mod) => mod.Cards),
  { ssr: false },
);

export default function Home() {
  return (
    <div className={styles.page}>
      <Cards />
    </div>
  );
}
