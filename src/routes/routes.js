import NewsDetails from 'src/components/NewsDetails';
import SecondLayout from 'src/layouts/SecondLayout';
import Cart from 'src/pages/Cart';
import Checkout from 'src/pages/Checkout';
import Collections from 'src/pages/Collections';
import Contact from 'src/pages/Contact';
import Home from 'src/pages/Home';
import Introduce from 'src/pages/Introduce';
import Login from 'src/pages/Login';
import News from 'src/pages/News';
import ProductDetails from 'src/pages/ProductDetails';
import Store from 'src/pages/Store';
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gioi-thieu',
    element: <Introduce />,
  },
  {
    path: '/he-thong-cua-hang',
    element: <Store />,
  },
  {
    path: '/lien-he',
    element: <Contact />,
  },
  {
    path: '/tin-tuc',
    element: <News />,
  },
  {
    path: '/tin-tuc/:newsId',
    element: <NewsDetails />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/account/login',
    element: <Login />,
    layout: SecondLayout,
  },
  {
    path: '/account/*',
    element: <Login />,
    layout: SecondLayout,
  },

  {
    path: 'collections/:collectionType',
    element: <Collections />,
  },
  {
    path: 'collections/:collectionType/:collectionTypeChild',
    element: <Collections />,
  },
  {
    path: 'product/:productId',
    element: <ProductDetails />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
    layout: SecondLayout,
  },
];
export default routes;
