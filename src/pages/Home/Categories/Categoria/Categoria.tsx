import { Link } from 'react-router-dom'
import styles from './Categoria.module.css'
import celular from './celular.png'
import relogio from './relogio.png'
import fone from './fone.png'
import caixa from './caixa-de-som.png'
import cabo from './cabo.png'

interface CategoriaProps {
	content: string
}

export default function Categoria({ content }: CategoriaProps) {
    let contentTxt = ''
    let contentImg = ''

	switch (content) {
        case 'celulares':
            contentImg = celular
			contentTxt = 'Celulares'
			break
        case 'smartwatches':
            contentImg = relogio
			contentTxt = 'Smartwatches'
			break
        case 'fones':
            contentImg = fone
			contentTxt = 'Fones de ouvido'
			break
        case 'som':
            contentImg = caixa
			contentTxt = 'Caixas de Som'
			break
        case 'acessorios':
            contentImg = cabo
			contentTxt = 'Acessórios'
			break
	}

	return (
		<article className={styles.categoria}>
            <Link to={`/categoria/${content}`}>
                <img src={contentImg} alt="" />
                <span>{contentTxt}</span>
            </Link>
		</article>
	)
}
