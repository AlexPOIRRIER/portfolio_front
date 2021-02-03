import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';

import './App.css';
import CreateProject from './components/Admin/CreateProject';
import ManageProject from './components/Admin/ManageProject';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={Admin} />
        <Route patch='/createProject' component={CreateProject} />
        <Route patch='/manageProject' component={ManageProject} />
      </Switch>
    </div>
  );
}

export default App;
