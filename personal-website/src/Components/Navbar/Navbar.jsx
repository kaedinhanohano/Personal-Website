import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden}`}>
      <div className={styles.elements}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/about">About Me</Link>
        <Link className={styles.link} to="/projects">Projects</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
