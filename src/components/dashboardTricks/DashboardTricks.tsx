"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./DashboardTricks.module.css";

const faqData = [
  {
    title: "How can BimaKavach help me in buying insurance for my business?",
    content: "",
  },
  {
    title: "Why do I need Insurance for my business?",
    content:
      "Every business needs to protect its assets, legal liabilities, and employees from potential harm. Business insurance protects them against unforeseen events like legal issues, accidents, and natural disasters.",
  },
  { title: "How does pricing work for insurance policies?", content: "" },
  { title: "How does BimaKavach ensure data privacy?", content: "" },
  { title: "Who is responsible for getting my claims processed?", content: "" },
  { title: "Is it safe to buy insurance online?", content: "" },
  { title: "How does pricing work for insurance policies?", content: "" },
];

export default function DashboardTricks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Dashboard Tricks</h2>

      <div className={styles.accordion}>
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`${styles.item} ${isActive ? styles.active : ""}`}
            >
              <div
                className={styles.question}
                onClick={() => handleToggle(index)}
              >
                <span>{item.title}</span>
                <Image
                  src={isActive ? "/arrow-down.png" : "/arrow-up.png"}
                  alt="toggle"
                  width={10}
                  height={7}
                />
              </div>

              {isActive && item.content && (
                <div className={styles.answer}>{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
