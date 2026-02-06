import styles from "./EImzaStickyCTA.module.css";

export function EImzaStickyCTA({ whatsappHref, telHref, phoneDisplay }) {
  return (
    <div className={styles.Bar}>
      <div className={styles.Inner}>
        <div className={styles.Text}>
          <strong>Acil E-İmza</strong> • WhatsApp veya arama ile hemen başla
        </div>

        <div className={styles.Actions}>
          <a className={styles.WhatsApp} href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className={styles.Call} href={telHref}>
            Ara
          </a>
        </div>

        <div className={styles.Phone}>{phoneDisplay}</div>
      </div>
    </div>
  );
}
