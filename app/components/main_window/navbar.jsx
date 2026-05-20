"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images_home/logo FinaFlow.png';
import styles from '../../styles/main_window/navbar.module.scss';

export default function NavBar ({ refs }) {

    console.log(refs)

    return (
        <>
            <div id='navbar' className={styles.navbar}>
                <div className={styles.navbar_logo}>
                    <Image src={logo} height={70} width={70} alt='Application logo'></Image>
                    <p>FinaFlow</p>
                </div>
                <div className={styles.navbar_sections}>
                    <div className={styles.navbar_links}>
                        <Link href='/' onClick={(e) => {
                            e.preventDefault()
                            refs.refSectionHome.current.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>Home</Link>
                        <Link href='/' 
                            onClick={(e) => {
                                e.preventDefault()
                                refs.refSectionFeatures.current.scrollIntoView({
                                    behavior: 'smooth'
                                })
                        }}>Features</Link>
                        <Link href='/' 
                            onClick={(e) => {
                                e.preventDefault()
                                refs.refSectionBody.current.scrollIntoView({
                                    behavior: 'smooth'
                                })
                        }}>Objetives</Link>
                        <Link href='#' 
                            onClick={(e) => {
                                e.preventDefault()
                                refs.refSectionPay.current.scrollIntoView({
                                    behavior: "smooth"
                                })
                        }}>Pricing</Link>
                    </div>
                    <button>Sign up / Sign in</button>
                </div>
            </div>
        </>
    )
}