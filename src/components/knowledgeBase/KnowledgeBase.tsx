import Image from "next/image";
import styles from "./knowledgeBase.module.css";

export default function KnowledgeBase() {
  return (
    <section className={styles.knowledge}>
      <div className={styles.sectionHeader}>
        <h3>Knowledge Base</h3>
        <span>Self-service resources and guides</span>
      </div>

      <div className={styles.kbList}>
        <div className={styles.kbRow}>
          <div>
            <Image src="/player.png" alt="player" width={30} height={30} />
            <div>
              <h4>Collaborator Management</h4>
              <p>Learn how to add collaborators and manage your tasks</p>
            </div>
          </div>
          <button className={styles.learnMoreBtn}>Learn more <Image src="/arrow.png" alt="book" width={7} height={9} /></button>
        </div>

        <div className={styles.kbRow}>
          <div>
            <Image src="/book.png" alt="book" width={30} height={30} />
            <div>
              <h4>Policy Management</h4>
              <p>Updates, changes, and renewals</p>
            </div>
          </div>
          <button className={styles.learnMoreBtn}>Learn more <Image src="/arrow.png" alt="book" width={7} height={9} /></button>
        </div>

        <div className={styles.kbRow}>
          <div>
            <Image src="/book.png" alt="book" width={30} height={30} />
            <div>
              <h4>Billing & Payments</h4>
              <p>Payment methods and schedules</p>
            </div>
          </div>
          <button className={styles.learnMoreBtn}>Learn more  <Image src="/arrow.png" alt="book" width={7} height={9} /></button>
        </div>
      </div>
    </section>
  );
}