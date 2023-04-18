import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import { Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { dropdownSortData, dropdownSortDataPerson } from "../data/Data";
import { getDiscover } from '../Api';
import MyCard from "../components/Template/MyCard";

const Discover = ({ title, media, name }) => {
    const [isOpened, setIsOpened] = useState({
        sort: false,
    })
    const [dropdownTitle, setDropdownTitle] = useState({
        sort: dropdownSortData[0].title
    })
    const [result, setResult] = useState([])
    const [sortedResult, setSortedResult] = useState([])

    useEffect(() => {
            getDiscover(media, name, 2).then((result) => {
                setResult(result)
                setSortedResult(result)
            })
    }, [media, name])

    const handleSelectedDropdown = (title) => {
        setDropdownTitle({ sort: title })
        let sortedResult = []
        if (title === "Popularity (A-Z)") {
            sortedResult = result.sort((a, b) => b.popularity - a.popularity)
        } else if (title === "Popularity (Z-A)") {
            sortedResult = result.sort((a, b) => a.popularity - b.popularity)
        } else if (title === "Rating (A-Z)") {
            sortedResult = result.sort((a, b) => b.vote_average - a.vote_average)
        } else if (title === "Rating (Z-A)") {
            sortedResult = result.sort((a, b) => a.vote_average - b.vote_average)
        } else if (title === "Released (A-Z)") {
            sortedResult = result.sort((a, b) => new Date(media === "tv" ?  b.first_air_date : b.release_date) - new Date(media === "tv" ?  a.first_air_date : a.release_date))
        } else if (title === "Released (Z-A)") {
            sortedResult = result.sort((a, b) => new Date(media === "tv" ?  a.first_air_date : a.release_date) - new Date(media === "tv" ?  b.first_air_date : b.release_date))
        } else if (title === "Title (A-Z)") {
            sortedResult = result.sort((a, b) => media === "movie" ? a.title.localeCompare(b.title) : a.name.localeCompare(b.name))
        } else if (title === "Title (Z-A)") {
            sortedResult = result.sort((a, b) => media === "movie" ? b.title.localeCompare(a.title) : b.name.localeCompare(a.name))
        }
        setSortedResult(sortedResult)
    }
    
    const MyDropdown = ({ title, data }) => {
        return (
            <Dropdown onSelect={handleSelectedDropdown}>
                <Dropdown.Toggle 
                    size="sm"
                    variant="dark"
                    className="mt-2"
                    >
                       {title}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" style={{ fontSize: '12px' }}>
                    {
                        data.map((item) => (
                        <Dropdown.Item 
                                eventKey={item.title}
                                className={`${item.title === dropdownTitle.sort ? "bg-success" : ""}`}
                            >
                                {item.title}
                        </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <Main title={title}>
            <Container fluid style={{ marginTop: '80px' }} className="px-4">
                <Row>
                    <Col lg="3" md='4' sm='5'>
                        <h4 className="text-light">{title}</h4>
                        <ListGroup className="mt-3">
                            <ListGroup.Item 
                                action
                                onClick={() => setIsOpened({ sort: !isOpened.sort })}
                                className="bg-black text-light fw-semibold d-flex align-items-center justify-content-between"
                            >
                                Sorting<span>{isOpened.sort ? <ChevronDown /> : <ChevronRight />}</span>
                            </ListGroup.Item>
                            <ListGroup.Item 
                                className={`${isOpened.sort ? "d-block" : "d-none"} bg-black text-light fw-semibold pb-3`}
                            >
                                <span className="text-secondary" style={{ fontSize: '14px' }}>Sort Results By</span>
                                <MyDropdown title={dropdownTitle.sort} data={media === "person" ? dropdownSortDataPerson : dropdownSortData}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3 d-flex justify-content-around align-items-start flex-wrap gap-2 text-light">
                            {
                                sortedResult.map((item) => (
                                    <div className="col-10 col-sm-5 col-md-3 col-lg-2 mb-3">
                                        <MyCard item={item} media={media}/>
                                    </div>
                                ))
                            }
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}

export default Discover