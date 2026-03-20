import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import KnowledgeBase from "@/components/knowledgeBase/KnowledgeBase";
import DashboardTricks from "@/components/dashboardTricks/DashboardTricks";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.container}>
        <Hero />
        <KnowledgeBase />
        <DashboardTricks />
      </main>
    </div>
  );
}
