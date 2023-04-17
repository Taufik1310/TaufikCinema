import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import MyCards from '../Template/MyCards';
import { getMovieTrending } from '../../Api';

const Trending = () => {
    const [time, setTime] = useState("day")
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieTrending(time).then((result) => {
            setData(result)
        })
    }, [time])

    return (
        <Container fluid>
            <Row className='d-flex align-items-center mb-4'>
                <Col className='d-flex gap-4'>
                    <h4>Trending</h4>
                    <ButtonGroup className='border border-success rounded-pill' size='sm'>
                        <Button variant={time === "day" ? 'success' : 'transparent'} className='rounded-pill text-light border-transparent' onClick={() => setTime("day")}>Today</Button>
                        <Button variant={time === "week" ? 'success' : 'transparent'} className='rounded-pill text-light border-transparent' onClick={() => setTime("week")}>This Week</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <MyCards data={data} media="movie"/>
            </Row>
        </Container>         
    );
};

export default Trending;