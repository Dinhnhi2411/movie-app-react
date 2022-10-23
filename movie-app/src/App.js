import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Container } from "@mui/system";

import "./App.css";
import Switch from "react-switch";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Search from "./components/Pages/Search/Search";
// import SimpleBottomNavigation from "./components/MainNav";
// import Moviee from "./pages/Moviee/Moviee"
// import Series from "./pages/Series/Series";
// import Trending from "./pages/Trending/Trending";
// import Search from "./pages/Search/Search";
// import { Container } from "@mui/system";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
            
            <Route path="/" element={<Trending/>} exac/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>
           
        </Routes>
        </Container>   
          <SimpleBottomNavigation/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;