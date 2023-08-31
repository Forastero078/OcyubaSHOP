import React, { useEffect, useState } from "react";
import styles from './Cards.module.css';
import '../../iconos/style.css';




export default function Cards(props) {

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const [ isFav, setIsFav ] = useState(false);
    const [ inCart, setInCart ] = useState(false);

    const {
        id,
        nombre,
        precio,
        img,
        tallas,
        color,
        cantidad,
        description
    } = props;

    useEffect(() => {
        setItems([...img])
    })


    const handleNext = () => {
        if (currentItem < items.length - 1) {
            setCurrentItem((prevItem) => prevItem + 1)
        }
    }

    const handlePrev = () => {
        if (currentItem > 0) {
            setCurrentItem((prevItem) => prevItem - 1)
        }
    }

    return (
       <div className={styles.card}>

        <img src={items[currentItem]} alt={`${id}${nombre}`} className={styles.img}/>

        <div className={`icon-heart ${isFav ? styles.fav : styles.notFav }` } onClick={() => isFav ? setIsFav(false) : setIsFav(true)}></div>
        <div className={`icon-cart ${inCart ? styles.cart : styles.notCart}`} onClick={() => inCart ? setInCart(false) : setInCart(true)}></div>


        
        <p className={styles.p1}> ${precio}</p>

        <div className={styles.prev} onClick={handlePrev}> {'<'} </div>
            <div className={styles.next} onClick={handleNext}> {'>'} </div>

        <section className={styles.info}>
            <p className={styles.p}>{nombre}</p>
            <p className={styles.p2}>{description}</p>


            

            <button className={styles.button}><span className="icon-cart"></span>  ¡Ver detalles!</button>
            
            </section>

       </div>
    )
}
