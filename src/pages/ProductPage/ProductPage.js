import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/ProductPageReducer';
import { API_URL } from '../../helpers/config';
import { getJSON } from '../../helpers/helpersFn';
import { Container, Row, Col } from 'react-bootstrap';

const ProductPage = () => {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getJSON(`${API_URL}/all`);
      console.log(data);
    };
    getProducts();
  });

  return (
    <Container>
      <Row>
        <Col md={12}>Running product page.</Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
