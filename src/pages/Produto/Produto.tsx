import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import Produto from '../../../public/data/model.ts'

interface Contexto {
    produtos: Produto[]
}

export default function PagProduto() {
    const params = useParams()

    const { produtos }:Contexto = useContext(DataContext)
    
    const produtoAtual = produtos.find(produto => produto.id === Number(params.id))

    return (
        <div className={`pageLimited`}>
            <img src={produtoAtual.img} alt="" />
            <h2>{produtoAtual.titulo}</h2>
            <p>{produtoAtual.descricao}</p>
            <p className={styles.preco}>{produtoAtual.preco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</p>
        </div>
    )
}
