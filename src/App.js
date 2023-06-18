import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
