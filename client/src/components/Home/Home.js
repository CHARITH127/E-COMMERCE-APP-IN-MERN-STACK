import React from 'react'
import styles from './Home.module.css'
import image from '../../asessts/homeImage.jpg'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest invoicing management system </h1>
                <div className={styles.imgContainer}>
                    <img src={image } alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
