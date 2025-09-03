import styles from "./Products.module.css";
function Products() {
  return (
    <>
      {/* Section 3: Hexagonal Showcase  */}
      <section className={styles.showcase} id="products">
        <h2 className={styles.sectionTitle}>ÜRÜNLER</h2>
        <div className={styles.hexagonContainer}>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>🔮</div>
              <h4>Logo Muhasebe</h4>
              <p>Finansal süreçlerinizi kolaylaştırın.</p>
            </div>
          </div>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>🛡️</div>
              <h4>E-Ticaret</h4>
              <p>Profesyonel Ideasoft altyapısı ile online satışa başlayın</p>
            </div>
          </div>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>🚀</div>
              <h4>Adisyo POS & QR Menü</h4>
              <p>Cafe & restoranlar için hızlı ve pratik yönetim.</p>
            </div>
          </div>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>💎</div>
              <h4>E-İmza</h4>
              <p>Resmi işlemler için güvenli dijital imza</p>
            </div>
          </div>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>🎯</div>
              <h4>Özel Yazılım</h4>
              <p>İhtiyaçlarınıza özel web & mobil çözümler.</p>
            </div>
          </div>
          <div className={styles.hexagon}>
            {/* glass sınıfı ekleneck */}
            <div className={styles.hexagonInner}>
              <div className={styles.hexagonIcon}>⭐</div>
              <h4>Dijital Pazarlama & SEO</h4>
              <p>Markanızı dijital dünyada büyütün.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
