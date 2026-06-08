"use client"

import styles from '../../styles/finaflow/balances/balances.module.scss';
import { FaWallet } from "react-icons/fa";      // Cartera
import { FaMoneyBillWave } from "react-icons/fa"; // Billete
import { FaPiggyBank } from "react-icons/fa";   // Ahorros
import { FaCreditCard } from "react-icons/fa";  // Tarjeta
import { FaChevronRight } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import PieChart from '../../components/finaflow/section_balances/pieChart';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminCreditCard from './admin_credit_card/page';

export default function Balances () {
    const router = useRouter();

    return (
        <>
            <div className={styles.balances}>
                <div className={styles.balances_title}>
                    <h1>Current balances</h1>
                </div>
                <div className={styles.balances_body}>
                    <div className={styles.balances_totals}>
                        <div className={styles.totals_total}>
                            <div className={styles.total_background} style={{backgroundColor: 'rgb(88, 255, 210)'}}>
                                <FaWallet size={50} style={{color: 'rgb(25, 140, 108)'}} />
                            </div>
                            <div className={styles.total_text}>
                                <h3>Total balance</h3>
                                <h2 style={{color: 'rgb(25, 140, 108)'}}>$4850.00</h2>
                            </div>
                        </div>
                        <div className={styles.totals_total}>
                            <div className={styles.total_background} style={{backgroundColor: 'rgb(132, 239, 255)'}}>
                                <FaCreditCard size={50} style={{color: 'rgb(0, 97, 119)'}}/>
                            </div>
                            <div className={styles.total_text}>
                                <h3>Total cards</h3>
                                <h2 style={{color: 'rgb(0, 97, 119)'}}>$5600</h2>
                            </div>
                        </div>
                        <div className={styles.totals_total}>
                            <div className={styles.total_background} style={{backgroundColor: 'rgb(76, 255, 121)'}}>    
                                <FaMoneyBillWave size={50} style={{color: 'rgb(50, 124, 69)'}} />
                            </div>
                            <div className={styles.total_text}>
                                <h3>Total efectivo</h3>
                                <h2 style={{color: 'rgb(50, 124, 69)'}} >$2150.00</h2>
                            </div>
                        </div>
                        <div className={styles.totals_total}>
                            <div className={styles.total_background} style={{backgroundColor: 'rgb(243, 255, 131)'}}>
                                <FaPiggyBank size={50} style={{color: 'rgb(122, 153, 0)'}}/>
                            </div>
                            <div className={styles.total_text}>
                                <h3>Total ahorros</h3>
                                <h2 style={{color: 'rgb(122, 153, 0)'}}>$2000.00</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.balances_types}>
                        <div className={styles.section_types}>
                            <div className={styles.types_title}>
                                <h3>Cuentas y balances</h3>
                            </div>
                            <div className={styles.types}>
                                <div className={styles.types_type} style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px', cursor: 'default'}}>
                                    <div className={styles.type_account}>
                                        <div className={styles.type_image} style={{backgroundColor: 'rgb(76, 255, 121)'}}>
                                            <FaMoneyBillWave size={40} style={{color: 'rgb(50, 124, 69)'}} />
                                        </div>
                                        <div className={styles.type_name}>
                                            <h4>Cash</h4>
                                            <p>Dinero en mano</p>
                                        </div>
                                    </div>
                                    <div className={styles.type_data}>
                                        <div className={styles.data_balance}>
                                            <h4>$19600.00</h4>
                                            <p>disponible</p>
                                        </div>
                                        <div className={styles.data_sign}>
                                            <FaChevronRight size={20} style={{color: 'gray', visibility: 'hidden'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => router.push('/finaflow/balances/admin_credit_card')} className={styles.types_type}>
                                    <div className={styles.type_account}>
                                        <div className={styles.type_image} style={{backgroundColor: 'rgb(132, 239, 255)'}}>
                                            <FaCreditCard size={40} style={{color: 'rgb(0, 97, 119)'}}/>
                                        </div>
                                        <div className={styles.type_name}>
                                            <h4>Tarjetas de credito</h4>
                                            <p>Banco</p>
                                        </div>
                                    </div>
                                    <div className={styles.type_data}>
                                        <div className={styles.data_balance}>
                                            <h4>$0.00</h4>
                                            <p>disponible</p>
                                        </div>
                                        <div className={styles.data_sign}>
                                            <FaChevronRight size={20} style={{color: 'gray'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.types_type}>
                                    <div className={styles.type_account}>
                                        <div className={styles.type_image} style={{backgroundColor: 'rgb(255, 132, 132)'}}>
                                            <FaCreditCard size={40} style={{color: 'rgb(119, 0, 0)'}}/>
                                        </div>
                                        <div className={styles.type_name}>
                                            <h4>Tarjetas de debito</h4>
                                            <p>Banco</p>
                                        </div>
                                    </div>
                                    <div className={styles.type_data}>
                                        <div className={styles.data_balance}>
                                            <h4>$24500.00</h4>
                                            <p>disponible</p>
                                        </div>
                                        <div className={styles.data_sign}>
                                            <FaChevronRight size={20} style={{color: 'gray'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.types_type}>
                                    <div className={styles.type_account}>
                                        <div className={styles.type_image} style={{backgroundColor: 'rgb(243, 255, 131)'}}>
                                            <FaPiggyBank size={40} style={{color: 'rgb(122, 153, 0)'}}/>
                                        </div>
                                        <div className={styles.type_name}>
                                            <h4>Ahorros</h4>
                                            <p>Banco y/o efectivo</p>
                                        </div>
                                    </div>
                                    <div className={styles.type_data}>
                                        <div className={styles.data_balance}>
                                            <h4>$320.00</h4>
                                            <p>disponible</p>
                                        </div>
                                        <div className={styles.data_sign}>
                                            <FaChevronRight size={20} style={{color: 'gray'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.types_type} style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                    <div className={styles.type_account}>
                                        <div className={styles.type_image}>
                                            <MdAccountBalanceWallet size={40} />
                                        </div>
                                        <div className={styles.type_name}>
                                            <h4>Otros</h4>
                                            <p>Banco y/o efectivo</p>
                                        </div>
                                    </div>
                                    <div className={styles.type_data}>
                                        <div className={styles.data_balance}>
                                            <h4>$0.00</h4>
                                            <p>disponible</p>
                                        </div>
                                        <div className={styles.data_sign}>
                                            <FaChevronRight size={20} style={{color: 'gray'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section_dashboard}>
                            <div className={styles.dashboard_title}>
                                <h3>Distribuicion de saldos</h3>
                            </div>
                            <div className={styles.dashboard_pieChart}>
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className={styles.balances_table}>
                        <div className={styles.section_table_title}>
                            <h3>Historial reciente</h3>
                        </div>
                        <div className={styles.table}>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Fecha</td>
                                        <td>Descripcion</td>
                                        <td>Cuenta</td>
                                        <td>Tipo</td>
                                        <td>Monto</td>
                                        <td>Saldo resultante</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}