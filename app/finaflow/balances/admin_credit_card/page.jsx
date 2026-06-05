"use client"

import styles from '../../../styles/finaflow/balances/admin_credit_card.module.scss';
import { use, useEffect, useRef, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

function ModalAdd ({ ref }) {
    const [cardHolder, setCardHolder] = useState('');
    const [bank, setBank] = useState('');
    const [cardType, setCardType] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [status, setStatus] = useState('');

    return (
        <>
            <dialog ref={ref} className={styles.dialog_add}>
                <form className={styles.form_add} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.form_add_title}>
                        <h2>New credit card record</h2>                        
                    </div>
                    <div className={styles.form_add_holder}>
                        <label>
                            Card holder:<input value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} type='text' placeholder='Card holder'></input>
                        </label>
                    </div>
                    <div className={styles.form_add_bank_type}>
                        <label>
                            Bank:
                            <select value={bank} onChange={(e) => setBank(e.target.value)}>
                                <option></option>
                                <option>'BBVA'</option>
                            </select>
                        </label>
                        <label>
                            Card type:
                            <select>
                                <option>Visa</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.form_add_digits_status}>
                        <label>
                            Last four digits:
                            <input type='number'></input>
                        </label>
                        <label>
                            status:
                            <select>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.form_add_buttons}>
                        <button type='submit' style={{backgroundColor: 'rgb(12, 220, 192)'}}>Save</button>
                        <button type='button' onClick={() => ref.current.close()} 
                            style={{backgroundColor: 'red'}}>Cancel</button>
                    </div>  
                </form>
            </dialog>
        </>
    )
}

const pre_data = [
    {
        id: 1,
        cardHolder: 'Angel Reyes',
        bank: 'BBVA',
        cardType: 'Visa',
        lastFourDigits: '0934',
        status: 'Active',
    }
]

export default function AdminCreditCard () {
    const [data, setData] = useState(pre_data);

    const refModalAdd = useRef(null);

    return (
        <>  
            <ModalAdd ref={refModalAdd} />
            <div className={styles.credit_card}>
                <div className={styles.credit_card_title}>
                    <h1>Credit Card record</h1>
                </div>
                <div className={styles.credit_card_search_add}>
                    <div className={styles.search}>
                        <FaSearch style={{marginRight: '1%'}} />
                        <input placeholder='Search card...'></input>
                    </div>
                    <button onClick={() => refModalAdd.current.showModal()}><FaPlus style={{marginRight: '3%'}}/>Add record</button>
                </div>
                <div className={styles.credit_card_table}>
                    <table>
                        <thead>
                            <tr>
                                <td>Card holder</td>
                                <td>Bank</td>
                                <td>Card type</td>
                                <td>last four digits</td>
                                <td>status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(obj => (
                                <tr key={obj.id} onClick={() => refModalAdd.current.showModal()}>
                                    <td>{obj.cardHolder}</td>
                                    <td>{obj.bank}</td>
                                    <td>{obj.cardType}</td>
                                    <td>{obj.lastFourDigits}</td>
                                    <td>{obj.status}</td>
                                    <td className={styles.action}>...</td>
                                </tr>
                            ))}                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}