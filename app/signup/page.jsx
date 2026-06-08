"use client"

import Image from 'next/image';
import background from '../../public/images_auth/background_auth_finaflow.png';
import styles from '../styles/auth/signup.module.scss';
import logo from '../../public/images_home/new_logo_finaflow.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function DiferentPassword () {
    return (
        <>
            <div className={styles.invalid_message}>
                <p>Password is different</p>
            </div>
        </>
    )
}

function InvalidData () {
    return (
        <>
            <div className={styles.invalid_message}>
                <p>Invalid data or user already exist.</p>
            </div>
        </>
    )
}

export default function Signup () { 
    const router = useRouter()
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [diferentPassword, setDiferentPassword] = useState(false);
    const [invalidData, setInvalidData] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
            once: true
        })
    }, [])

    async function connection_db (e) {
        e.preventDefault()

        if (password !== confirmPassword) {
            setDiferentPassword(true);
            return null
        } else {
            setDiferentPassword(false)
        }
        try {   
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_USERS}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    last_name: lastName,
                    email: email,
                    password: password
                })
            })

            if (res.status !== 201 || name.length > 30 || lastName.length > 30 || email.length > 50 || password.length > 10) {
                setInvalidData(true);
            } else {
                setInvalidData(false);
                router.push('/login')
            }

        } catch (error) {
            console.log(error.message);
        }    
    }

    return (
            <main className={styles.signup_background}>

                <section className={styles.signup_logo_card}>
                    <div className={styles.signup_logo} onClick={() => router.push('/')} data-aos='fade'>
                        <Image src={logo} width={100} height={100} alt='Logo FinaFlow'/>
                        <h1>FinaFlow</h1>
                    </div>
                    <div className={styles.signup_card} data-aos='zoom-in'>
                        <div className={styles.card_title}>
                            <h3>Welcome to FinaFlow!</h3>
                        </div>
                        <form className={styles.card_form} onSubmit={connection_db}>
                            <div className={styles.card_inputs}>
                                <label>
                                    Name:<input value={name} onChange={(e) => setName(e.target.value)} maxLength={30} placeholder='Name'></input>
                                </label>
                                <label>
                                    last name:<input value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={30} placeholder='Last name'></input>
                                </label>
                                <label>
                                    Email:<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' maxLength={50} placeholder='Email'></input>
                                </label>
                                
                                <label>
                                    Password:<input value={password} onChange={(e) => setPassword(e.target.value)} type='password' maxLength={10} placeholder='Password'></input>
                                </label>  
                                <label>
                                    Confirm password:<input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' maxLength={10} placeholder='Confirm password'></input>
                                    {diferentPassword ? <DiferentPassword /> : null}                              
                                </label>
                            </div>
                            <div className={styles.card_create_acocunt}>
                                <p><Link href='/login'>I already have an account.</Link></p>
                            </div>
                            {invalidData ? <InvalidData /> : null}
                            <div className={styles.card_button}>
                                <button type='submit'>Sign Up</button>
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