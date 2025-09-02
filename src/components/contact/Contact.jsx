// src/components/Contact/Contact.jsx
import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ ok: false, error: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basit doğrulama
    if (!form.name || !form.email || !form.service || !form.message) {
      setStatus({ ok: false, error: "Lütfen gerekli alanları doldurun." });
      return;
    }
    if (!form.consent) {
      setStatus({ ok: false, error: "Devam etmek için KVKK onayını işaretleyin." });
      return;
    }

    // Şimdilik sadece loglayalım (buraya EmailJS / API isteği eklenecek)
    console.log("CONTACT_FORM_PAYLOAD", form);

    setStatus({ ok: true, error: "" });
    // temizle
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
    });
  };

  return (
    <>
      {/* Section: Contact */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactContainer}>
          {/* SOL KART: İletişim bilgileri */}
          <div className={`${styles.contactInfo} ${styles.glass}`}>
            <h3>İLETİŞİME GEÇİN</h3>
            <p>
              KaryaSoft olarak; web & mobil yazılım, e-ticaret (IdeaSoft), Logo
              muhasebe, Adisyo POS & QR Menü ve e-imza çözümlerinde yanınızdayız.
              Formu doldurun, aynı gün içinde sizi arayalım.
            </p>

            <div className={styles.quickActions}>
              <a
                className={styles.glass}
                href="https://wa.me/905444200309?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                💬 WhatsApp
              </a>
              <a
                className={styles.glass}
                href="tel:+905444200309"
                aria-label="Telefon"
                title="Telefon"
              >
                📞 Ara
              </a>
              <a
                className={styles.glass}
                href="mailto:karyasoft.tr@gmail.com?subject=İletişim%20Talebi%20-%20KaryaSoft"
                aria-label="E-posta"
                title="E-posta"
              >
                ✉️ E-posta
              </a>
              <a
                className={styles.glass}
                href="https://www.instagram.com/karyasoft" // varsa güncelle
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                📷 Instagram
              </a>
            </div>

            <ul className={styles.meta}>
              <li>📍 Milas • Bodrum • Muğla ve çevresi</li>
              {/* <li>🕘 Çalışma saatleri: Hafta içi 09:00–18:00</li> */}
              <li>📩 karyasoft.tr@gmail.com</li>
            </ul>
          </div>

          {/* SAĞ KART: Form */}
          <form className={`${styles.contactForm} ${styles.glass}`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad *"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta *"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Hizmet Seçiniz *</option>
                <option value="E-Ticaret (IdeaSoft)">E-Ticaret (IdeaSoft)</option>
                <option value="Adisyo POS & QR Menü">Adisyo POS & QR Menü</option>
                <option value="Logo Muhasebe">Logo Muhasebe</option>
                <option value="E-İmza">E-İmza</option>
                <option value="Özel Yazılım">Özel Yazılım Geliştirme</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                rows="5"
                placeholder="Kısaca ihtiyacınızı yazın... *"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* <label className={styles.consent}>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                KVKK aydınlatma metnini okudum, iletişim için benimle irtibata
                geçilmesine onay veriyorum.
              </span>
            </label> */}

            {status.error && <div className={styles.formError}>{status.error}</div>}
            {status.ok && (
              <div className={styles.formSuccess}>
                Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              Gönder
            </button>

            {/* İsteğe bağlı: WhatsApp'a yönlendiren ikincil CTA */}
            <a
              href="https://wa.me/905555555555?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className={styles.altBtn}
            >
              WhatsApp’tan Yaz
            </a>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
