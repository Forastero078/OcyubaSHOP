import React, { useState } from "react";
import styles from './NavBar.module.css';
import '../../iconos/style.css';




export default function NavBar(){

    const [ nav, setNav ] = useState(false)

    const display = () => {

     nav ? setNav(false) : setNav(true);


    }




    return(
        <div className={styles.nav}>

            <span className={`icon-menu3 ${styles.display}`} onClick={display}/>


            <div className={nav ? styles.routes : styles.hidden}>
            <p className={styles.button}><span className='icon-home'></span> Home </p>
            <p className={styles.button}> Indumentaria </p>
            <p className={styles.button}> Accesorios </p>
            <p className={styles.button}> About </p>
            <p className={styles.button}> Contacto </p>
            </div>

        </div>
    )
}