import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/ProductPageReducer';
import { ACTIONS } from '../../actions/actions';
import { API_URL } from '../../helpers/config';
import { getJSON } from '../../helpers/helpersFn';
import { Container, Row, Col } from 'react-bootstrap';
import { Products } from '../../components/Products/Products';

console.log();

const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ACTIONS.FETCH_START,
    });
    try {
      const getProducts = async () => {
        const data = await getJSON(`${API_URL}/all`);
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
    <section className="product__page">
      <Container>
        <Products products={state.products} />
      </Container>
    </section>
  );
};

export default ProductPage;
