import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteComponentProps } from '@reach/router';
import Categories from './components/Categories';
import Products from './components/Products'; 
import { Nav } from './components/Nav';


export const Router:React.FunctionComponent<RouteComponentProps> = (props) => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>          
                <Route path='categorias' element={<Categories />}/>
                <Route path='produtos' element={<Products />}/>
            </Routes>
        </BrowserRouter>
    )
}
