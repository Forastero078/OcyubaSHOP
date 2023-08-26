import React from "react";
import styles from './Home.module.css';
import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
import logo from '../../img/logo.jpg'

const imgs = ['http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg', 'http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg', 'http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg']

export default function Home() {






    return (
        <div>
            <NavBar />
            <section className={styles.logo_conteiner}>
                <img src={logo} alt="OcyubaSHOP" className={styles.logo} />
            </section>

            <h1 className={styles.title}>Bienvenido a OCYUBA</h1>
            
            <Carousel images={imgs}/>

        </div>
    )
}