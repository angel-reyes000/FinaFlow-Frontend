"use client"

import Image from 'next/image';
import { MdBarChart, MdTrendingUp } from 'react-icons/md';
import { FaTrophy, FaDollarSign } from 'react-icons/fa';
import styles from '../../styles/main_window/features.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Features ({ ref }) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    })

    return ( 
        <>
            <div ref={ref} className={styles.features}>
                <div className={styles.features_question}>
                    <h2>Why FinaFlow?</h2>
                </div>
                <div className={styles.features_section} data-aos='fade'>
                    <div className={styles.feature_info} data-aos='fade' data-aos-delay="1">
                        <div className={styles.feature_image_background}>
                            <MdBarChart size={80} color='0BA600' />                            
                        </div>
                        <div className={styles.feature_note}>
                           <h3>Clear reports</h3>
                            <p>Track your income, expenses and savings with clear and simple reports.</p> 
                        </div>                        
                    </div>
                    <div className={styles.feature_info} data-aos='fade' data-aos-delay="400">
                        <div className={styles.feature_image_background}>
                            <FaTrophy size={80} color='0BA600' />                            
                        </div>
                        <div className={styles.feature_note}>
                           <h3>Reach your goal</h3>
                            <p>Plan and achieve your financial goals step by step.</p> 
                        </div>                        
                    </div>
                    <div className={styles.feature_info} data-aos='fade' data-aos-delay="800">
                        <div className={styles.feature_image_background}>
                            <MdTrendingUp size={80} color='0BA600' />                            
                        </div>
                        <div className={styles.feature_note}>
                           <h3>Invest</h3>
                            <p>Discover investment options based on your profile.</p> 
                        </div>                        
                    </div>
                    <div className={styles.feature_info} style={{borderRight: 'none'}} data-aos='fade' data-aos-delay="1200">
                        <div className={styles.feature_image_background}>
                            <FaDollarSign size={80} color='0BA600' />                            
                        </div>
                        <div className={styles.feature_note}>
                           <h3>Tracking expenses</h3>
                            <p>Monitor your spending and keep full control of your finances.</p> 
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}