import Image from 'next/image';
import main_image from '../../../public/images_home/Portada FinaFlow hd.png'
import styles from '../../styles/main_window/main.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Main ({ ref }) {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 0,
      once: true
    })
  })

  return (
    <>
      <div ref={ref} className={styles.main_section}>
        <div className={styles.main_text_image}>
          <div className={styles.main_text} data-aos='fade'>
            <h1>Master your finances with clarity in a simple, modern and elegat way.</h1>
            <p>Take control of your income, expenses and savings with a platform designed to simplify your financial life.</p>
          </div>
          <div className={styles.main_img} data-aos='zoom-in'>
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