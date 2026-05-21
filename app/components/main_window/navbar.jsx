"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images_home/logo FinaFlow.png';
import styles from '../../styles/main_window/navbar.module.scss';
import { useEffect, useRef } from 'react';

export default function NavBar ({ refs }) {
    const refNavBar = useRef(null);

    useEffect(() => {

        let lastScroll = 0;
        let advance = 0;

        function Scroll () {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll) {
                advance += window.innerWidth <= 800 ? 5 : 2;
                refNavBar.current.style.transform = `translateY(-${advance}px)`;
            } else if (window.scrollY === 0) {
                advance = 0
            } else {
                advance = 0;
                refNavBar.current.style.transform = 'translateY(0px)';
            }
            
            

            lastScroll = currentScroll;
        }

        window.addEventListener("scroll", Scroll)

        return () => window.removeEventListener("scroll", Scroll);

    }, [])

    return (
        <>
            <div ref={refNavBar} className={styles.navbar}>
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
                    
                </div>
                <div className={styles.navbar_button}>
                    <button>Sign up / Sign in</button>
                </div>
            </div>
        </>
    )
}