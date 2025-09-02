import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} ${styles.glass}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Marka / kısa açıklama */}
          <div className={styles.col}>
            <div className={styles.brand}>KARYASOFT</div>
            <p className={styles.desc}>
              Web & mobil yazılım, e-ticaret (IdeaSoft), Logo muhasebe, Adisyo
              POS & QR Menü ve e-imza çözümleri ile işletmenizin dijital
              dönüşümünde yanınızdayız.
            </p>
            <div className={styles.ctaRow}>
              <a href="#contact" className={styles.cta}>
                Teklif Al
              </a>
              <a
                href="https://wa.me/905444200309?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className={`${styles.cta} ${styles.secondary}`}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className={styles.col}>
            <div className={styles.title}>Hızlı Bağlantılar</div>
            <ul className={styles.linkList}>
              <li>
                <a href="#home">Anasayfa</a>
              </li>
              <li>
                <a href="#services">Hizmetler</a>
              </li>
              <li>
                <a href="#products">Ürünler</a>
              </li>
              <li>
                <a href="#contact">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className={styles.col}>
            <div className={styles.title}>Hizmetlerimiz</div>
            <ul className={styles.linkList}>
              <li>
                <a href="#services">E-Ticaret (IdeaSoft)</a>
              </li>
              <li>
                <a href="#services">Adisyo POS & QR Menü</a>
              </li>
              <li>
                <a href="#services">Logo Muhasebe</a>
              </li>
              <li>
                <a href="#services">E-İmza</a>
              </li>
              <li>
                <a href="#services">Özel Yazılım</a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className={styles.col}>
            <div className={styles.title}>İletişim</div>
            <ul className={styles.contactList}>
              <li>📍 Milas • Bodrum • Muğla</li>
              {/* <li>🕘 Hafta içi 09:00–18:00</li> */}
              <li>
                ✉️{" "}
                <a href="mailto:karyasoft.tr@gmail.com">
                  karyasoft.tr@gmail.com
                </a>
              </li>
              <li>
                📞 <a href="tel:+905555555555">+90 544 420 03 09</a>
              </li>
            </ul>
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/karyasoft.tr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                🔗
              </a>
              <a
                href="https://github.com/yourproject"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                💻
              </a>
            </div>
          </div>
        </div>

        {/* Alt bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legal}>
            {/* <a href="#">KVKK Aydınlatma Metni</a> */}
            {/* <span>•</span> */}
            {/* <a href="#">Gizlilik Politikası</a> */}
            {/* <span>•</span> */}
            {/* <a href="#">Kullanım Koşulları</a> */}
          </div>
          <div className={styles.copy}>
            © {new Date().getFullYear()} KaryaSoft. Tüm hakları saklıdır.
          </div>
          <div className={styles.credit}>
            {/* ↑ Başa dön butonu */}
            <a
              href="#home"
              className={styles.backTop}
              aria-label="Başa dön (en üste git)"
            >
              {/* ok ikonu (SVG) */}
              <svg
                viewBox="0 0 24 24"
                width="50"
                height="50"
                aria-hidden="true"
              >
                <path d="M12 5l-7 7h4v7h6v-7h4z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
