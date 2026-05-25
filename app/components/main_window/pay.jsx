import styles from '../../styles/main_window/pay.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Pay ({ ref }) {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 0,
            once: false
        })
    })

    return (
        <>
            <div ref={ref} className={styles.pay} data-aos='fade up'>
                <div className={styles.pay_free} data-aos='flip-right'>
                    <div className={styles.pay_cost}>
                        <p>Free</p>
                        <h3>$0 USD</h3>
                        <h6>Monthly</h6>
                    </div>
                    <div className={styles.pay_list} >
                        <ul>
                            <li>Advanced financial reports</li>
                            <li>Real-time synchronization</li>
                            <li>Statistics and charts</li>
                            <li>Access from any device</li>
                            <li style={{color: 'rgba(0, 0, 0, 0.30)'}}>PDF/Excel report export</li>
                            <li style={{color: 'rgba(0, 0, 0, 0.30)'}}>AI-powered financial insights</li>
                        </ul>
                    </div>
                    <div className={styles.pay_button_free}>
                        <button>Now</button>
                    </div>
                </div>
                <div className={styles.pay_premium} data-aos='flip-right'>
                    <div className={styles.pay_cost}>
                        <p>Premium</p>
                        <h3>$5 USD</h3>
                        <h6>Monthly</h6>
                    </div>
                    <div className={styles.pay_list}>
                        <ul>
                            <li>Advanced financial reports</li>
                            <li>Real-time synchronization</li>
                            <li>Statistics and charts</li>
                            <li>Access from any device</li>
                            <li>PDF/Excel report export</li>
                            <li>AI-powered financial insights</li>
                        </ul>
                    </div>
                    <div className={styles.pay_button_premium}>
                        <button>Upgrade to premium</button>
                    </div>
                </div>
            </div>
        </>
    )
}