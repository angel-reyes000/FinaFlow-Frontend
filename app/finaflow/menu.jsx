"use client"

import styles from '../styles/finaflow/menu.module.scss';
import { FiMenu } from 'react-icons/fi';
import logo from '../../public/images_home/logo FinaFlow.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Menu () {
    const router = useRouter()

    return (
        <>
            <div className={styles.menu}>
                <div className={styles.three_dots}>
                    <FiMenu size={50}/>
                </div>
                <div className={styles.menu_header} onClick={() => router.push('/')}>
                    <Image src={logo} width={60} height={60} alt='Representative logo' />
                    <h3>FinaFlow</h3>
                </div>
                <div className={styles.menu_list}>
                    <ul>
                        <li onClick={() => router.push('/finaflow')}>Dashboards</li>
                        <li>Registrar gasto</li>
                        <li>Saldos actuales</li>
                        <li>Deudas</li>
                    </ul>
                </div>
                <div className={styles.menu_footer}>
                    <ul>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
        </>
    )
}