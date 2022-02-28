import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AddEdit from "./AddEdit";
import "./App.css";
import Header from "./component/Header";
import Home from "./Home";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
       <ToastContainer /> 
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route  path={"/add"} component={AddEdit} />
          <Route  path={"/edit/:id"} component={AddEdit} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
