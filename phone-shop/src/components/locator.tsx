import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './Navbar';
import App from './App';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import styled from 'styled-components';
import { sidebarActionTypes, phonesActionType } from '../redux/reducers/types';
import { useQuery, gql } from '@apollo/client';

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

  const sidebarVisibleState = useTypedSelector((state) => state.sidebarState);
  return (
    <div style={{ backgroundColor: '#C3E0E5', height: '100vh' }}>
      <Router>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            onHide={() =>
              dispatch({
                type: sidebarActionTypes.UPDATE_SIDEBAR_STATE,
              })
            }
            visible={sidebarVisibleState}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            style={{ backgroundColor: '#C3E0E5' }}
            dimmed={sidebarVisibleState}
          >
            <NavbarComponent />
            <Switch>
              <Route path="/" exact>
                <App />
              </Route>
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>{' '}
    </div>
  );
};

export default Locator;
