import { MDBRipple } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  phonesActionType,
  sidebarActionTypes,
} from '../../redux/reducers/types';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: phonesActionType.FETCH_PHONES,
      payload: {
        title: 'Iphone 7',
        price: 2000,
        photos: ['1'],
        description: '1',
        brand: 'apple',
      },
    });
  }, []);

  return (
    <div className="main-block">
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({ type: sidebarActionTypes.UPDATE_SIDEBAR_STATE })
        }
      >
        Open sidebar
      </button>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        style={{ maxWidth: '500px' }}
        rippleColor="light"
      >
        <img
          src="https://www.apple.com/v/iphone/home/ax/images/meta/iphone__dgs666g2ou82_og.png?202106010112"
          alt="phone-image"
          className="w-100"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
          ></div>
        </a>
      </MDBRipple>
    </div>
  );
};

export default App;
