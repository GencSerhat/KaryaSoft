// // src/components/Contact/Contact.jsx
// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import styles from "./Contact.module.css";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//     consent: false,
//     honeypot: "", // botları yakalamak için görünmez alan
//   });
//   const [status, setStatus] = useState({ ok: false, error: "" });
//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//        // honeypot kontrolü (botlar doldurursa iptal et)
//   if (form.honeypot) {
//     setStatus({ ok: false, error: "İşlem gerçekleştirilemedi." });
//     return;
//   }

// if (!form.name || !form.email || !form.service || !form.message || !form.consent) {
//       setStatus({ ok: false, error: "Lütfen gerekli alanları doldurun." });
//       return;
//     }

//     setStatus({ ok: false, error: "" });
//     setIsSending(true);

//     try {
//       const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//       const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//       const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//       if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
//         throw new Error("EmailJS ortam değişkenleri eksik.");
//       }

//       // EmailJS template değişkenleri (template içindeki adlarla birebir aynı olmalı)
//       const params = {
//         name: form.name,
//         email: form.email,
//         phone: form.phone || "-",
//         service: form.service,
//         message: form.message,
//          consent: form.consent ? "onaylı" : "onaysız",
//       };

//       const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
//         publicKey: PUBLIC_KEY,
//       });

//       if (res?.status === 200) {
//         setStatus({ ok: true, error: "" });
//         // temizle
//         setForm({
//           name: "",
//           email: "",
//           phone: "",
//           service: "",
//           message: "",
//           consent: false,
//           honeypot: ""
          
//         });
//       } else {
//         throw new Error("Beklenmeyen yanıt");
//       }
//     } catch (err) {
//       console.error("EMAILJS_ERROR", err);
//       setStatus({
//         ok: false,
//         error:
//           "Gönderilemedi. Lütfen daha sonra tekrar deneyin veya WhatsApp’tan yazın.",
//       });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <>
//       {/* Section: Contact */}
//       <section className={styles.contact} id="contact">
//         <div className={styles.contactContainer}>
//           {/* SOL KART: İletişim bilgileri */}
//           <div className={`${styles.contactInfo} ${styles.glass}`}>
//             <h3>İLETİŞİME GEÇİN</h3>
//             <p>
//               KaryaSoft olarak; web & mobil yazılım, e-ticaret (IdeaSoft), Logo
//               muhasebe, Adisyo POS & QR Menü ve e-imza çözümlerinde
//               yanınızdayız. Formu doldurun, aynı gün içinde sizi arayalım.
//             </p>

//             <div className={styles.quickActions}>
//               <a
//                 className={styles.glass}
//                 href="https://wa.me/905444200309?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="WhatsApp"
//                 title="WhatsApp"
//               >
//                 💬 WhatsApp
//               </a>
//               <a
//                 className={styles.glass}
//                 href="tel:+905444200309"
//                 aria-label="Telefon"
//                 title="Telefon"
//               >
//                 📞 Ara
//               </a>
//               <a
//                 className={styles.glass}
//                 href="mailto:karyasoft.tr@gmail.com?subject=İletişim%20Talebi%20-%20KaryaSoft"
//                 aria-label="E-posta"
//                 title="E-posta"
//               >
//                 ✉️ E-posta
//               </a>
//               <a
//                 className={styles.glass}
//                 href="https://www.instagram.com/karyasoft"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Instagram"
//                 title="Instagram"
//               >
//                 📷 Instagram
//               </a>
//             </div>

//             <ul className={styles.meta}>
//               <li>📍 Milas • Bodrum • Muğla ve çevresi</li>
//               <li>📩 karyasoft.tr@gmail.com</li>
//             </ul>
//           </div>

//           {/* SAĞ KART: Form */}
//           <form
//             className={`${styles.contactForm} ${styles.glass}`}
//             onSubmit={handleSubmit} noValidate
//           >
//             {/* Honeypot (gizli) */}
//            <input
//              type="text"
//              name="honeypot"
//              value={form.honeypot}
//              onChange={handleChange}
//              className={styles.honeypot}
//              tabIndex={-1}
//              autoComplete="off"
//              aria-hidden="true" />
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Ad Soyad *"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                  autoComplete="name"
//                   inputMode="text"
//                   aria-label="Ad Soyad"

//               />
//             </div>

//             <div className={styles.formRow}>
//               <div className={styles.formGroup}>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="E-posta *"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                    autoComplete="email"
//                 inputMode="email"
//                 aria-label="E-posta"
//                 />
//               </div>
//               <div className={styles.formGroup}>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Telefon"
//                   value={form.phone}
//                   onChange={handleChange}
//                    autoComplete="tel"
//                 inputMode="tel"
//                  pattern="^[0-9+()\s-]{6,}$"
//                 aria-label="Telefon"
//                 />
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 required
//                  aria-label="Hizmet seçimi"
//               >
//                 <option value="">Hizmet Seçiniz *</option>
//                 <option value="E-Ticaret (IdeaSoft)">
//                   E-Ticaret (IdeaSoft)
//                 </option>
//                 <option value="Adisyo POS & QR Menü">
//                   Adisyo POS & QR Menü
//                 </option>
//                 <option value="Logo Muhasebe">Logo Muhasebe</option>
//                 <option value="E-İmza">E-İmza</option>
//                 <option value="Özel Yazılım">Özel Yazılım Geliştirme</option>
//               </select>
//             </div>

//             <div className={styles.formGroup}>
//               <textarea
//                 name="message"
//                 rows="5"
//                 placeholder="Kısaca ihtiyacınızı yazın... *"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {status.error && (
//               <div className={styles.formError}>{status.error}</div>
//             )}
//             {status.ok && (
//               <div className={styles.formSuccess}>
//                 Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
//               </div>
//             )}

//             <button
//               type="submit"
//               className={styles.submitBtn}
//               disabled={isSending}
//             >
//               {isSending ? "Gönderiliyor..." : "Gönder"}
//             </button>

//             {/* İsteğe bağlı: WhatsApp'a yönlendiren ikincil CTA */}
//             <a
//               href="https://wa.me/905555555555?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
//               target="_blank"
//               rel="noreferrer"
//               className={styles.altBtn}
//             >
//               WhatsApp’tan Yaz
//             </a>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;

// src/components/Contact/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "", // botları yakalamak için görünmez alan
  });
  const [status, setStatus] = useState({ ok: false, error: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot kontrolü (botlar doldurursa iptal et)
    if (form.honeypot) {
      setStatus({ ok: false, error: "İşlem gerçekleştirilemedi." });
      return;
    }

    // gerekli alanlar
    if (!form.name || !form.email || !form.service || !form.message) {
      setStatus({ ok: false, error: "Lütfen gerekli alanları doldurun." });
      return;
    }

    setStatus({ ok: false, error: "" });
    setIsSending(true);

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS ortam değişkenleri eksik.");
      }

      const params = {
        name: form.name,
        email: form.email,
        phone: form.phone || "-",
        service: form.service,
        message: form.message,
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY,
      });

      if (res?.status === 200) {
        setStatus({ ok: true, error: "" });
        // temizle
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          honeypot: "",
        });
      } else {
        throw new Error("Beklenmeyen yanıt");
      }
    } catch (err) {
      console.error("EMAILJS_ERROR", err);
      setStatus({
        ok: false,
        error:
          "Gönderilemedi. Lütfen daha sonra tekrar deneyin veya WhatsApp’tan yazın.",
      });
    } finally {
      setIsSending(false);
    }
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
              muhasebe, Adisyo POS & QR Menü ve e-imza çözümlerinde
              yanınızdayız. Formu doldurun, aynı gün içinde sizi arayalım.
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
                href="https://www.instagram.com/karyasoft"
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
              <li>📩 karyasoft.tr@gmail.com</li>
            </ul>
          </div>

          {/* SAĞ KART: Form */}
          <form
            className={`${styles.contactForm} ${styles.glass}`}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot (gizli) */}
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad *"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                inputMode="text"
                aria-label="Ad Soyad"
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
                  autoComplete="email"
                  inputMode="email"
                  aria-label="E-posta"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="^[0-9+()\\s-]{6,}$"
                  aria-label="Telefon"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                aria-label="Hizmet seçimi"
              >
                <option value="">Hizmet Seçiniz *</option>
                <option value="E-Ticaret (IdeaSoft)">
                  E-Ticaret (IdeaSoft)
                </option>
                <option value="Adisyo POS & QR Menü">
                  Adisyo POS & QR Menü
                </option>
                <option value="Logo Muhasebe">Logo Muhasebe</option>
                <option value="E-İmza">E-İmza</option>
                <option value="Özel Yazılım">Özel Yazılım Geliştirme</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                rows="5"
                placeholder="Mesajınız... *"
                value={form.message}
                onChange={handleChange}
                required
                aria-label="Mesaj"
                autoComplete="off"
              />
            </div>

            {status.error && (
              <div
                className={styles.formError}
                role="alert"
                aria-live="assertive"
              >
                {status.error}
              </div>
            )}
            {status.ok && (
              <div
                className={styles.formSuccess}
                role="status"
                aria-live="polite"
              >
                Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSending}
              aria-busy={isSending}
              aria-disabled={isSending}
            >
              {isSending ? "Gönderiliyor..." : "Gönder"}
            </button>

            {/* İsteğe bağlı: WhatsApp'a yönlendiren ikincil CTA */}
            <a
              href="https://wa.me/905444200309?text=Merhaba%20KaryaSoft%2C%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className={styles.altBtn}
              aria-label="WhatsApp’tan yaz"
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
