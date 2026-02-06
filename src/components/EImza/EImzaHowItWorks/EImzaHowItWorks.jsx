import styles from "./EImzaHowItWorks.module.css";

const STEPS = [
  { n: "1", title: "İhtiyacı yaz", text: "Şehir + şirket türü + aciliyet bilgisini ilet." },
  { n: "2", title: "Evrak & doğrulama", text: "Gerekli adımları netleştirip süreci başlat." },
  { n: "3", title: "Teslim / kurulum", text: "Yerinde veya uzaktan kurulum desteği." },
  { n: "4", title: "Aktif kullanım", text: "İşlemler için kullanıma hazır hale getir." },
];

export function EImzaHowItWorks() {
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <h2 className={styles.Title}>Süreç nasıl ilerliyor?</h2>
        <div className={styles.Steps}>
          {STEPS.map((s) => (
            <div className={styles.Step} key={s.n}>
              <div className={styles.Num}>{s.n}</div>
              <div>
                <div className={styles.StepTitle}>{s.title}</div>
                <div className={styles.StepText}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.Disclaimer}>
          * “Aynı gün” hedefi, başvuru zamanı ve operatör/kurum süreçlerine göre değişebilir.
        </div>
      </div>
    </section>
  );
}
