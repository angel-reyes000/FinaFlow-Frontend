import Image from 'next/image';
import main_image from '../../../public/images_home/Portada FinaFlow hd.png'
import styles from '../../styles/main_window/main.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import logo from '../../../public/images_home/logo FinaFlow.png';

export default function Main ({ ref, sessionActive }) {
  const refDialog = useRef(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 0,
      once: true
    })
  })

  function started () {
    if (sessionActive) {
      router.push('/finaflow')
    } else {
      refDialog.current.showModal();
    }
  }

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
          <button onClick={() => started()}>Get started!</button>
        </div>
      </div>
      <dialog ref={refDialog} className={styles.main_modal} data-aos='fade'>
          <div className={styles.modal_title}>
              <Image src={logo} height={70} width={70} alt='Application logo'></Image>
              <h2>You must log in before getting started.</h2>
          </div>
          <div className={styles.modal_buttons}>
              <button onClick={() => router.push('/login')}>Log in</button>
              <button onClick={() => refDialog.current.close()}>Ok</button>
          </div>                
      </dialog>
    </>
  );
}