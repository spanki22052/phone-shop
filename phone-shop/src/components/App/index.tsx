import { MDBRipple } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { sidebarActionTypes } from '../../redux/reducers/types';
// import { useQuery, gql } from '@apollo/client';

const App = () => {
  const dispatch = useDispatch();
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
