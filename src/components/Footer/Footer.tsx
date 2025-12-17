import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterLinks />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
