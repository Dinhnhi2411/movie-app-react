import { BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import Switch from "react-switch";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Moviee from "./pages/Moviee/Moviee"
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import { Container } from "@mui/system";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Routes>
            <Route path="/" element={<Trending/>}/>
            <Route path="/movies" element={<Moviee/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
            </Routes>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;