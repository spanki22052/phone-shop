import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './Navbar';
import App from './App';
import { Segment, Sidebar } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import { phonesActionType } from '../redux/reducers/types';
import { useQuery, gql } from '@apollo/client';
import SidebarComponent from './Sidebar';

const Locator = () => {
  const dispatch = useDispatch();

  const phonesList = gql`
    query {
      showphones {
        title
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(phonesList);
  dispatch({
    type: phonesActionType.FETCH_PHONES,
    payload: data !== undefined ? data.showphones : {},
  });

  return (
    <div style={{ backgroundColor: '#C3E0E5', height: '100vh' }}>
      <Router>
        <Sidebar.Pushable as={Segment}>
          <SidebarComponent />
          <Sidebar.Pusher style={{ backgroundColor: '#C3E0E5' }}>
            <NavbarComponent />
            <Switch>
              <Route path="/" exact>
                <App />
              </Route>
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </div>
  );
};

export default Locator;
