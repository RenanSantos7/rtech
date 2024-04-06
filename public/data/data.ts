import Produto from './model.ts'

const dadosProdutos = [
    new Produto(
        'Fone Qcy Ht05 Melobuds Bluetooth 5.2 Com Cancelamento Anc Cor Preto',
        'https://http2.mlstatic.com/D_NQ_NP_2X_627370-MLU72700969039_112023-F.webp',
        296,
        'QCY',
        'fone'
    ),
    new Produto(
        'Fone de Ouvido Qcy T13x Enc Bluetooth 5.3 Ipx5 Cor Preto',
        'https://http2.mlstatic.com/D_NQ_NP_2X_605295-MLU73190352487_122023-F.webp',
        196,
        'QCY',
        'fone'
    ),
    new Produto(
        'Fone de ouvido in-ear QCY TWS T18, com bluetooth, cor branco',
        'https://http2.mlstatic.com/D_NQ_NP_2X_788562-MLU75367348391_032024-F.webp',
        219.92,
        'QCY',
        'fone'
    ),
    new Produto(
        'Fone de Ouvido Wave 200tws Sem Fio Bluetooth Preto Jbl',
        'https://http2.mlstatic.com/D_NQ_NP_2X_645644-MLU72566276230_112023-F.webp',
        263,
        'Wave',
        'fone'
    ),
    new Produto(
        'Fone de Ouvido JBL Wave Buds Bluetooth True Wireless - Preto Cor Preto',
        'https://http2.mlstatic.com/D_NQ_NP_2X_712244-MLU75010422549_032024-F.webp',
        238.96,
        'JBL',
        'fone'
    ),
    new Produto(
        'Fone de ouvido in-ear Gamer sem fio Bluetooth F9-5 TWS',
        'https://http2.mlstatic.com/D_NQ_NP_2X_837279-MLU72074478583_102023-F.webp',
        35.78,
        '',
        'fone'
    ),
    new Produto(
        'Smartphone Moto G54 5g 128gb 4gb de Ram Grafite Motorola',
        'https://http2.mlstatic.com/D_NQ_NP_2X_646196-MLU74979395045_032024-F.webp',
        960,
        'Motorola',
        'celular'
    ),
    new Produto(
        'Samsung Galaxy A54 5G 256GB Preto 8GB RAM',
        'https://http2.mlstatic.com/D_NQ_NP_2X_850620-MLU75401311344_042024-F.webp',
        1999.99,
        'Samsung',
        'celular'
    ),
    new Produto(
        'Samsung Galaxy A34 5G 256 GB 8 GB Preto',
        'https://http2.mlstatic.com/D_NQ_NP_2X_923648-MLA74676699752_022024-F.webp',
        1498.99,
        'Samsung',
        'celular'
    ),
    new Produto(
        'Motorola Moto G54 5G 256 GB Vegan Leather Verde 8GB RAM',
        'https://http2.mlstatic.com/D_NQ_NP_2X_679242-MLU75571661557_042024-F.webp',
        1186.55,
        'Motorola',
        'celular'
    ),
    new Produto(
        'Smartphone Motorola Edge 30 Neo 5g 256gb 8gb Ram Very Peri',
        'https://http2.mlstatic.com/D_NQ_NP_2X_970547-MLU74873117400_032024-F.webp',
        1849.99,
        'Motorola',
        'celular'
    ),
    new Produto(
        'Smartphone Galaxy S23 FE 128GB Azul',
        'https://http2.mlstatic.com/D_NQ_NP_2X_927260-MLU74111588047_012024-F.webp',
        2699.10,
        'Samsung',
        'celular'
    ),
    new Produto(
        'Smartwatch Qcy Watch Gtc S1',
        'https://http2.mlstatic.com/D_NQ_NP_2X_939389-MLU72699560887_112023-F.webp',
        188.3,
        'QCY',
        'smartwatch'
    ),
    new Produto(
        'Smartwatch W69 Ultra Series 9 Android Ios Amoled Nfc',
        'https://http2.mlstatic.com/D_NQ_NP_985363-MLB72428837115_102023-O.webp',
        169.38,
        'Chinese Democracy',
        'smartwatch'
    ),
    new Produto(
        'Samsung Galaxy FIT 3',
        'https://http2.mlstatic.com/D_NQ_NP_797006-MLU74728880906_032024-O.webp',
        469,
        'Samsung',
        'smartwatch'
    ),
    new Produto(
        'Samsung Galaxy Watch4',
        'https://http2.mlstatic.com/D_NQ_NP_700469-MLA47030070171_082021-O.webp',
        927.4,
        'Samsung',
        'smartwatch'
    ),
    new Produto(
        'Smartwatch Gw5 Bluetooth Chamada IP68 à Prova d\'água Com Nfc',
        'https://http2.mlstatic.com/D_NQ_NP_610933-CBT71217724667_082023-O.webp',
        155.55,
        'Kumi',
        'smartwatch'
    ),
    new Produto(
        'Apple Watch Series 9 GPS • Caixa estelar de alumínio – 41 mm • Pulseira esportiva estelar – P/M',
        'https://http2.mlstatic.com/D_NQ_NP_699287-MLA72121650027_102023-O.webp',
        2888,
        'Apple',
        'smartwatch'
    ),
    new Produto(
        'iPhone 13 (128GB) Estelar',
        'https://http2.mlstatic.com/D_NQ_NP_916682-MLA47782359266_102021-O.webp',
        36373.98,
        'Apple',
        'celular'
    ),
    new Produto(
        'Caixa Amplificada Connect Lights Cm-400 Preta Mondial Bivolt Cor Preto 110V/220V',
        'https://http2.mlstatic.com/D_NQ_NP_979821-MLA48687968529_122021-O.webp',
        415,
        'Mondial',
        'som'
    ),
    new Produto(
        'Caixa De Som Boombox 3',
        'https://http2.mlstatic.com/D_NQ_NP_635357-MLU74111549087_012024-O.webp',
        2218,
        'JBL',
        'som'
    ),
    new Produto(
        'Caixa de Som Bluetooth Flip 6 30w Rms',
        'https://http2.mlstatic.com/D_NQ_NP_777012-MLU75556079989_042024-O.webp',
        566,
        'JBL',
        'som'
    ),
    new Produto(
        'Caixa de Som Amvox 2000w Bluetooth Aca 2000 Party Vox Prime',
        'https://http2.mlstatic.com/D_NQ_NP_935829-MLU72638732751_112023-O.webp',
        1499,
        'Amvox',
        'som'
    ),
    new Produto(
        'Caixa de som Amvox 600w Bluetooth Aca 600 Bagvox Vermelho',
        'https://http2.mlstatic.com/D_NQ_NP_778930-MLU74826639555_022024-O.webp',
        563,
        'Amvox',
        'som'
    ),
    new Produto(
        'Caixa de Som Bluetooth Speaker Pulse Splash 8 W - Sp354 Cor Preto 110V/220V',
        'https://http2.mlstatic.com/D_NQ_NP_757884-MLU72571353764_112023-O.webp',
        82,
        'Pulse',
        'som'
    ),
    new Produto(
        'Alto-falante Pulse Xplosion SP602 portátil com bluetooth preto 110V/220V',
        'https://http2.mlstatic.com/D_NQ_NP_2X_672455-MLA52221404161_102022-F.webp',
        690,
        'Pulse',
        'som'
    ),
    new Produto(
        'Torre de Som Double 12 Pol 2300w Bluetooth Pulse - SP508',
        'https://http2.mlstatic.com/D_NQ_NP_662443-MLU74859451317_032024-O.webp',
        1910.5,
        'Pulse',
        'som'
    ),
    new Produto(
        'Apple Air Tag Rastreador Localizador',
        'https://http2.mlstatic.com/D_NQ_NP_994999-MLB72340170695_102023-O.webp',
        193.99,
        'Apple',
        'acessorio'
    ),
    new Produto(
        'Controle Ipega 9076 para Console Celular Bluetooth',
        'https://http2.mlstatic.com/D_NQ_NP_701543-MLB52790801045_122022-O.webp',
        134.99,
        'Ipega',
        'acessorio'
    ),
    new Produto(
        'Controle Tipo Switch P/ Celular Android iPhone Pc Bluetooth',
        'https://http2.mlstatic.com/D_NQ_NP_639078-MLB70979642759_082023-O.webp',
        189,
        'Chinese Democracy',
        'acessorio'
    ),
    new Produto(
        'Cabo USB-c para USB-c com carregamento rápido de dados de 1,8 m e 1000 W',
        'https://http2.mlstatic.com/D_NQ_NP_751080-MLU73129330886_122023-O.webp',
        58,
        'IT-Blue',
        'acessorio'
    ),
    new Produto(
        'Adaptador Usb C P/ Lightning iPad iPhone 13 12 11 X Xr Xs Nf',
        'https://http2.mlstatic.com/D_NQ_NP_830139-MLB75107597355_032024-O.webp',
        25.75,
        'Chinese Democracy',
        'acessorio'
    ),
    new Produto(
        'Fonte Carregador 20W Tipo C',
        'https://http2.mlstatic.com/D_NQ_NP_629432-MLU70065160207_062023-O.webp',
        22.5,
        'Inova',
        'acessorio'
    ),
    new Produto(
        'Adaptador Duplo Lightning P2 Fone Carregador Compatível Ios',
        'https://http2.mlstatic.com/D_NQ_NP_925760-MLB53467922622_012023-O.webp',
        28,
        'Kapaom',
        'acessorio'
    ),
    new Produto(
        'Carregador Portátil Powerbank 10.000 Mah Turbo Orignal',
        'https://http2.mlstatic.com/D_NQ_NP_701995-MLU73566391897_122023-O.webp',
        35,
        'Pineng',
        'acessorio'
    ),
    new Produto(
        'Carregador Magnético Indução Magsafe',
        'https://http2.mlstatic.com/D_NQ_NP_607548-MLB74987916772_032024-O.webp',
        35.9,
        'Fokus',
        'acessorio'
    ),
    new Produto(
        'Capinha Bag Aquática Para Celular Prova D\'água Universal Cor Preto',
        'https://http2.mlstatic.com/D_NQ_NP_632615-MLU70784620546_082023-O.webp',
        12,
        'OpenZee',
        'acessorio'
    ),
    new Produto(
        'Capinha Premium Magsafe para iPhone',
        'https://http2.mlstatic.com/D_NQ_NP_905933-MLB73567177222_122023-O.webp',
        35,
        'OR',
        'acessorio'
    ),
    new Produto(
        'Capinha Compatível Galaxy S22 Silicone Aveludado Prime Cor Preto',
        'https://http2.mlstatic.com/D_NQ_NP_811697-MLU70654855160_072023-O.webp',
        25,
        'H+',
        'acessorio'
    ),
    new Produto(
        'Cabo Turbo Militar - 1,5m - Lightning - Usb-a - Certificado Mfi - Homologado - iPhone / iPad - Gshield',
        'https://http2.mlstatic.com/D_NQ_NP_695820-MLU72847807999_112023-O.webp',
        108.8,
        'Gorilla Shield',
        'acessorio'
    ),
    new Produto(
        'Capinha Armor Para Samsung - Gshield Cor Azul-Escuro - Galaxy S10 Plus',
        'https://http2.mlstatic.com/D_NQ_NP_635934-MLB45201288643_032021-O.webp',
        99,
        'Gorilla Shield',
        'acessorio'
    ),
    new Produto(
        'Carregador para Carro Turbo Fast Charger - Gorila Shield',
        'https://http2.mlstatic.com/D_NQ_NP_921998-MLB31197498699_062019-O.webp',
        84,
        'Gorilla Shield',
        'acessorio'
    ),
    new Produto(
        'Carregador Portátil Nano Snap Magsafe - Wireless - Gshield',
        'https://http2.mlstatic.com/D_NQ_NP_994700-MLA70090312836_062023-O.webp',
        267,
        'Gorilla Shield',
        'acessorio'
    ),
    new Produto(
        'Suporte Para Celular Veicular Premium - Tank Gear - Gshield',
        'https://http2.mlstatic.com/D_NQ_NP_846770-MLB47288793028_082021-O.webp',
        60,
        'Gorilla Shield',
        'acessorio'
    ),
]

export default dadosProdutos

