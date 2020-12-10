import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
