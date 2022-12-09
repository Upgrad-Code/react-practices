import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/ProductPageReducer';
import { ACTIONS } from '../../actions/actions';
import { API_URL } from '../../helpers/config';
import { getJSON } from '../../helpers/helpersFn';
import { Container, Row, Col } from 'react-bootstrap';

console.log();

const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  useEffect(() => {
    dispatch({
      type: ACTIONS.FETCH_START,
    });
    try {
      const getProducts = async () => {
        const data = await getJSON(`${API_URL}/a`);
        console.log(data);
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: data,
        });
      };
      getProducts();
    } catch (err) {
      dispatch({
        type: ACTIONS.FETCH_ERROR,
        payload: err,
      });
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>Running product page.</Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
