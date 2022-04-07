import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Banner from './components/Banner/Banner'
import About from './components/About/About'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Banner />} />
      <Route path="invoices" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);