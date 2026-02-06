import styles from "./EImzaServiceArea.module.css";

export function EImzaServiceArea() {
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <h2 className={styles.Title}>Hizmet bölgesi</h2>

        <div className={styles.Grid}>
          <div className={styles.Card}>
            <div className={styles.CardTitle}>Yerinde Destek</div>
            <ul className={styles.List}>
              <li>Milas</li>
              <li>Bodrum</li>
              <li>Muğla</li>
            </ul>
          </div>

          <div className={styles.Card}>
            <div className={styles.CardTitle}>Türkiye Geneli</div>
            <p className={styles.Text}>
              Aynı gün kargo + uzaktan kurulum desteği ile süreç yönetimi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
