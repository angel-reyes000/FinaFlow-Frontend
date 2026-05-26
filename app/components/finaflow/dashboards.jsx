import styles from '../../styles/finaflow/dashboards.module.scss';
import { FiMenu } from 'react-icons/fi';
import PieChart from './pieChart';
import LineChart from './lineChart';

export default function Dashboards () {
    return (
        <>
            <div className={styles.dashboards}>
                <div className={styles.dashboards_three_dots}>
                    <FiMenu size={50}/>
                </div>
                <div className={styles.dashboards_graphs}>
                    <div className={styles.dashboards_title}>
                        <h1>Dashboards</h1>
                    </div>
                    <div className={styles.dashboards_visual}>
                        <div className={styles.dashboards_columns_one}>
                            <div className={styles.dashboards_saldo}>
                                <h3>Saldo actual</h3>
                                <h2>4250.00</h2>
                            </div>
                            <div className={styles.dashboards_presupuesto}>
                                <div className={styles.presupuesto_title}>
                                    <h3>Presupuesto detallado</h3>
                                </div>
                                <div className={styles.presupuesto_graficos}>
                                    <div>
                                        <PieChart />
                                    </div>
                                    <div className={styles.presupuesto_barras}>
                                        <div className={styles.barras}>
                                            <div className={styles.barras_title}>
                                                <p>Alimentos</p>
                                                <p>80%</p>
                                            </div>         
                                            <div className={styles.barras_load}>
                                                <span className={styles.barras_loading}><p>.</p></span>
                                            </div>                                   
                                        </div>
                                        <div className={styles.barras}>
                                            <div className={styles.barras_title}>
                                                <p>Transporte</p>
                                                <p>80%</p>
                                            </div>
                                            <div className={styles.barras_load}>
                                                <span className={styles.barras_loading}><p>.</p></span>
                                            </div> 
                                        </div>
                                        <div className={styles.barras}>
                                            <div className={styles.barras_title}>
                                                <p>Otros</p>
                                                <p>80%</p>
                                            </div>
                                            <div className={styles.barras_load}>
                                                <span className={styles.barras_loading}><p>.</p></span>
                                            </div>  
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className={styles.dashboards_ingresos}>
                                <h3>Ingresos mensuales</h3>
                                <LineChart />
                            </div>
                        </div>
                        <div className={styles.dashboards_columns_two}>
                            <div className={styles.dashboards_gastos}>
                                Gastos semanales
                            </div>
                            <div className={styles.dashboards_categorias}>
                                Categorias principales
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboards_table}>
                        <h1>tabla</h1>
                    </div>
                </div>
            </div> 
        </>
    )
}