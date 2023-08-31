import React from "react";
import styles from './Indumentaria.module.css';
import { Link } from "react-router-dom";




export default function Indumentaria(){





    return(
        <div className={styles.divPadre}>

            <h1 className={styles.h1}>¡Selecciona la categoria!</h1>

        <section className={styles.articles}>
        <Link to='/indumentaria/mujer/vestidos' style={{textDecoration: 'none'}}><article>
            <div className={styles['article-wrapper']}>
              <figure>
                <img src="https://netivooregon.s3.amazonaws.com/attach/modelo/20221226/2407/44460331.webp?252-0" alt="" />
              </figure>
              <div className={styles['article-body']}>
                <h2 className={styles.title}>Vestidos</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" className={styles['read-more']}>
                  <span className={styles.span}>Ver catalogo!</span> <span className={styles['sr-only']}>about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                
              </div>
            </div>
          </article>
          </Link>




          <article>





        
            <div className={styles['article-wrapper']}>
              <figure>
                <img src="https://netivooregon.s3.amazonaws.com/attach/modelo/20230815/2407/87745688.webp?252-35738" alt="" />
              </figure>
              <div className={styles['article-body']}>
                <h2 className={styles.title}>Remeras</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" className={styles['read-more']}><span className={styles.span}>Ver catalogo!</span> <span className={styles['sr-only']}>about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>





          <article>
        
            <div className={styles['article-wrapper']}>
              <figure>
                <img src="https://netivooregon.s3.amazonaws.com/attach/modelo/20230612/2468/11027319.webp?252-599" alt="" />
              </figure>
              <div className={styles['article-body']}>
                <h2 className={styles.title}>Pantalones</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" className={styles['read-more']}><span className={styles.span}>Ver catalogo!</span> <span className={styles['sr-only']}>about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>





          <article>
        
        <div className={styles['article-wrapper']}>
          <figure>
            <img src="https://netivooregon.s3.amazonaws.com/attach/modelo/20210609/1172/91359817.jpg?252-0" alt="" />
          </figure>
          <div className={styles['article-body']}>
            <h2 className={styles.title}>Busos</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
            </p>
            <a href="#" className={styles['read-more']}><span className={styles.span}>Ver catalogo!</span> <span className={styles['sr-only']}>about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
        </section>
        
               </div>
        
    )
}

