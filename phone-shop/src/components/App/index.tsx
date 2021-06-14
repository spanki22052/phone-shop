import { MDBRipple } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sidebarActionTypes } from '../../redux/reducers/types';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

const NewsBlock = styled.div`
  width: 60%;
  min-width: 280px;
  height: auto;
  border: 1px solid #274472;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 10px;
  margin: auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }

  .text-holder {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    p {
      text-align: justify;
    }

    .see-more {
      font-weight: 600;
      cursor: pointer;
    }

    @media screen and (max-width: 700px) {
      width: 90%;

      h1 {
        font-size: 1.5em;
        margin-top: 10px;
      }
      h2 {
        font-size: 1.1em;
        margin-top: 0px;
      }
    }
  }

  h1,
  h2 {
    color: #274472;
    font-family: Montserrat;
  }

  h1 {
    font-weight: 500;
    font-size: 2em;
    height: 0;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5em;
    height: 20px;
    margin-top: 10px;
  }

  p {
    font-family: Montserrat;
    font-weight: 400;
    color: #274472;
  }
`;

const NewsImage = styled.img`
  width: 20vw;
  min-width: 250px;
`;

const newsList = gql`
  query {
    lastnew {
      date
      title
      subtitle
      photos
      new
      categories
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(newsList);
  const dispatch = useDispatch();
  console.log(data.lastnew);

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
      {data !== undefined && (
        <NewsBlock>
          <NewsImage src={data.lastnew.photos[0]} alt="newImage" />
          <span className="text-holder">
            <h1>{data.lastnew.title}</h1>
            <h2>{data.lastnew.subtitle}</h2>
            {data.lastnew.new.split('<ph>').map((el: string, index: number) => {
              return (
                index < 2 &&
                (index === 0 ? (
                  <p key={index}>{el}</p>
                ) : (
                  <p key={index}>
                    {el}
                    <span className="see-more">...see more</span>
                  </p>
                ))
              );
            })}
          </span>
        </NewsBlock>
      )}
    </div>
  );
};

export default App;
