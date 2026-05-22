"use client"

import Image from 'next/image';
import background from '../../public/images_auth/background_auth_finaflow.png';
import styles from '../styles/auth/login.module.scss';
import logo from '../../public/images_home/logo FinaFlow.png';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function InvalidData () {
    return (
        <>
            <div className={styles.invalid_message}>
                <p>Invalid data or user no exist.</p>
            </div>
        </>
    )
}

export default function Login () { 
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
            once: true
        })
    }, [])

    async function connection_db (e) {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const data = await res.json()

            const token = data.token;
            
            localStorage.setItem('token', token);

            if (res.status === 200){
                console.log("Acceso a cuenta")
                router.push('/');
                router.refresh();
            }
        } catch (error) {
            console.log("Error: ", error.message)
        }
    }

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
                        <form className={styles.card_form} onSubmit={connection_db}>
                            <div className={styles.card_inputs}>
                                <label>
                                    Email:<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' maxLength={50} placeholder='Email'></input>
                                </label>
                                <label>
                                    Password:<input value={password} onChange={(e) => setPassword(e.target.value)} type='password' maxLength={10} placeholder='Password'></input>
                                </label>                                
                            </div>
                            <div className={styles.card_create_acocunt}>
                                <p>Don't have an account? <Link href='/signup'>Create an account.</Link></p>
                            </div>
                            <div className={styles.card_button}>
                                <button type='submit'>Log in</button>
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