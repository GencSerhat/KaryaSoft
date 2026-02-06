import styles from "./EImzaHero.module.css";

export function EImzaHero({ whatsappHref, telHref, phoneDisplay }) {
  return (
    <section className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <div className={styles.Badge}>Acil • Aynı Gün • Kurulum Dahil</div>

          <h1 className={styles.Title}>
            Aynı Gün <span className={styles.Accent}>E-İmza</span>
            <br />
            Milas • Bodrum • Muğla
          </h1>

          <p className={styles.Subtitle}>
            Beyanname, e-fatura, ihale, e-devlet işlemleri için.
            Yerinde destek (Milas/Bodrum/Muğla) • Türkiye geneli aynı gün kargo + uzaktan kurulum.
          </p>

          <div className={styles.Actions}>
            <a className={styles.PrimaryBtn} href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp’tan Hemen Yaz
            </a>
            <a className={styles.SecondaryBtn} href={telHref}>
              Hemen Ara: {phoneDisplay}
            </a>
          </div>

          <ul className={styles.Proofs}>
            <li>6 saat içinde aktifleme hedefi</li>
            <li>Kurulum & yönlendirme desteği</li>
            <li>Şeffaf bilgilendirme</li>
          </ul>
        </div>

        <div className={styles.Right}>
          <div className={styles.Card}>
            <div className={styles.CardTitle}>Hızlı Başvuru</div>
            <div className={styles.CardText}>
              WhatsApp’tan yaz: <br />
              <strong>Şehir + Şirket türü (Şahıs/Ltd) + Aciliyet</strong>
            </div>

            <div className={styles.MiniActions}>
              <a className={styles.PrimaryBtn} href={whatsappHref} target="_blank" rel="noreferrer">
                Mesaj Gönder
              </a>
              <a className={styles.SecondaryBtn} href={telHref}>
                Ara
              </a>
            </div>

            <div className={styles.Note}>
              Not: Türkiye geneli kargo + uzaktan kurulum ile destek verilir.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
