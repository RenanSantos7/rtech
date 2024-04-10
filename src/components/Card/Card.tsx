import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button.tsx'
import styles from './Card.module.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

interface CardProps {
    idProduto: number
	titulo: string
	img: string
	preco: number
}

export default function Card({ idProduto, titulo, img, preco }: CardProps) {
	function numToStr(num: number) {
		return num.toFixed(2).replace('.', ',')
    }
    
    const navigate = useNavigate()

    function navigateToProduct(id: number) {
        navigate(`/produto/${id}`)
    }

	return (
		<article className={styles.card}>
			<img src={img} alt='' />

			<div>
				<h3>{titulo}</h3>
				<p>R$ {numToStr(preco)}</p>
			</div>

			<Button handleClick={() => navigateToProduct(idProduto)}>
				<FontAwesomeIcon icon={faCartPlus} />
				Comprar
			</Button>
		</article>
	)
}
