import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Products.scss';

export const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="products__list">
      <Row>
        {products &&
          products.map((p) => {
            return (
              <Col md={3} key={p.cca3}>
                <Card className="product">
                  <Card.Img
                    variant="top"
                    src={p.flags.png}
                    className="product__img"
                  />
                  <Card.Body>
                    <Card.Title className="product__title">
                      {p.name.common}
                      <sup> {p.continents[0]}</sup>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </section>
  );
};
