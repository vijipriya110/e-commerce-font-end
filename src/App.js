
// import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Homee from './Components/Homee.js';

// import { Route} from 'react-router-dom';

// import Homee from './Components/Homee.js';


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        {/* <div> */}
       <Header />
    
      {/* <Route exact path="/"> */}
      <Homee/>
      {/* </Route> */}
      <Footer />
      {/* </div> */}
     
    {/* </Switch> */}
    
    </div>

  );
}

export default App;
