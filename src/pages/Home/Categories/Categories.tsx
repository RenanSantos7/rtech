import styles from './Categories.module.css'
import Categoria from './Categoria/Categoria.tsx'

export default function Categories() {

    const categories = ['celulares', 'smartwatches', 'fones', 'som', 'acessorios']

    return (
        <section>
            <h2>Categorias</h2>
            <div className={styles.categoriesList}>
                {categories.map(category => <Categoria content={category} />)}
            </div>
        </section>
    )
}
