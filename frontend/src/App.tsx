import { Global } from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Nav from "./layout/nav/Nav";
import { Main } from "./pages/perfil/Main";
import { userAuth } from "./hooks/auth";

function App() {
  const {isLogged} =userAuth()
  return (
    <Router>
      <Global />
      {isLogged && <Nav />}
      <Routes>
        <Route path="/" element={isLogged ? <Home /> : <Navigate to="/auth" />} />
        <Route
          path="/auth"
          element={!isLogged ? <Auth /> : <Navigate to="/" />}
        />
        <Route
          path="/perfil/:id"
          element={isLogged ? <Main /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
