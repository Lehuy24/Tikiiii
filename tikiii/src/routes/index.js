import OrderPage from '../pages/OrderPage/OderPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotfoundPage/NotFoundPage'
export const routes =[
    {
        path:'/',
        page:HomePage,
        isshowheader:true
    },
    {
        path:'/order',
        page:OrderPage,
        isshowheader:true
    },
    {
        path:'/products',
        page:ProductsPage,
        isshowheader:true
    },
    {
        path:'*',
        page:NotFoundPage,
        isshowheader:false
    }
    
]