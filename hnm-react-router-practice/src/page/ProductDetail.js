import React, { useEffect, useState } from 'react'
import { Form, Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();

  const getProduct = async() => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProduct(data);
}

useEffect(() => {
  getProduct();
}, []);

  return (
    <div>
      <Container>
        <Row className="mx-md-5 px-md-5">
          <Col lg={4}>
            <img width="100%" src={product?.img} alt={product?.title} />
          </Col>
          <Col lg={8}>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
            <div>{product?.choice?"Choice":""}</div>
            <div as={Row}>{product?.size.length > 1 ?  (
              <Col lg={6}>
                <Form.Select aria-label="select size option">
                  <option value="">사이즈 선택</option>
                  {product.size.map((item) => {
                    return (<option value={item}>{item}</option>)
                  })}
                </Form.Select>
              </Col>
            ) : ""}</div>
            <Button className="w-100" variant="dark">추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail