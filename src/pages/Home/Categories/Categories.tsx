import styles from './Categories.module.css'
import Categoria from './Categoria/Categoria.tsx'

export default function Categories() {

    const categories = ['celular', 'smartwatch', 'fone', 'som', 'acessorio']

    return (
        <section>
            <h2>Categorias</h2>
            <div className={styles.categoriesList}>
                {categories.map((category, i) =>
                    <Categoria
                        key={i}
                        content={category}
                    />)}
            </div>
        </section>
    )
}
