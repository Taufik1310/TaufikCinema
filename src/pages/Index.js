import React from 'react';
import { Container } from "react-bootstrap";
import Main from '../layouts/Main';
import Trending from '../components/Index/Trending';
import Popular from '../components/Index/Popular';
import TopRated from '../components/Index/TopRated';

const Index = () => {
    return (
        <Main>
            <Container fluid style={{ marginTop: '80px' }}>
                <section className='text-light mb-3'>
                    <Trending />
                </section>
                <section className='text-light mb-3'>
                    <Popular />
                </section>
                <section className='text-light mb-3'>
                    <TopRated />
                </section>
            </Container>
        </Main>
    );
};

export default Index;