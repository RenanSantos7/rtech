import styles from './Button.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
    variante?: '' | 'apagado' | 'outlined' | 'nobg'
    handleClick?: (arg:any) => void | any
}

export default function Button({children, type='button', variante, handleClick}:ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variante]}`}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
