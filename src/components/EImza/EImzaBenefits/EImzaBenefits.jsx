import styles from "./EImzaBenefits.module.css";

const ITEMS = [
  { title: "Acil ihtiyaca uygun", text: "Bugün kullanım hedefiyle hızlı yönlendirme ve kurulum." },
  { title: "Yerinde destek", text: "Milas / Bodrum / Muğla’da yerinde kurulum imkânı." },
  { title: "Türkiye geneli", text: "Aynı gün kargo + uzaktan kurulum desteği." },
  { title: "Net süreç", text: "Gerekli evraklar ve adımlar açık şekilde paylaşılır." },
];

export function EImzaBenefits() {
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <h2 className={styles.Title}>Neden KaryaSoft üzerinden?</h2>
        <div className={styles.Grid}>
          {ITEMS.map((it) => (
            <div className={styles.Card} key={it.title}>
              <div className={styles.CardTitle}>{it.title}</div>
              <div className={styles.CardText}>{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
