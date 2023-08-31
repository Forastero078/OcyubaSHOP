import React, { useState } from "react";
import styles from './NavBar.module.css';
import '../../iconos/style.css';
import { Link } from 'react-router-dom'



export default function NavBar() {

    const [nav, setNav] = useState(false)
    const [displayIndumentaria, setDisplayIndumentaria] = useState(false);

    const displayNav = () => {
        nav ? setNav(false) : setNav(true);

    }

    const displayInd = () => {

        displayIndumentaria ? setDisplayIndumentaria(false) : setDisplayIndumentaria(true);

    }



    return (
        <div className={styles.nav}>

            <span name='nav' className={`icon-menu3 ${styles.display}`} onClick={displayNav} />
            <section className={styles.buttons}>
                
                <span className={`icon-cart ${styles.carrito_fav}`}></span>
                <span className={`icon-heart ${styles.carrito_fav}`}></span>
                <button className={styles.login}>Ingresar</button>

                <button className={styles.signup}>Registrarse</button>
            </section>

            <div className={nav ? styles.routes : styles.hidden}>
               <Link to='/' style={{ textDecoration: 'none' }}> <p className={styles.button}><span className='icon-home'></span> Home </p></Link>

                 <p className={styles.button} onClick={displayInd}><span className="icon-man-woman"></span> Indumentaria </p> 
                 
                 <Link to='/indumentaria/mujer/' style={{ textDecoration: 'none' }}><p className={displayIndumentaria ? styles.button2 : styles.hidden}><span className="icon-woman"></span>Mujer</p> </Link>
                 
                 <Link to='/indumentaria/kids/' style={{ textDecoration: 'none' }}><p className={displayIndumentaria ? styles.button2 : styles.hidden}><span className="icon-man-woman"></span> Kids</p> </Link>

                 <Link to='/accesorios' style={{ textDecoration: 'none' }}><p className={styles.button}><span className='icon-bug'></span> Accesorios </p> </Link>

                 <Link to='/about' style={{ textDecoration: 'none' }}><p className={styles.button}><span className="icon-rocket"></span> About </p> </Link>

                 <Link to='/contact' style={{ textDecoration: 'none' }}><p className={styles.button}><span className="icon-mail4"></span> Contacto </p> </Link>

            </div>

        </div>
    )
}