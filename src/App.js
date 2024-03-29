import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./admin/pages/Admin";
import "./App.css";
import Cart from "./cart/pages/Cart";
import Favourite from "./favourite/pages/Favourite";
import Home from "./home/pages/Home";
import ProductDetail from "./home/pages/ProductDetail";
import NavBar from "./shared/components/navigation/NavBar";
import Auth from "./user/pages/Auth";

function App() {
  const isLogged = useSelector((state) => state.ui.isLogged);
  const username = useSelector((state) => state.ui.user.username);

  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>
      
      <div className={"content"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route exact path="/favourite">
            <Favourite />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/admin">
            {isLogged && username === "admin" ? (
              <Admin />
            ) : (
              <div className={"hard-centered"}>
                You have no rights to this page! (url-change resets state)
              </div>
            )}
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default App;
