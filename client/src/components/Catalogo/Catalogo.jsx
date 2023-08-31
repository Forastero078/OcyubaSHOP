import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Catalogo.module.css'
import db from "../../utils/db";
import Cards from "../Cards/Cards";





export default function Catalogo() {

    const [inventario, setInventario] = useState([])

    useEffect(() => {
        setInventario(db)
    }, []);

    const sliderSettings = {
        dots: true, // Muestra los indicadores de puntos
        infinite: true, // Bucle infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Cantidad de tarjetas visibles a la vez
        slidesToScroll: 1 // Cantidad de tarjetas a desplazar por vez
    };



    return (
        <div>
            <p className={styles.desliza}>Desliza para ver todos los modelos disponibles</p>
        <div className={styles.catalogo}>
            
            <Slider {...sliderSettings}>
                {inventario.map((element) => {
                    return <Cards
                        id={element.id}
                        nombre={element.nombre}
                        precio={element.precio}
                        img={element.img}
                    />

                })}
            </Slider>
        </div>
        </div>
    )
}