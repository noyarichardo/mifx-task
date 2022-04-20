import styles from '../styles/Home.module.css'
import CSlide from '../components/ImgSlide';

export default function(){
  return(
    <section className={styles.container}>
      <CSlide />
    </section>
  );
}