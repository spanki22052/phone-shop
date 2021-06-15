import React, { useState } from 'react';
import { Icon, Menu, Segment, Sidebar, Header, Image } from 'semantic-ui-react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { sidebarActionTypes } from '../../redux/reducers/types';
import styled from 'styled-components';

export const Logo = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 43px;
  color: #274472;
`;

const SideElement = styled.p`
  color: #274472;
  font-family: Montserrat;
  font-weight: 400;
  width: 100%;
  text-align: justify;
  font-size: 1.2em;

  .move-left {
    margin-left: 5px;
  }
`;

const SmartphoneSVG = () => {
  return (
    <svg
      height="20"
      viewBox="0 0 512 512"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="#274472"
    >
      <g id="Smartphone">
        <path d="m352 8h-192a40.045 40.045 0 0 0 -40 40v416a40.045 40.045 0 0 0 40 40h192a40.045 40.045 0 0 0 40-40v-416a40.045 40.045 0 0 0 -40-40zm-41.758 16-4.8 24h-98.883l-4.8-24zm65.758 440a24.027 24.027 0 0 1 -24 24h-192a24.027 24.027 0 0 1 -24-24v-416a24.027 24.027 0 0 1 24-24h25.441l6.714 33.569a8 8 0 0 0 7.845 6.431h112a8 8 0 0 0 7.845-6.431l6.714-33.569h25.441a24.027 24.027 0 0 1 24 24z" />
        <path d="m208 456h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16z" />
        <path d="m240 456h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" />
      </g>
    </svg>
  );
};

const SidebarComponent = () => {
  const sidebarVisibleState = useTypedSelector((state) => state.sidebarState);
  const dispatch = useDispatch();

  return (
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      style={{
        backgroundColor: '#C3E0E5',
        borderRight: '1px solid #274472',
        width: '200px',
      }}
      onHide={() =>
        dispatch({
          type: sidebarActionTypes.UPDATE_SIDEBAR_STATE,
        })
      }
      visible={sidebarVisibleState}
      width="thin"
    >
      <Menu.Item as="a">
        <Logo>SMASH</Logo>
      </Menu.Item>
      <Menu.Item as="a">
        <SideElement>
          <Icon name="newspaper" />
          <span className="move-left">news</span>
        </SideElement>
      </Menu.Item>
      <Menu.Item as="a">
        <SideElement>
          <SmartphoneSVG />
          <span className="move-left">categories</span>
        </SideElement>
      </Menu.Item>
      <Menu.Item as="a">
        <SideElement>
          <Icon name="info circle" />
          <span className="move-left">about</span>
        </SideElement>
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarComponent;
