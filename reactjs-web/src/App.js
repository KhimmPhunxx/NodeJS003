import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AboutPage from './page/about/AboutPage';
import CustomerPage from './page/customer/CustomerPage';
import UserPage from './page/user/UserPage';
import ProductPage from './page/product/ProductPage';
import CategoryPage from './page/category/CategoryPage';
import PageNotFound from './page/rout-not-found/PageNotFound';
import LoginPage from './page/login/LoginPage';
import Layout from './component/layout/Layout';
import LayoutDashboard from './component/layout/LayoutDashboard';
import HomeDashboard from './page-dashboard/home/HomeDashboard';
import CustomerDashboard from './page-dashboard/customer/CustomerDashboard';
import UserDashboard from './page-dashboard/user/UserDashboard';
import CategoryDashboard from './page-dashboard/category/CategoryDashboard';
import ProductDashboard from './page-dashboard/product/ProductDashboard';
import CartDashoard from './page-dashboard/cart/CartDashoard';
import HomePage from './page/home/HomePage';
import LayoutDashboardLogin from './component/layout/LayoutDashboardLogin';
import LoginDashboard from './page-dashboard/login/LoginDashboard';
import ResgisterDashboard from './page-dashboard/resgister/ResgisterDashboard';


function App() {
  return (
      <BrowserRouter>
        {/* Route website and backend */}
        <Routes>
          {/* Web-FrontEnd */}
          <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage/>} />
              <Route path='/category' element={<CategoryPage/>} />
              {/* <Route path='/about' element={<AboutPage/>} />
              <Route path='/customer' element={<CustomerPage/>} />
              <Route path='/user' element={<UserPage/>} />
              <Route path='/product' element={<ProductPage/>} />
              <Route path='/cart' element={<CartDashoard/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='*' element={<PageNotFound/>} /> */}
          </Route>

          {/* Web-Backend */}
          <Route path='/dashboard' element={<LayoutDashboard/>}>
                <Route path='' element={<HomeDashboard />}/>
                <Route path='category' element={<CategoryDashboard/>}/>
                <Route path='customer' element={<CustomerDashboard/>}/>
                <Route path='user' element={<UserDashboard/>}/>
                <Route path='cart' element={<CartDashoard/>}/>
                <Route path='product' element={<ProductDashboard/>}/>
          </Route>

           {/* Web-Backend Login and Register */}
           <Route path='/dashboard/' element={<LayoutDashboardLogin/>}>
                <Route path='login' element={<LoginDashboard />}/>
                <Route path='register' element={<ResgisterDashboard />}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
