import styles from '../../styles/main_window/footer.module.scss';

export default function Footer () {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_information}>
                    <div className={styles.footer_contact}>
                        <h3>Contact</h3>
                        <p>Email: <a href='mailto:ar731684@gmail.com'>ar731684@gmail.com</a></p>
                    </div>
                    <div className={styles.footer_reservate}>
                        <p>@ 2026 FinaFlow. Angel Reyes.</p>
                    </div>
                </div>
                <div className={styles.footer_about}>
                    <h3>About</h3>
                    <p>Manage your personal finances easily, visualize your income and expenses in real time with clear charts, and make better financial decisions.</p>
                </div>
            </div>
        </>
    )
}