"use client"

import styles from '../../../styles/finaflow/dashboards.module.scss';
import { FiMenu } from 'react-icons/fi';
import { FaUtensils, FaCar } from 'react-icons/fa';
import PieChart from './pieChart';
import LineChart from './lineChart';
import BarChar from './barChar';
import { useState } from 'react';

function category_types (type) {
    switch (type) {
        case 'Alimentos':
            return <FaUtensils size={60} color='rgb(178, 0, 0)' />
        case 'Transporte':
            return <FaCar size={60} color='rgb(132, 150, 0)' />

    }
}

let main_category = [
    {
        type: 'Alimentos',
        gasto: '$4250',
        porcentaje: '60%',
        image: function () {
            return category_types(this.type)
        },
        background_image: 'rgb(255, 147, 147)'
    },
    {
        type: 'Transporte',
        gasto: '$3250',
        porcentaje: '20%',
        image: function () {
            return category_types(this.type)
        },
        background_image: 'rgb(252, 255, 79)'
    },
];

const proximos_gastos = [
    {
        nombre: 'Alimentos',
        fecha_limite: '18/05/2026',
        cantidad: '$3000',
    },
    {
        nombre: 'Transporte',
        fecha_limite: '10/07/2026',
        cantidad: '$1000',
    },
    {
        nombre: 'Alimentos',
        fecha_limite: '01/11/2026',
        cantidad: '$500',
    },
    {
        nombre: 'Alimentos',
        fecha_limite: '24/05/2026',
        cantidad: '$2000',
    },
    {
        nombre: 'Transporte',
        fecha_limite: '18/09/2026',
        cantidad: '$4000',
    },
            {
        nombre: 'Alimentos',
        fecha_limite: '01/11/2026',
        cantidad: '$500',
    },
    {
        nombre: 'Alimentos',
        fecha_limite: '24/05/2026',
        cantidad: '$2000',
    },
]

export default function Dashboards () {
    const [mainCategory, setMainCategory] = useState(main_category);
    const [upcomingExpenses, setUpcomingExpenses] = useState(proximos_gastos);

    return (
        <>
            <div className={styles.dashboards}>
                <div className={styles.dashboards_graphs}>
                    <div className={styles.dashboards_title}>
                        <h1>Dashboards</h1>
                    </div>
                    <div className={styles.dashboards_visual}>
                        <div className={styles.dashboards_columns_one}>
                            <div className={styles.dashboards_background_saldo}>
                                <div className={styles.dashboards_saldo}>
                                    <h3>Saldo actual</h3>
                                    <h2>4250.00</h2>
                                </div>
                            </div>
                            
                            <div className={styles.dashboards_presupuesto}>
                                <div className={styles.presupuesto_title}>
                                    <h3>Presupuesto mensual</h3>
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
                            <div className={styles.dashboards_gastos}>
                                <h3>Gastos semanales</h3>
                                <LineChart />
                            </div>
                        </div>
                        <div className={styles.dashboards_columns_two}>
                            <div className={styles.dashboards_ingresos}>
                                <h3>Ingresos mensuales</h3>
                                <BarChar />
                            </div>
                            <div className={styles.dashboards_categorias}>
                                <div className={styles.categorias_title}>
                                    <h3>Categorias principales</h3>
                                </div>
                                <div className={styles.categorias_data}>

                                    {main_category.map(obj => (
                                        <div className={styles.categorias_category}>
                                            <div className={styles.category_image} style={{backgroundColor: `${obj.background_image}`}}>
                                                {obj.image()}
                                            </div>
                                            <div className={styles.category_data}>   
                                                <h3>{obj.type}</h3>
                                                <p>{obj.gasto}</p>
                                            </div>
                                            <div className={styles.category_load}>
                                                <div className={styles.load_porcentaje}>
                                                    <p>{obj.porcentaje}</p>
                                                </div>
                                                <div className={styles.load}>
                                                    <div className={styles.loading} style={{width: `${obj.porcentaje}`}}><p>.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboards_table}>
                        <h1>Proximos gastos</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>Nombre de gasto</td>
                                    <td>Fecha limite</td>
                                    <td>Cantidad</td>
                                </tr>
                            </thead>
                            <tbody>                                
                                {upcomingExpenses.map(obj => (
                                    <tr>
                                        <td>{obj.nombre}</td>
                                        <td>{obj.fecha_limite}</td>
                                        <td>{obj.cantidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </>
    )
}