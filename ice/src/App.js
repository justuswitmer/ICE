import { Route, HashRouter as Router } from 'react-router-dom';

import './b_sass/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/services'} component={Services} />
        <Route exact path={'/quote'} component={Quote} />
        <Route exact path={'/login'} component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
