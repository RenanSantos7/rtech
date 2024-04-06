type Categoria = 'celular'  | 'smartwatch' | 'fone' | 'som' | 'acessorio' | 'outros'

class Produto {
	private static nextId = 0

	id: number
	img: string
	titulo: string
	preco: number
	marca: string
	categoria: Categoria
	rating?: number = 0
	numRating?: number = 0

	constructor(titulo: string, img: string, preco: number, marca: string, categoria: Categoria) {
		this.id = Produto.nextId
		Produto.nextId++
		this.titulo = titulo
		this.img = img
		this.preco = preco
		this.marca = marca
		this.categoria = categoria
		this.rating = 0
		this.numRating = 0
	}
}
export default Produto
