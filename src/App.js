import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import Blog from "./Components/Pages/Blog/Blog";
import Header from "./Components/Pages/Home/Header/Header";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Services from "./Components/Pages/Services/Services";
import PageNotFound from "./Components/Shared/PageNotFound/PageNotFound";
import SignUp from "./Components/Pages/Login/SignUp";
import RequireAuth from "./Components/Pages/Login/RequireAuth";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
