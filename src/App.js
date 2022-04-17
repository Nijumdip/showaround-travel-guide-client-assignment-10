import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import Blog from "./Components/Pages/Blog/Blog";
import Header from "./Components/Pages/Home/Header/Header";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Services from "./Components/Pages/Services/Services";
import PageNotFound from "./Components/Shared/PageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
