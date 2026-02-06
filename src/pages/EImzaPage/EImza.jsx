import styles from "./EImzaPage.module.css";

import { EImzaHero } from "../../components/EImza/EImzaHero/EImzaHero";
import { EImzaBenefits } from "../../components/EImza/EImzaBenefits/EImzaBenefits";
import { EImzaHowItWorks } from "../../components/EImza/EImzaHowItWorks/EImzaHowItWorks";
import { EImzaServiceArea } from "../../components/EImza/EImzaServiceArea/EImzaServiceArea";
import { EImzaFAQ } from "../../components/EImza/EImzaFAQ/EImzaFAQ";
import { EImzaStickyCTA } from "../../components/EImza/EImzaStickyCTA/EImzaStickyCTA";

export default function EImzaPage() {
  const PHONE_E164 = "+905444200309"; // TODO: kendi numaran
  const PHONE_DISPLAY = "0 (544) 420 03 09"; // TODO: görünecek format
  const WHATSAPP_NUMBER = "905444200309"; // + olmadan

  const whatsappText = encodeURIComponent(
    "Merhaba, acil e-imza ihtiyacım var. Bugün aktif olabilir mi? (Şehir: ___, Şirket Türü: ___)"
  );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
  const telHref = `tel:${PHONE_E164}`;

  return (
    <main className={styles.Page}>
      <EImzaHero
        whatsappHref={whatsappHref}
        telHref={telHref}
        phoneDisplay={PHONE_DISPLAY}
      />

      <EImzaBenefits />

      <EImzaHowItWorks />

      <EImzaServiceArea />

      <EImzaFAQ />

      <EImzaStickyCTA
        whatsappHref={whatsappHref}
        telHref={telHref}
        phoneDisplay={PHONE_DISPLAY}
      />
    </main>
  );
}
