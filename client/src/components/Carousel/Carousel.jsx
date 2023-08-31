import { Link } from 'react-router-dom';
import styles from './Carousel.module.css';
import React, { useEffect, useState } from 'react';


export default function Carousel(props) {

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(0)

    const { images, linkTo, description } = props;

    useEffect(() => {
        setItems(images)
    })

    const itemsPorPagina = 3;
    const totalItems = items.length;

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
        <div className={styles.carousel}>

            <Link to={linkTo} style={{ textDecoration: 'none' }} >

                <div className={styles.conteiner}>
                    <img src={items[currentItem]} alt={currentItem} className={styles.img} />
                    <div className={styles.index}><p className={styles.p}>{description}</p></div>
                </div>
            </Link>


            <div className={styles.prev} onClick={handlePrev}> {'<'} </div>
            <div className={styles.next} onClick={handleNext}> {'>'} </div>


        </div>
    )
}


{/* <div className={styles.carouselTrack}>
{getCurrentItems().map((image, index) => (
    <div
        key={index}
        className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''
            }`}
    >
        <img src={image} alt={`Image ${index}`} />
    </div>
))}
</div>
<button className={styles.prevButton} onClick={handlePrev}>
&lt;
</button>
<button className={styles.nextButton} onClick={handleNext}>
&gt;
</button> */}