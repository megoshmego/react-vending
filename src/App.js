import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route path="/snack1" component={Snack1} />
        <Route path="/snack2" component={Snack2} />
        <Route path="/snack3" component={Snack3} />
      </Switch>
    </Router>
  );
}

export default App;
