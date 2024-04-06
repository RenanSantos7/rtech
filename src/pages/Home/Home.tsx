import { useContext } from "react";
import Card from "../../components/Card/Card.tsx";
import Banner from "./Banner/Banner.tsx";
import Categories from "./Categories/Categories.tsx";
import { DataContext } from "../../contexts/DataContext.tsx";
import { IProduto } from "../../types/types.ts";
import CardContainer from "../../components/CardContainer/CardContainer.tsx";

export default function Home() {

    const {produtos} = useContext(DataContext)

    return (
        <div className={`pageLimited`}>
            <Banner />
            <Categories />
            <section>
                <h2>Produtos</h2>
                <CardContainer>
                    {produtos && !!produtos.length &&
                        produtos.map((produto: IProduto) => (
                            <Card
                                key={produto.id}
                                titulo={produto.titulo}
                                img={produto.img}
                                preco={produto.preco}
                            />))
                    }
                </CardContainer>
            </section>
            <div style={{
                height: '300px'
            }}></div>
        </div>
    )
}
