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
		return num.toLocaleString('pt-BR')
    }
    
    const navigate = useNavigate()

    function addToCart(id: number) {
        navigate(`/produto/${id}`)
    }

	return (
		<article className={styles.card}>
			<Link to={`/produto/${idProduto}`}>
				<img src={img} alt='' />
	
				<div>
					<h3>{titulo}</h3>
					<p>R$ {numToStr(preco)}</p>
				</div>
			</Link>

			<Button handleClick={() => addToCart(idProduto)}>
				<FontAwesomeIcon icon={faCartPlus} />
				Adicionar ao carrinho
			</Button>

			<Button handleClick={() => addToCart(idProduto)}>
				<FontAwesomeIcon icon={faCartPlus} />
				Comprar
			</Button>
		</article>
	)
}
