import useDevice from "../../../hooks/useDevice";
import styles from "./Footer.module.css";
import BrandLogo from "./icons/BrandLogo";
import ContactIcon from "./icons/ContactIcon";
import MailIcon from "./icons/MailIcon";

const Footer = () => {
  const isMobile = useDevice();

  return (
    <footer className={`${styles.Footer}`}>
      <div className={`${styles.Footer__container}`}>
        {!isMobile && (
          <div className={`${styles.Footer__top}`}>
            <div className={`${styles.Footer__contactButtons}`}>
              <button className={`${styles.Footer__contactButton}`}>
                <div className={`${styles.Footer__contactButton__icon}`}>
                  <MailIcon />
                </div>
                ENTRE EM CONTATO
              </button>
              <button className={`${styles.Footer__contactButton}`}>
                <div className={`${styles.Footer__contactButton__icon}`}>
                  <ContactIcon />
                </div>
                FALE COM O NOSSO CONSULTOR ONLINE
              </button>
            </div>
          </div>
        )}
        <div className={`${styles.Footer__bottom}`}>
          <div className={`${styles.Footer__localization}`}>
            <p className={`${styles.Footer__localization__title}`}>
              Localização
            </p>
            <p className={`${styles.Footer__localization__text}`}>
              Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP
              <br />
              brasil@corebiz.ag
              <br />
              +55 11 3090 1039
            </p>
          </div>
          {isMobile && (
            <div className={`${styles.Footer__contactButtons}`}>
              <button className={`${styles.Footer__contactButton}`}>
                <div className={`${styles.Footer__contactButton__icon}`}>
                  <MailIcon />
                </div>
                ENTRE EM CONTATO
              </button>
              <button className={`${styles.Footer__contactButton}`}>
                <div className={`${styles.Footer__contactButton__icon}`}>
                  <ContactIcon />
                </div>
                FALE COM O NOSSO CONSULTOR ONLINE
              </button>
            </div>
          )}
          <div className={`${styles.Footer__brand}`}>
            <p className={`${styles.Footer__brand__text}`}>Created by</p>
            <BrandLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
