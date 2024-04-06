import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button.tsx'
import styles from './Card.module.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

interface CardProps {
    titulo: string
    img: string
    preco: number
}

export default function Card({titulo, img, preco}:CardProps) {   
    function numToStr(num: number) {
        return num.toFixed(2).replace('.',',')
    }

    return (
        <article className={styles.card}>
            <img src={img} alt="" />

            <div>
                <h3>{titulo}</h3>
                <p>R$ {numToStr(preco)}</p>
            </div>
            <Button>
                <FontAwesomeIcon icon={faCartPlus} />
                Comprar
            </Button>
        </article>
    )
}
