import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components/Categories';
import { Nav } from './components/Nav';
import { ProductList } from './components/ProductList';
import { HomePage } from './pages/homePage';
import { ProductDetail } from './components/ProductDetail';
import { ShoppingCart } from './components/shoppingCart';

interface RouterProps {
    dataCat: Array<any>;
    setDataCat: any;
    dataProd: Array<any>;
    setDataProd: any;
}


export const Router:React.FunctionComponent<RouterProps> = ({dataCat, setDataCat, dataProd, setDataProd}) => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>   
                <Route path='/' element={<HomePage />}/>       
                <Route path='categorias'>
                    <Route index element={<Categories dataCat={dataCat} setDataCat={setDataCat}/>} />
                    <Route path=':id' element={<ProductList dataProd={dataProd} setDataProd={setDataProd} dataCat={dataCat}/>} />
                    <Route path=':id/:id' element={<ProductDetail dataProd={dataProd}/>} />
                </Route>
                <Route path='carrinho' element={<ShoppingCart />}/>
            </Routes>
        </BrowserRouter>
    )
}
