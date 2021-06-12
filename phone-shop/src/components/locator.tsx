import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import SidebarComponent from './Sidebar';
import NavbarComponent from './Navbar';
import App from './App';
import { Icon, Menu, Segment, Sidebar, Header, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { sidebarActionTypes } from '../redux/reducers/types';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

const Locator = () => {
  const sidebarVisibleState = useTypedSelector((state) => state.sidebarState);
  const dispatch = useDispatch();
  return (
    <div style={{ height: '100vh' }} className="locator">
      <Router>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
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

          <Sidebar.Pusher dimmed={sidebarVisibleState}>
            <SidebarComponent />
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
