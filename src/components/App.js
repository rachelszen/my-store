import React from "react";
import { Header } from "./Header";
import { NavLink, Link, createBrowserRouter, RouterProvider, Outlet, useParams } from "react-router-dom";
import numeral from 'numeral';

const store = [
    {
        category: 'Necessarios',
        items: [
            {
                name: 'havaiana',
                image: 'https://images-americanas.b2w.io/produtos/3205081262/imagens/chinelo-havaianas-slim-feminina-opcao-de-cores-original/3205081692_1_xlarge.jpg',
                description: 'Chinelo Havaianas Slim Feminina Opção de Cores Original Havaianas Slim Feminina. A Havaianas Slim é um clássico dos nossos tempos. Com tiras e solado mais fino, ela conquistou os pés de quem gosta de um visual delicado, sem abrir mã...',
                price: 3490
            },
            {
                name: 'Bicicleta De Equilíbrio 4 Rodas',
                image: 'https://images-americanas.b2w.io/produtos/6062369575/imagens/bicicleta-de-equilibrio-4-rodas-vermelha-10728-buba/6062369575_1_xlarge.jpg',
                description: 'Bicicleta De Equilíbrio 4 Rodas Vermelha 10728 Buba A Bicicleta de Equilíbrio 4 Rodas da Buba estimula o equilíbrio e a coordenação motora do pequeno de forma divertida e segura. é estável, com rodas duplas na frente e atrás. A cria...',
                price: 21060
            }
        ],
    },
    {
        category: 'Celular',
        items: [
            {
                name: 'Smartphone Samsung Galaxy M13',
                image: 'https://images-americanas.b2w.io/produtos/01/00/img/5242830/2/5242830242_1SZ.jpg',
                description: 'Smartphone Samsung Galaxy M13 128GB 4G Wi-Fi Tela 6.6 Dual Chip 4GB RAM Câmera Tripla + Selfie 8MP - Azul',
                price: 99900
            }
        ],
    },
    {
        category: 'Moveis',
        items: [
            {
                name: 'Armário de cozinha 12 portas',
                image: 'https://images-americanas.b2w.io/produtos/32857830/imagens/armario-de-cozinha-12-portas-1-gaveta-clara-poliman-moveis-branco/32857831_1_xlarge.jpg',
                description: 'Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito',
                price: 55990
            },
            {
                name: 'Sofá 3 Lugares Retrátil e Reclinável Cama inBox Compact 1,80m Velusoft Café',
                image: 'https://images-americanas.b2w.io/produtos/3072707478/imagens/sofa-3-lugares-retratil-e-reclinavel-cama-inbox-compact-1-80m-velusoft-cafe/3072707486_1_xlarge.jpg',
                description: 'Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito',
                price: 98999
            }
        ],
    }
]

const Navbar = () => {
    return (
      <div>
        <NavLink to='/' style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>Todos</NavLink>
        {store.map((page) => (
            <NavLink key={page.category} to={page.category} style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>{page.category}</NavLink>
        ))}
      </div>
    );
};

const HeaderLayout = () => (
    <div>
        <Navbar />
        <Outlet />
    </div>
);

const ShopListItems = ({category, item}) => (
    <Link to={`/${category}/${item.name}`}>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} style={{width:80}}/>
        <p>{item.description}</p>
        <p>{numeral(item.price / 100).format('$0,0.00')}</p>
    </Link>
)

const ShopList = ({prod}) => (
    prod.items.map((item) => (
        <ShopListItems key={item.name} category={prod.category} item={item}/>
    ))
)

const Page = () => {
    const params = useParams();
    const searchIndex = store.findIndex((prod) => prod.category===params.category);
    return (
        <div>
            {
                searchIndex < 0 
                ? store.map((prod) => (
                    <ShopList key={prod.category} prod={prod}/>
                ))
                : <ShopList prod={store[searchIndex]}/>
            }
        </div>
    )
}

const Item = () => {
    const {category, name} = useParams();
    console.log(category, name);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {path: '/', element: <Page/>},
            {path: '/:category', element: <Page/>},
            {path: '/:category/:name', element: <Item/>},
        ]

    }
])

export const App = () => {
    return (
        <div>
            <Header/>
            <RouterProvider router={router}/>
        </div>
    )
}