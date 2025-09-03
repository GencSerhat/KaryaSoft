import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 // mobil menü açıkken body scroll'u kilitle
 useEffect(() => {
   document.body.style.overflow = menuOpen ? "hidden" : "";
   return () => {
     document.body.style.overflow = "";
   };
 }, [menuOpen]);
  const toggleMenu = () => setMenuOpen((s) => !s);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header  */}
      {/* <header className={styles.glass}> */}
      <header className={`${styles.glass} ${scrolled ? styles.scrolled : ""}`}>
        <nav>
          <a href="#home" className={styles.logo}>
            KARYASOFT
          </a>
          <ul className={styles.navLinks}>
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
            {/* <li>
              <a
                href="https://example.com"
                target="_blank"
                class="external-link"
              >
                External
              </a>
            </li> */}
          </ul>

          <div
            className={`${styles.mobileMenuToggle} ${
              menuOpen ? styles.active : ""
            }`}
            onClick={toggleMenu}
            aria-label="Mobil menüyü aç/kapat"
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " " ? toggleMenu() : null
            }
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </div>
        </nav>
        <div className={`${styles.mobileNav} ${menuOpen ? styles.active : ""}`}>
          {/* <a href="#features">Neural</a>
          <a href="#showcase">Matrix</a>
          <a href="#timeline">Evolution</a>
          <a href="#contact">Connect</a>
          <a href="https://example.com" target="_blank" className={styles.externalLink}>
            External
          </a> */}
          <a href="#home" onClick={closeMenu}>
            Anasayfa
          </a>
          <a href="#services" onClick={closeMenu}>
            Hizmetler
          </a>
          <a href="#products" onClick={closeMenu}>
            Ürünler
          </a>
          <a href="#contact" onClick={closeMenu}>
            İletişim
          </a>
            <a href="#contact" onClick={closeMenu}>
            İletişim
          </a>
        </div>
      </header>
    </>
  );
}
export default Navbar;
