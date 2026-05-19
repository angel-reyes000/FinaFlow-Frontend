import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images_home/logo FinaFlow.png';
import styles from '../../styles/main_window/navbar.module.scss';

export default function NavBar () {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar_logo}>
                    <Image src={logo} height={70} width={70} alt='Application logo'></Image>
                    <p>FinaFlow</p>
                </div>
                <div className={styles.navbar_sections}>
                    <div className={styles.navbar_links}>
                        <Link href='/LGO'>Home</Link>
                        <Link href='/algo'>Features</Link>
                        <Link href='/ok'>Objetives</Link>
                        <Link href='/ok'>Pricing</Link>
                    </div>
                    <button>Sign up / Sign in</button>
                </div>
            </div>
        </>
    )
}