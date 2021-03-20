import './App.css';
import Header from './components/Header';
import Shopping from './components/Shopping';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product'
import{BrowserRouter as Routing, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
      <Routing>
        <div className="container">
        <Header></Header>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/shop' exact component={Shopping}></Route>
          <Route path='/shop/:id' component={Product}></Route>
        </Switch>
        </div>
      </Routing>

    
  );
}

export default App;
