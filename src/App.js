import './App.css';
import { Button } from 'reactstrap';
import Props from './props/child';
import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Product from './menu/product';


function Home(){
  return <h2>Home</h2>;
}
function About(){
  return <h2>About</h2>;
}
function User(){
  return <h2>User</h2>
}
function App() {
  return (
    <div className="App">
     {/* <Props >
       bùi khắc tảo
     </Props> */}
     <Router>
       <div className="head-menu">
       <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Product">product</Link>
            </li>
            <li>
              <Link to="/User" >User</Link>
            </li>
            
          </ul>
         <div>
         <Switch>
              <Router path="/Home" >
                <Home /> 
              </Router>
              
              <Route path="/Product" >
                  <Product />
              </Route>
              <Router path="/User">
                <User />
              </Router>
          </Switch>
         </div>
       </div>
      
     </Router>
    
    </div>
  );
}

export default App;
