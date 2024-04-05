import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact/Contact.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import BlogInfo from './Pages/Blog/BlogInfo.jsx';
import slides from "./json/caruselPics.json";

const root = document.getElementById('root');


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog slides={slides} />} />
        <Route path="/blog/:id" element={<BlogInfo slides={slides} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);

