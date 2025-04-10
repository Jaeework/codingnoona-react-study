import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();

    let url = `https://my-json-server.typicode.com/Jaeework/codingnoona-react-study/products/${id}`;
  const getProductDetail = async() => {
    let response = await fetch(url)
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row className="mx-md-5 px-md-5 justify-content-center">
          <Col lg={4}>
            <img width="100%" src={product?.img} alt={product?.title} />
          </Col>
          <Col lg={6} className="product-description">
            <div>
              <div className="mb-2">{product?.title}</div>
              <div className="mb-3"><strong>₩{product?.price}</strong></div>
              <div className="mb-3">{product?.choice?"Choice":""}</div>
            </div>
            <div>
              <p className="mb-3">사이즈 선택</p>
              <div className="d-flex flex-wrap mb-5">{product?.size.length > 1 ? 
                    ( product.size.map((item, index) => {
                      return (<div key={index}
                                  className="product-size-option py-4">
                                {item}
                              </div>)
                    }))
               : ""}
              </div>
              <Button className="w-100 mb-3" variant="dark">추가</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
