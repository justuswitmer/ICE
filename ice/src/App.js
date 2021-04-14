import { Route, HashRouter as Router } from 'react-router-dom';

import './b_sass/main.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Services from './Services/Services';
import Quote from './Quote/Quote';
import Login from './Login/Login';

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
