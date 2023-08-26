import React, { useState } from "react";
import styles from './NavBar.module.css';
import '../../iconos/style.css';




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
                <button className={styles.login}>Ingresar</button>

                <button className={styles.signup}>Registrarse</button>
            </section>

            <div className={nav ? styles.routes : styles.hidden}>
                <p className={styles.button}><span className='icon-home'></span> Home </p>

                <p className={styles.button} onClick={displayInd}><span className="icon-man-woman"></span> Indumentaria </p>
                <p className={displayIndumentaria ? styles.button2 : styles.hidden}><span className="icon-woman"></span>Mujer</p>
                <p className={displayIndumentaria ? styles.button2 : styles.hidden}><span className="icon-man"></span>Hombre</p>
                <p className={displayIndumentaria ? styles.button2 : styles.hidden}><span className="icon-man-woman"></span> Kids</p>

                <p className={styles.button}><span className='icon-bug'></span> Accesorios </p>

                <p className={styles.button}><span className="icon-rocket"></span> About </p>

                <p className={styles.button}><span className="icon-mail4"></span> Contacto </p>

            </div>

        </div>
    )
}