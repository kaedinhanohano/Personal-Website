import styles from './Home.module.css'

import Bubbles from '../../Components/Bubbles/Bubbles';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';

import ReactImage from '../../Assets/TechIcons/ReactImage';
import TailwindImage from '../../Assets/TechIcons/TailwindImage';
import ViteImage from '../../Assets/TechIcons/ViteImage';
import ExpressImage from '../../Assets/TechIcons/ExpressImage';
import TypescriptImage from '../../Assets/TechIcons/TypescriptImage';
import MongoImage from '../../Assets/TechIcons/MongoImage';

function Home() {
  return (
    <div >
      <Header />
      <Bubbles />

      <div className={styles.techTitle}>
        <h3 className={styles.techTitleHeader}>Skills / Tech Stack</h3>
      </div>
      
      <div className={styles.techHolderOne}>
        <Card img={<ReactImage className={styles.image} />} name="React" />
        <Card img={<TailwindImage className={styles.image} />} name="Tailwind" />
        <Card img={<TypescriptImage className={styles.image} />} name="TypeScript" />
      </div>
      <div className={styles.techHolderTwo}>
        <Card img={<ExpressImage className={styles.image} />} name="Express.Js" />
        <Card img={<MongoImage className={styles.image} />} name="MongoDB" />
        <Card img={<ViteImage className={styles.image} />} name="Vite" />
      </div>
    </div>
  );
}

export default Home;
