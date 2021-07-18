import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add.js";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Add />
            </Route>

            <Route path="/watched">
              <Watched />
            </Route>

            <Route path="/watchList">
              <Watchlist/>
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
