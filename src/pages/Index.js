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
                <section className='text-light mb-5 mt-2'>
                    <Trending />
                </section>
                <section className='text-light mb-5 mt-2'>
                    <Popular />
                </section>
                <section className='text-light mb-5 mt-2'>
                    <TopRated />
                </section>
            </Container>
        </Main>
    );
};

export default Index;