import Image from 'next/image';
import main_image from '../../../public/images_home/portada Finaflow.png'
import styles from '../../styles/main_window/main.module.scss'

export default function Main () {
  return (
    <>
      <div className={styles.main_section}>
        <div className={styles.main_text_image}>
          <div className={styles.main_text}>
            <h1>Master your finances with clarity in a simple, modern and elegat way.</h1>
            <p>Take control of your income, expenses and savings with a platform designed to simplify your financial life.</p>
          </div>
          <div className={styles.main_img}>
            <Image src={main_image} height={475} width={625} alt='Representative image for aplication'/>
          </div>
        </div>
        <div className={styles.main_button}>
          <button>Get started!</button>
        </div>
      </div>
    </>
  );
}