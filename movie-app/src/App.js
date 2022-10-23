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
import Form from "./components/Pages/Form/Form";
import Favorite from "./components/Pages/Favorite/Favorite";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
            
            <Route path="/" element={<Trending/>} exact/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/account"  element={<Form/>}/>
            <Route path="/favorite"  element={<Favorite/>}/>

        </Routes>
        </Container>   
          <SimpleBottomNavigation/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;