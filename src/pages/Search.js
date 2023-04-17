import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import { Container, Form, ListGroup, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { getSearching } from "../Api";
import ResultList from "../components/Search/ResultList";


const SearchBox = () => {
    const [result, setResult] = useState([])
    const [media, setMedia] = useState("movie")
    const [filteredResult, setFilteredResult] = useState([])
    const [query, setQuery] = useState("")
    const [count, setCount] = useState({
        movie: 0,
        tv: 0,
        person: 0,
    })
    const listGroupItem = [
        {
            media: "movie",
            name: "Movies",
            count: count.movie,
        },
        {
            media: "tv",
            name: "TV Series",
            count: count.tv,
        },
        {
            media: "person",
            name: "People",
            count: count.person,
        },
    ]

    useEffect(() => {
        getSearching(query).then((result) => {
            setResult(result)
            setFilteredResult(result.filter(item => item.media_type === media))
        })
    }, [query, media])

    useEffect(() => {
        const movieCount = result.filter(item => item.media_type === "movie").length
        const tvCount = result.filter(item => item.media_type === "tv").length
        const personCount = result.filter(item => item.media_type === "person").length
        setCount({
            movie: movieCount,
            tv: tvCount,
            person: personCount,
        })
    }, [result])

    useEffect(() => {
        const filterResult = result.filter(item => item.media_type === media)
        setFilteredResult(filterResult)
    }, [media, result])

    return(
        <Main title="Search">
            <Container fluid style={{ marginTop: '80px' }}>
                <Form className="col-lg-5 col-sm-8">
                    <Form.Group className="position-relative">
                        <Search size={20} className="position-absolute fw-bold" style={{ top: 8, left: 10 }}/>
                        <Form.Control 
                            onChange={event => setQuery(event.target.value) }
                            type="search" 
                            placeholder="What do you want to see to ?" 
                            className="border border-none rounded-pill ps-5" 
                            style={{ fontSize: '14px' }} 
                        />
                    </Form.Group>
                </Form>
                <Container fluid className="mt-4 text-light p-0 pe-1">
                    <Row >
                        <Col lg="3" sm="8">
                            <ListGroup>
                                <ListGroup.Item className="bg-success text-light fw-bold">Search Results</ListGroup.Item>
                                {
                                 listGroupItem.map((item) => {
                                    return(
                                        <ListGroup.Item action className={`fw-semibold bg-black ${item.media === media ? "text-light" : "text-light text-opacity-75"} d-flex justify-content-between`} onClick={() => setMedia(item.media)}>{item.name}<span className="text-success border border-success rounded-pill px-2" style={{ fontSize: '13px' }}>{item.count}</span></ListGroup.Item>
                                    )
                                 })   
                                }
                            </ListGroup>
                        </Col>
                        <Col lg="9" className="mt-3 mt-lg-0">
                            { filteredResult.length === 0 &&
                                <i>The {media} you are referring to was not found.</i>
                            }
                            <ResultList data={filteredResult}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Main>
    )
}

export default SearchBox