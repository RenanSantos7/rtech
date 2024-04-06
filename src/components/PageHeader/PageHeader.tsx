import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.tsx'
import styles from './PageHeader.module.css'
import SearchBar from './SearchBar/SearchBar.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function PageHeader() {
    return (
        <header className={styles.pageHeader}>
            <div className={`pageLimited ${styles.container}`}>
                <Logo color='white' size={3} />
                
                <SearchBar />
                
                <div className={styles.actions}>
                    <Link
                        to='/'
                        title='Favoritos'
                    >
                        <FontAwesomeIcon
                            icon={faStar}
                            className={styles.icon}
                        />
                    </Link>
                    
                    <Link
                        to='/'
                        title='Carrinho'
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className={styles.icon}
                        />
                    </Link>
                    <Link
                        to='/'
                        title='Conta'
                    >
                        <FontAwesomeIcon
                            icon={faCircleUser}
                            className={styles.icon}
                        />
                    </Link>

                </div>
            </div>
        </header>
    )
}
