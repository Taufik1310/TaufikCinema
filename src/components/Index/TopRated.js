import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import MyCards from '../Template/MyCards';
import { getDiscover } from '../../Api';

const TopRated = () => {
    const [media, setMedia] = useState("movie")
    const [data, setData] = useState([])

    useEffect(() => {
        getDiscover(media, "top_rated", 1).then((result) => {
            setData(result)
        })
    }, [media])

    return (
        <Container fluid>
            <Row className='d-flex align-items-center mb-4'>
                <Col className='d-flex gap-4'>
                    <h4>Top Rated</h4>
                    <ButtonGroup className='border border-success rounded-pill' size='sm'>
                        <Button variant={media === 'movie' ? 'success' : 'transparent'} className='rounded-pill text-light border-transparent' onClick={() => setMedia("movie")}>Movies</Button>
                        <Button variant={media === 'tv' ? 'success' : 'transparent'} className='rounded-pill text-light border-transparent' onClick={() => setMedia("tv")}>TV Series</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <MyCards data={data} media={media}/>
            </Row>
        </Container>         
    );
};

export default TopRated;