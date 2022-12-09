import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Products.scss';

export const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="products__list">
      <Container>
        <Row>
          {products &&
            products.map((p) => {
              return (
                <Col md={3}>
                  <Card className="product">
                    <Card.Img
                      variant="top"
                      src={p.flags.png}
                      className="product__img"
                    />
                    <Card.Body>
                      <Card.Title className="product__title">
                        {p.name.common}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};
