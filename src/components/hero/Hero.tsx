import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h2>We&apos;re Here to Help</h2>
        <p>Get assistance with your insurance needs 24/7</p>
        <button className={styles.primaryBtn}>Speak to an Expert</button>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.heroRightHeader}>
          <p>HOME</p>
          <span>/</span>
          <h3>SUPPORT CENTRE</h3>
        </div>

        <div className={styles.heroRightStats}>
          <div>
            <p>Tickets Raised</p>
            <h3>3</h3>
          </div>
          <div>
            <p>Feedbacks Raised</p>
            <h3>2</h3>
          </div>
          <div>
            <p>Tickets Raised</p>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </section>
  );
}