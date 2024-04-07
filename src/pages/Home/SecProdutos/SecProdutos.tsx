import { useContext, useEffect } from 'react'
import CardContainer from '../../../components/CardContainer/CardContainer.tsx'
import { DataContext } from '../../../contexts/DataContext.tsx'
import Produto from '../../../../public/data/model.ts'
import Card from '../../../components/Card/Card.tsx'

interface IContexto {
	produtos: Produto[]
}

export default function SecProdutos() {
	const { produtos }: IContexto = useContext(DataContext)
    const produtosLtd = produtos
        .filter(produto => produto.recomendado)
        .sort((a,b) => (
            a.dataAdd < b.dataAdd ? 1 : a.dataAdd > b.dataAdd ? -1 : 0
        ))

    /* useEffect(() => {
        console.log(produtosLtd); 
    }, [produtos]) */

	return (
		<section>
			<h2>Produtos Recomendados</h2>
            <CardContainer>
                {!!produtosLtd.length
                    ? produtosLtd.map(produto => (
                        <Card
                            key={produto.id}
                            titulo={produto.titulo}
                            img={produto.img}
                            preco={produto.preco}
                        />
                    ))
                    : <p>Não há produtos ainda</p>
                }
            </CardContainer>
		</section>
	)
}
