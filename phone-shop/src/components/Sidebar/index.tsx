import React, { useState } from 'react';
import { Icon, Menu, Segment, Sidebar, Header, Image } from 'semantic-ui-react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { sidebarActionTypes } from '../../redux/reducers/types';

const SidebarComponent = () => {
  const sidebarVisibleState = useTypedSelector((state) => state.sidebarState);
  const dispatch = useDispatch();
  return (
    <div className="">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() =>
            dispatch({
              type: sidebarActionTypes.UPDATE_SIDEBAR_STATE,
            })
          }
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

        <Sidebar.Pusher dimmed={sidebarVisibleState}></Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default SidebarComponent;
