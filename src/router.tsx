import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteComponentProps } from '@reach/router';
import Categories from './components/Categories';
import Products from './components/Products'; 
import { Nav } from './components/Nav';
import { ProductList } from './components/ProductList';
import { HomePage } from './pages/homePage';

export const Router:React.FunctionComponent<any> = ({dataCat, setDataCat, dataProd, setDataProd}) => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>   
                <Route path='/' element={<HomePage />}/>       
                <Route path='categorias'>
                    <Route index element={<Categories dataCat={dataCat} setDataCat={setDataCat}/>} />
                    <Route path=':id' element={<ProductList dataCat={dataCat} dataProd={dataProd} setDataProd={setDataProd} setDataCat={setDataCat}/>} />
                </Route>
                <Route path='produtos' element={<Products dataProd={dataProd} setDataProd={setDataProd}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
