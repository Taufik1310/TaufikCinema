import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';
import Header from '../components/Template/Header';

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | Taufik Cinema" defaultTitle="Taufik Cinema" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <Container fluid className='p-0 overflow-hidden position-relative'>
      <Row >
        <Col lg="2" md="3" className='bg-transparent p-0'>
          <Navigation display="none"/>
        </Col>
        <Col lg="10" md="9" className='bg-dark p-0' style={{ maxHeight: '100vh', overflowY: 'scroll' }} id='content'>
            <Container fluid className="px-md-0 position-relative vh-100 w-100">
              <Header />
                {props.children}
            </Container>
        </Col>
      </Row>
    </Container>
  </HelmetProvider>
);

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Taufik Cinema - Movies & TvShows the list of movies",
};

export default Main;