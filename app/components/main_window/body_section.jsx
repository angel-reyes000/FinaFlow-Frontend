import styles from '../../styles/main_window/body_section.module.scss';
import body_image from '../../../public/images_home/body FinaFlow.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function BodySection ({ ref }) {

    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 0,
        once: true
        })
    })

    return (
        <>
            <div ref={ref} className={styles.body}>
                <div className={styles.body_image} data-aos='zoom-in'>
                    <Image src={body_image} width={600} height={500} alt='Representative image for the application'/>
                </div>
                <div className={styles.body_text} data-aos='fade'>
                    <h2>The objective is to help you make better decisions with your money.</h2>
                    <p>Our platform helps you manage your finances in a simple, modern, and intelligent way. All designed to help you make better decisions with your money.</p>
                </div>
            </div>
        </>
    )
}