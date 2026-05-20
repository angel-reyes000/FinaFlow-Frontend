import styles from '../../styles/main_window/pay.module.scss';

export default function Pay () {
    return (
        <>
            <div className={styles.pay}>
                <div className={styles.pay_free}>
                    <div className={styles.pay_cost}>
                        <p>Free</p>
                        <h3>$0 USD</h3>
                        <h6>Monthly</h6>
                    </div>
                    <div className={styles.pay_list}>
                        <ul>
                            <li>Advanced financial reports</li>
                            <li>Real-time synchronization</li>
                            <li>Statistics and charts</li>
                            <li>Access from any device</li>
                            <li style={{color: 'rgba(0, 0, 0, 0.30)'}}>PDF/Excel report export</li>
                            <li style={{color: 'rgba(0, 0, 0, 0.30)'}}>AI-powered financial insights</li>
                        </ul>
                    </div>
                    <div className={styles.pay_button_free}>
                        <button>Now</button>
                    </div>
                </div>
                <div className={styles.pay_premium}>
                    <div className={styles.pay_cost}>
                        <p>Free</p>
                        <h3>$5 USD</h3>
                        <h6>Monthly</h6>
                    </div>
                    <div className={styles.pay_list}>
                        <ul>
                            <li>Advanced financial reports</li>
                            <li>Real-time synchronization</li>
                            <li>Statistics and charts</li>
                            <li>Access from any device</li>
                            <li>PDF/Excel report export</li>
                            <li>AI-powered financial insights</li>
                        </ul>
                    </div>
                    <div className={styles.pay_button_premium}>
                        <button>Upgrade to premium</button>
                    </div>
                </div>
            </div>
        </>
    )
}