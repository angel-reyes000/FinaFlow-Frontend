"use client"

import styles from '../styles/finaflow/menu.module.scss';
import { FiMenu } from 'react-icons/fi';
import logo from '../../public/images_home/new_logo_finaflow.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
    MdDashboard,
    MdAccountBalanceWallet,
    MdAttachMoney,
    MdTrendingUp,
    MdPieChart,
    MdCreditCard,
    MdSettings,
 } from 'react-icons/md'; 

export default function Menu () {
    const router = useRouter()

    return (
        <>
            <div className={styles.dashboards_three_dots}>
                <FiMenu size={50}/> 
            </div>
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
                        <li onClick={() => router.push('/finaflow')}><MdDashboard size={25} style={{marginRight: '5%'}} />Dashboards</li>
                        <li onClick={() => router.push('/finaflow/balances')}><MdAccountBalanceWallet size={25} style={{marginRight: '5%'}}/>Saldos actuales</li>
                        <li><MdAttachMoney size={25} style={{marginRight: '5%'}} />Registrar gasto</li>
                        <li><MdTrendingUp size={25} style={{marginRight: '5%'}} />Ingresos</li>
                        <li><MdPieChart size={25} style={{marginRight: '5%'}} />Presupuesto mensual</li>
                        <li><MdCreditCard size={25} style={{marginRight: '5%'}} />Deudas</li>
                    </ul>
                </div>
                <div className={styles.menu_footer}>
                    <ul>
                        <li><MdSettings size={25} style={{marginRight: '5%'}} />Settings</li>
                    </ul>
                </div>
            </div>
        </>
    )
}