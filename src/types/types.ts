export interface IProduto {
    id: number
	img: string
	titulo: string
	preco: number
	marca: string
	categoria: 'celular'  | 'smartwatch' | 'fone' | 'som' | 'acessorio' | 'outros'
	rating?: number
	numRating?: number
}