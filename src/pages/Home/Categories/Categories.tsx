import { Link } from 'react-router-dom'
import styles from './Categories.module.css'
import Button from '../../../components/Button/Button.tsx'

export default function Categories() {
    return (
        <section>
            <h2>Categorias</h2>
            <div className={styles.categoriesList}>
                <article>
                    <Link to='/'>
                        <span>Celulares</span>
                    </Link>
                </article>

                <article>
                    <Link to='/'>
                        <span>Smartwatches</span>
                    </Link>
                </article>

                <article>
                    <Link to='/'>
                        <span>Fones de ouvido</span>
                    </Link>
                </article>

                <article>
                    <Link to='/'>
                        <span>Caixas de som</span>
                    </Link>
                </article>

                <article>
                    <Link to='/'>
                        <span>Acessórios</span>
                    </Link>
                </article>

            </div>
        </section>
    )
}
