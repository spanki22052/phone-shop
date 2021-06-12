import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './components/App';
import NavbarComponent from './components/Navbar';
import SidebarComponent from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Locator from './components/locator';

document.body.style.backgroundColor = '#C3E0E5';

ReactDOM.render(
  <Provider store={store}>
    <Locator />
  </Provider>,
  document.getElementById('root')
);
