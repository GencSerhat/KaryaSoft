import styles from "./EImzaFAQ.module.css";

const FAQ = [
  {
    q: "E-imza kaç saatte aktif olur?",
    a: "Başvuru zamanı ve doğrulama sürecine bağlıdır. Hedefimiz aynı gün içinde aktivasyona yardımcı olmaktır.",
  },
  {
    q: "Şahıs şirketi için alınabilir mi?",
    a: "Evet. Şahıs, Ltd, A.Ş. fark etmeksizin ihtiyaç doğrultusunda yönlendirme yapılır.",
  },
  {
    q: "Türkiye geneline nasıl destek veriyorsunuz?",
    a: "Kargo + uzaktan kurulum ile süreç yönetimi sağlanır.",
  },
  {
    q: "Kurulum desteği veriyor musunuz?",
    a: "Evet. Yerinde (Milas/Bodrum/Muğla) veya uzaktan kurulum desteği sağlıyoruz.",
  },
];

export function EImzaFAQ() {
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <h2 className={styles.Title}>Sık sorulan sorular</h2>

        <div className={styles.List}>
          {FAQ.map((f) => (
            <details className={styles.Item} key={f.q}>
              <summary className={styles.Question}>{f.q}</summary>
              <div className={styles.Answer}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
