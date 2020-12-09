import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import './App.css';

const Hats = ()=>(
    <div>
        <h1>Hats Page</h1>
    </div>    
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={Hats}/>
    </div>
  );
}

export default App;
