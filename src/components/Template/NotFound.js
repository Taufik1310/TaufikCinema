import React from "react";
import { Button, Container, Image } from "react-bootstrap";

const TMDBLogo = '../../images/tmdb.svg'

const NotFound = () => {
    return (
        <Container fluid className="bg-dark vh-100 vw-100 text-light d-flex flex-column justify-content-center align-items-center gap-5">
            <section className="text-center">
                <Image src={TMDBLogo} alt='TMDb Logo' width={100}/>
                <h4 className="mt-2"><span className="text-success">Taufik</span>Cinema</h4>
            </section>
            <section className="text-center">
                <h1 className="fw-bold">Page not found</h1>
                <h6 className="text-secondary">We can’t seem to find the page you are looking for.</h6>
            </section>
            <Button variant="light" as="a" href="/" className="fw-bold border rounded-pill">
                Home
            </Button>
        </Container>
    )
}

export default NotFound