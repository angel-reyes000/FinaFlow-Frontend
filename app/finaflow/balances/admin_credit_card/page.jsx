"use client"

import { number } from 'echarts';
import styles from '../../../styles/finaflow/balances/admin_balances.module.scss';
import { use, useEffect, useRef, useState } from 'react';
import { FaPlus, FaSearch, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { ref } from 'process';
import { FaExclamationTriangle } from "react-icons/fa";

let ids = 0;
const pre_data = [
    {
        id: ids++,
        cardHolder: 'Angel Reyes',
        bank: 'BBVA',
        cardType: 'Visa',
        lastFourDigits: '0934',
        status: 'Active',
        balance: 2000,
    },
    {
        id: ids++,
        cardHolder: 'Maria Lara',
        bank: 'BanCoppel',
        cardType: 'Visa',
        lastFourDigits: '0001',
        status: 'Active',
        balance: 1500,
    }
]

export default function AdminCreditCard () {
    const [data, setData] = useState(pre_data);
    const [inputSearch, setInputSearch] = useState('');

    const [id, setId] = useState(0)
    const [cardHolder, setCardHolder] = useState('');
    const [bank, setBank] = useState('');
    const [cardType, setCardType] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [status, setStatus] = useState('');
    const [balance, setBalance] = useState('');

    const refModalEdit = useRef(null);
    const refModalAdd = useRef(null);
    const refModalSureDelete = useRef(null);

    function modalSureDelete () {
        return (
            <>
                <dialog className={styles.dialog_sure_delete} ref={refModalSureDelete}>
                    <div className={styles.sure_delete_icon}>
                        <FaExclamationTriangle size={80} />
                    </div>
                    <div className={styles.sure_delete_title}>
                        <h1>Are you sure you want to delete this?</h1>
                        <p>This action cannot be undone.</p>
                    </div>
                    <div className={styles.sure_delete_buttons}>
                        <button onClick={() => {
                                            setData(() => data.filter(obj => obj.id !== id))
                                            refModalSureDelete.current.close()
                                            refModalEdit.current.close()
                                        }} 
                        style={{backgroundColor: 'red'}}>Delete</button>
                        <button onClick={() => refModalSureDelete.current.close()}
                        style={{backgroundColor: 'gray'}}>Cancel</button>
                    </div>
                </dialog>
            </>
        )
    }

    function modalEdit () {
        return (
            <>  
                {modalSureDelete()}
                <dialog ref={refModalEdit} className={styles.dialog_add}>
                    <form className={styles.form_add} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.form_add_title}>
                            <h2>Edit credit card record</h2>                        
                        </div>
                        <div className={styles.form_add_inputs}>
                            <div className={styles.form_add_holder}>
                                <label>
                                    Card holder:<input value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} type='text' placeholder='Card holder'></input>
                                </label>
                            </div>
                            <label>
                                Bank:
                                <select value={bank} onChange={(e) => setBank(e.target.value)}>
                                    <option></option>
                                    <option>BBVA</option>
                                    <option>BanCoppel</option>
                                </select>
                            </label>
                            <label>
                                Card type:
                                <select>
                                    <option>Visa</option>
                                </select>
                            </label>
                            <label>
                                Last four digits:
                                <input value={lastFourDigits} onChange={(e) => setLastFourDigits(e.target.value)}></input>
                            </label>
                            <label>
                                status:
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </label>
                            <label>
                                Balance:
                                <input type='number' value={balance} onChange={(e) => setBalance(e.target.value)}></input>
                            </label>
                        </div>
                        <div className={styles.form_add_buttons}>
                            <button onClick={() => {
                                setData(() => data.map(obj => obj.id === id ? {...obj, 
                                                                                cardHolder: cardHolder,
                                                                                bank: bank,
                                                                                cardType: cardType,
                                                                                lastFourDigits: lastFourDigits,
                                                                                status: status,
                                                                                balance: balance,
                                                                            } : obj))
                                refModalEdit.current.close()
                            }} type='submit' style={{backgroundColor: 'rgb(12, 220, 192)'}}>Save</button>
                            <button onClick={() => refModalEdit.current.close()} style={{backgroundColor: 'gray'}}>Cancel</button>
                            <button type='button' onClick={() => refModalSureDelete.current.showModal()} 
                                style={{backgroundColor: 'red', width: 'fit-content', padding: '2% 5%'}}><FaTrash /></button>
                        </div>  
                    </form>
                </dialog>
            </>
        )
    }

    function modalAdd () {
        return (
            <>
                <dialog ref={refModalAdd} className={styles.dialog_add}>
                    <form className={styles.form_add} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.form_add_title}>
                            <h2>New credit card record</h2>                        
                        </div>
                        <div className={styles.form_add_inputs}>
                            <div className={styles.form_add_holder}>
                                <label>
                                    Card holder:<input value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} type='text' placeholder='Card holder'></input>
                                </label>
                            </div>
                            <label>
                                Bank:
                                <select value={bank} onChange={(e) => setBank(e.target.value)}>
                                    <option></option>
                                    <option>BBVA</option>
                                    <option>BanCoppel</option>
                                </select>
                            </label>
                            <label>
                                Card type:
                                <select>
                                    <option>Visa</option>
                                </select>
                            </label>
                            <label>
                                Last four digits:
                                <input value={lastFourDigits} onChange={(e) => setLastFourDigits(e.target.value)}></input>
                            </label>
                            <label>
                                status:
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </label>
                            <label>
                                Balance:
                                <input type='number' value={balance} onChange={(e) => setBalance(e.target.value)}></input>
                            </label>
                        </div>
                        <div className={styles.form_add_buttons}>
                            <button onClick={() => {
                                setData([...data, {
                                    id: ids++,
                                    cardHolder: cardHolder,
                                    bank: bank,
                                    cardType: cardType,
                                    lastFourDigits: lastFourDigits,
                                    status: status,
                                    balance: balance,
                                }])
                                refModalAdd.current.close()
                            }} type='submit' style={{backgroundColor: 'rgb(12, 220, 192)'}}>Save</button>
                            <button type='button' onClick={() => refModalAdd.current.close()} 
                                style={{backgroundColor: 'red'}}>Cancel</button>
                        </div>  
                    </form>
                </dialog>
            </>
        )
    }

    return (
        <>  
            {modalEdit()}
            {modalAdd()}
            <div className={styles.credit_card}>
                <div className={styles.credit_card_title}>
                    <Link href='/finaflow/balances/'>{'< '}Back</Link>
                    <h1>Credit Card record</h1>
                </div>
                <div className={styles.background_table_input_button}>
                    <div className={styles.credit_card_search_add}>
                        <div className={styles.search}>
                            <FaSearch style={{marginRight: '1%'}} />
                            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search card...'></input>
                        </div>
                        <button onClick={() => {
                            setId('');
                            setCardHolder('');
                            setBank('');
                            setCardType('');
                            setLastFourDigits('');
                            setStatus('');
                            setBalance('');
                            refModalAdd.current.showModal()
                            }}>
                        <FaPlus style={{marginRight: '3%'}}/>Add record</button>
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
                                    <td>balance</td>
                                </tr>
                            </thead>
                            <tbody> 
                                {inputSearch === '' ? data.map(obj => (
                                    <tr key={obj.id} onClick={() => {
                                            refModalEdit.current.showModal()  
                                            setId(obj.id);
                                            setCardHolder(obj.cardHolder);
                                            setBank(obj.bank);
                                            setCardType(obj.cardType);
                                            setLastFourDigits(obj.lastFourDigits);
                                            setStatus(obj.status);
                                            setBalance(obj.balance);
                                        }}>
                                        <td>{obj.cardHolder}</td>
                                        <td>{obj.bank}</td>
                                        <td>{obj.cardType}</td>
                                        <td>{obj.lastFourDigits}</td>
                                        <td>{obj.status}</td>
                                        <td>${obj.balance}</td>
                                    </tr>
                                )) : data.map(obj => 
                                        obj.cardHolder.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        obj.bank.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        obj.cardType.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        obj.lastFourDigits.includes(inputSearch) ||
                                        obj.status.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        obj.balance.toString().includes(inputSearch) ? (
                                        <tr key={obj.id} onClick={() => {
                                                refModalEdit.current.showModal()  
                                                setId(obj.id);
                                                setCardHolder(obj.cardHolder);
                                                setBank(obj.bank);
                                                setCardType(obj.cardType);
                                                setLastFourDigits(obj.lastFourDigits);
                                                setStatus(obj.status);
                                                setBalance(obj.balance);
                                            }}>
                                            <td>{obj.cardHolder}</td>
                                            <td>{obj.bank}</td>
                                            <td>{obj.cardType}</td>
                                            <td>{obj.lastFourDigits}</td>
                                            <td>{obj.status}</td>
                                            <td>${obj.balance}</td>
                                        </tr>
                                    ): null)
                            }                                                     
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}