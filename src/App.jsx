
import './App.css';
import { Home } from "./Pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Blog } from "./Pages/Blog/Blog";
import { Contato } from "./Pages/Contato/Contato";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
