import styles from "./Hero.module.css";
function Hero() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>
            DİJİTAL DÖNÜŞÜME HOŞGELDİNİZ
          </div>
          <h1>KURUMSAL YAZILIM ÇÖZÜMLERİ</h1>
          <div className={styles.heroDescription}>
            <p>
              İşletmenizin dijital dönüşüm yolculuğunda yanınızdayız.
              Profesyonel web tasarımı, e-ticaret altyapısı, Logo muhasebe ve
              e-imza çözümleriyle tüm ihtiyaçlarınıza tek noktadan çözüm
              sağlıyoruz.
            </p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>Logo</span>
              <span className={styles.heroStatLabel}>Muhasebe Yazılımları</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>E-Ticaret</span>
              <span className={styles.heroStatLabel}>İdeaSoft Çözümleri</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>Adisyo</span>
              <span className={styles.heroStatLabel}>
                Cafe & Restoran Programı
              </span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>E-imza</span>
              <span className={styles.heroStatLabel}>Güvenli Çözümler</span>
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>
              Sunum Talep Et
            </a>
            {/* // ikinci bir class eklenecek secondary */}
            <a href="#contact" className={`${styles.ctaButton} ${styles.secondary}`}>
              iletişime Geç
            </a>
          </div>
        </div>
      </section>
      {/* Section 2: Diagonal Features */}
      <section className={styles.features} id="services">
        <div className={styles.featuresContainer}>
          <h2 className={styles.sectionTitle}>HİZMETLERİMİZ</h2>
          <div className={styles.diagonalGrid}>
            <div className={styles.featureRow}>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>🧠</div>
                <h3>E-Ticaret Sistemleri</h3>
                <p>
                  Online mağazanızı profesyonel altyapıyla kuruyoruz. IdeaSoft
                  e-ticaret paketleriyle ürün yönetimi, güvenli ödeme sistemleri
                  ve kullanıcı dostu tasarımları hayata geçiriyoruz.
                </p>
              </div>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureVisual}>
                <img src="/e-commerce.jpg" alt="E-ticaret" />
              </div>
            </div>

            <div className={styles.featureRow}>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Cafe & Restoran Programı (Adisyo)</h3>
                <p>
                  Adisyo POS ve QR Menü çözümleriyle sipariş, ödeme ve stok
                  yönetimini kolaylaştırın. Müşteri memnuniyetini artırırken
                  işletme verimliliğinizi yükseltin.
                </p>
              </div>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureVisual}>
                <img src="/adisyo.jpg" alt="Cafe Restaurant" />
              </div>
            </div>

            <div className={styles.featureRow}>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>🌐</div>
                <h3>Logo Muhasebe Yazılımları</h3>
                <p>
                  İşletmenizin finansal süreçlerini güvenle yönetin. Logo Start
                  3 ve Logo Tiger 3 çözümleriyle fatura, stok, cari hesap ve
                  e-fatura süreçlerinizi kolaylaştırıyoruz.
                </p>
              </div>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureVisual}>
                <img
                  src="/accountingSoftware.jpg"
                  alt="Muhasebe Yazılımları"
                />
              </div>
            </div>
            <div className={styles.featureRow}>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>🌐</div>
                <h3>E-İmza Çözümleri</h3>
                <p>
                  Resmi işlemlerde güvenli dijital imza çözümleri sunuyoruz.
                  E-fatura, e-defter ve diğer tüm yasal süreçleriniz için hızlı
                  ve güvenilir e-imza hizmeti.
                </p>
              </div>
              {/* glass" sınıfı eklenecej */}
              <div className={styles.featureVisual}>
                <img src="/e-signature.jpg" alt="E-imza" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
