import React from "react";
import styles from './Home.module.css';
import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
import logo from '../../img/logo.jpg'
import '../../iconos/style.css';

const imgsWomen = ['http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg', 'http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg', 'http://fashionblogmexico.com/wp-content/uploads/2013/01/ropa-de-moda.jpg', 'https://i.blogs.es/f3e159/stradivarius-lookbook-agosto-2013-4/450_1000.jpg', 'https://i.blogs.es/a5f115/stradivarius-lookbook-agosto-2013-3/450_1000.jpg']

const imgsMan = ['https://cdn.pixabay.com/photo/2020/05/01/08/29/portrait-5115894_1280.jpg', 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg', 'https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_1280.jpg'];



export default function Home() {






    return (
        <div>
            {/* <NavBar /> */}
            <section className={styles.logo_conteiner}>
                <img src={logo} alt="OcyubaSHOP" className={styles.logo} />
            </section>

            <h1 className={styles.title}>Bienvenido a OCYUBA</h1>

            <section className={styles.redes}>
                <span className="icon-facebook2"></span>
                <span className="icon-instagram"></span>
                <span className="icon-whatsapp"></span>
            </section>



            <p className={styles.pTitle}>Mujer</p>

             <Carousel images={imgsWomen} linkTo={'/indumentaria/mujer'} description={'Catalogo Mujer -->'}/>

            <p className={styles.pTitle}>Niños</p>

            <Carousel images={imgsMan} linkTo={'/indumentaria/kids'} description={'Catalogo Niños -->'}/>


            <section className={styles.footer}>
                <p className={styles.title}>En OCYUBA-SHOP encontraras indumentaria de altisimo nivel a precios realmente ¡Increibles!</p>
            </section>
        </div>
    )
}