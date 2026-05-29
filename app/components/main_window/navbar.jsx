"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images_home/new_logo_finaflow.png';
import styles from '../../styles/main_window/navbar.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NavBar ({ refs }) {
    const refNavBar = useRef(null);
    const refDialog = useRef(null);
    const router = useRouter();

    useEffect(() => {

        AOS.init({
            duration: 1000,
            delay: 0,
            once: false
        })

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

    function openModal () {
        refDialog.current.showModal();
    }

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
                    <button onClick={() => {
                        if (refs.sessionActive) {
                            openModal()
                        } else {
                            router.push('/login')
                        }

                        }}>{refs.sessionActive ? 'Log out' : 'Sign up / Sign in'}
                    </button>
                </div>
                
            </div>
            <dialog ref={refDialog} className={styles.navbar_modal} data-aos='fade'>
                <div className={styles.modal_title}>
                    <Image src={logo} height={70} width={70} alt='Application logo'></Image>
                    <h2>Are you sure you want to log out?</h2>
                </div>
                <div className={styles.modal_buttons}>
                    <button onClick={() => {
                        localStorage.removeItem('token')
                        router.push('/login')
                    }} style={{backgroundColor: 'rgb(9, 101, 94)', color: 'white'}}>Log out</button>
                    
                    <button onClick={() => refDialog.current.close()} style={{backgroundColor: 'rgb(170, 170, 170)', color: 'black'}}>Cancel</button>
                </div>                
            </dialog>
        </>
    )
}