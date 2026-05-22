"use client"

import Image from 'next/image';
import background from '../../public/images_auth/background_auth_finaflow.png';
import styles from '../styles/auth/login.module.scss';
import logo from '../../public/images_home/logo FinaFlow.png';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Login () { 
    const router = useRouter()
    
        useEffect(() => {
            AOS.init({
                duration: 1000,
                delay: 0,
                once: true
            })
        }, [])

    return (
            <main className={styles.login_background}>

                <section className={styles.login_logo_card}>
                    <div className={styles.login_logo} onClick={() => router.push('/')} data-aos='fade'>
                        <Image src={logo} width={100} height={100} alt='Logo FinaFlow'/>
                        <h1>FinaFlow</h1>
                    </div>
                    <div className={styles.login_card} data-aos='zoom-in'>
                        <div className={styles.card_title}>
                            <h3>Welcome again!</h3>
                        </div>
                        <form className={styles.card_form}>
                            <div className={styles.card_inputs}>
                                <label>
                                    Email:<input type='email' placeholder='Email'></input>
                                </label>
                                <label>
                                    Password:<input type='password' placeholder='Password'></input>
                                </label>                                
                            </div>
                            <div className={styles.card_create_acocunt}>
                                <p>Don't have an account? <Link href='/signup'>Create an account.</Link></p>
                            </div>
                            <div className={styles.card_button}>
                                <button>Log in</button>
                            </div>
                            <div className={styles.card_line}>
                                <hr></hr>
                                <p>Or continue with</p>
                            </div>
                            <div className={styles.card_google}>
                                <button>Google</button>
                            </div>
                        </form>
                    </div>

                </section>

            </main>
    )
}