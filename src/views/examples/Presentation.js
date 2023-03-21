
import { useState } from "react";
import{ Carousel } from 'react-bootstrap';

// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Presentation = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

  };
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
        
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Presentation de la Portail</h3>
              </CardHeader> 
              <CardBody>
                <Row className="Presentation de la portail">
                  <Col lg="12" md="12">
                    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 h-30"   
          src={require('assets/img/slide/slide1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('assets/img/slide/slide2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('assets/img/slide/slide3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
                    

                  </Col>
                   
                  
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Presentation;
