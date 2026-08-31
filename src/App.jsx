import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="collections" element={<Navigate to="/products" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
