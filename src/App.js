
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import ContactForm from './pages/ContactUs';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

        <Router>
          <Switch>
          <Route>
           
            <ContactForm/>
          </Route>
          </Switch>
        </Router>
    
  );
}

export default App;

