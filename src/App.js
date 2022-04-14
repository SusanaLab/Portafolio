import Componentes from "./components/Componentes/Componentes";
import { Routes, Route} from "react-router-dom";
import { Blog } from "./components/Blog/Blog";
import Notfound from "./NotFound/Notfound";
import { Rick } from "./components/apps/Rick/Rick";
import { Pokedex } from "./components/apps/Pokedex/Pokedex";
import { Memmory } from "./components/apps/Memmory/Memmory";
import { Network } from "./components/apps/Network/Network";
import { Green } from "./components/apps/Green/Green";
import { List } from "./components/apps/List/List";
import './App.css'



export default function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Componentes />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/rick-and-morty" element={<Rick />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/memmory-match" element={<Memmory />} />
      <Route path="/social-network" element={<Network />} />
      <Route path="/green-notes" element={<Green />} />
      <Route path="/learning-list" element={<List />} />
    </Routes>
  </div>
  );
}
