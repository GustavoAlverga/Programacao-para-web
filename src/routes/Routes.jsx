import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Colaboradores from '../pages/Colaboradores'
import Blog from '../pages/Blog'
import Contatos from '../pages/EntreEmContato'
import Eventos from '../pages/Eventos'
import Parcerias from '../pages/Parcerias'
import Servicos from '../pages/Servicos'
import Blank from '../pages/Blank'
import Header from '../components/Header';
import Footer from '../components/Footer'

export default function AppRoutes() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/parcerias" element={<Parcerias />} />
          <Route path="/servicos" element={<Servicos/>} />
          <Route path="/blank" element={<Blank/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    );
  }