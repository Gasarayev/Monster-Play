// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from './Pages/Contact/Contact.jsx';
// import Blog from './Pages/Blog/Blog.jsx';
// import BlogInfo from './Pages/Blog/BlogInfo.jsx';
// import slides from "./json/caruselPics.json";
// import product from './json/caruselProduct.json'
// import Shop from './Pages/Shop/Shop.jsx';
// import ProductDetails from './Pages/Shop/ProductDetails/ProductDetails.jsx';

// import { configureStore } from "@reduxjs/toolkit"
// import { Provider } from "react-redux"
// import productReducer from './features/productSlice.jsx';
// import Basket from './Pages/Shop/ProductDetails/Basket.jsx';


// const store = configureStore({
//   reducer: {
//     products: productReducer,
//   }
// })

// const root = document.getElementById('root');


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/contact-us" element={<Contact />} />
//           <Route path="/blog" element={<Blog slides={slides} />} />
//           <Route path="/blog/:id" element={<BlogInfo slides={slides} />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/shop/product-details/:id" element={<ProductDetails product={product} />} />
//           <Route path="/basket" element={<Basket/>} />
//         </Routes>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   root
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact/Contact.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import BlogInfo from './Pages/Blog/BlogInfo.jsx';
import slides from "./json/caruselPics.json";
import product from './json/caruselProduct.json'
import Shop from './Pages/Shop/Shop.jsx';
import ProductDetails from './Pages/Shop/ProductDetails/ProductDetails.jsx';

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import cartReducer, {getTotals} from './features/cartSlice.js'
import Basket from './Pages/Shop/ProductDetails/Basket.jsx';
import BasketDetails from './Pages/Shop/ProductDetails/BasketDetails.jsx';



const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

store.dispatch(getTotals())



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog slides={slides} />} />
          <Route path="/blog/:id" element={<BlogInfo slides={slides} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product-details/:id" element={<ProductDetails product={product} />} />
          <Route path="/basket" element={<BasketDetails/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);


