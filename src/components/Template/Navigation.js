import React, { useState } from "react";
import { Collapse, Image, Nav, Navbar } from "react-bootstrap";
import { CCircle, ChevronRight, ChevronDown, Film, Fire, HourglassSplit, HouseDoorFill, People, PlayFill, Search, Stars, TvFill } from "react-bootstrap-icons";

const TMDBLogo = '../../images/tmdb.svg'

const Navigation = ({ display }) => {
    const [isOpened, setIsOpened] = useState({
        movie: false,
        tv: false,
        people: false,
    })
    const [isHovered, setIsHovered] = useState({
        popularMovie: false,
        topRatedMovie: false,
        nowPlaying: false,
        upcoming: false,
        popularTV: false,
        topRatedTV: false,
        popularPeople: false,
    })

    return (
        <Navbar bg="black" variant="dark" className={`vh-100 flex-column align-items-start w-100 px-4 position-relative d-${display} d-md-block`} style={{ zIndex: 6 }}>
                <Image width={120} src={TMDBLogo} className="mt-2"/>
                <Nav className="text-light py-5 fw-bold d-flex flex-column gap-3 w-100" style={{ fontSize: "16px" }}>
                    <Nav.Item>
                        <Nav.Link href="/" className="d-flex align-items-center gap-3">
                            <HouseDoorFill size={24}/>Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/search" className="d-flex align-items-center gap-3">
                            <Search size={24}/>Search
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            onClick={() => setIsOpened({movie: !isOpened.movie})}
                            aria-controls="movies-menu"
                            aria-expanded={isOpened.movie}
                            className="d-flex align-items-center gap-3"
                        >
                            <Film size={24}/>Movies{isOpened.movie ? <ChevronDown /> : <ChevronRight />}
                        </Nav.Link>
                        <Collapse in={isOpened.movie}>
                            <Nav id="movies-menu" className="flex-column ps-4 gap-3" style={{ fontSize: "14px" }}>
                                <Nav.Link 
                                    href="/movie/popular" 
                                    className={`text-${isHovered.popularMovie ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({popularMovie: true})}
                                    onMouseLeave={() => setIsHovered({popularMovie: false})} 
                                ><Fire className="me-2"/>Popular
                                </Nav.Link>
                                <Nav.Link 
                                    href="/movie/top-rated" 
                                    className={`text-${isHovered.topRatedMovie ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({topRatedMovie: true})}
                                    onMouseLeave={() => setIsHovered({topRatedMovie: false})}
                                    ><Stars className="me-2"/>Top Rated
                                </Nav.Link>
                                <Nav.Link 
                                    href="/movie/now-playing"
                                    className={`text-${isHovered.nowPlaying ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({nowPlaying: true})}
                                    onMouseLeave={() => setIsHovered({nowPlaying: false})} 
                                    ><PlayFill className="me-2"/>Now Playing
                                </Nav.Link>
                                <Nav.Link 
                                    href="/movie/upcoming"
                                    className={`text-${isHovered.upcoming ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({upcoming: true})}
                                    onMouseLeave={() => setIsHovered({upcoming: false})} 
                                    ><HourglassSplit className="me-2"/>Upcoming
                                </Nav.Link>
                            </Nav>
                        </Collapse>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            onClick={() => setIsOpened({tv: !isOpened.tv})}
                            aria-controls="tv-series-menu"
                            aria-expanded={isOpened.tv}
                            className="d-flex align-items-center gap-3"
                        >
                            <TvFill size={24}/>TV Series{isOpened.tv ? <ChevronDown/> : <ChevronRight />}
                        </Nav.Link>
                        <Collapse in={isOpened.tv}>
                            <Nav id="tv-series-menu" className="flex-column ps-4 gap-3 text-secondary" style={{ fontSize: "14px" }}>
                                <Nav.Link 
                                    href="/tv/popular" 
                                    className={`text-${isHovered.popularTV ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({popularTV: true})}
                                    onMouseLeave={() => setIsHovered({popularTV: false})}
                                    ><Fire className="me-2"/>Popular
                                </Nav.Link>
                                <Nav.Link 
                                    href="/tv/top-rated" 
                                    className={`text-${isHovered.topRatedTV ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({topRatedTV: true})}
                                    onMouseLeave={() => setIsHovered({topRatedTV: false})}
                                    ><Stars className="me-2"/>Top Rated
                                </Nav.Link>
                            </Nav>
                        </Collapse>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            onClick={() => setIsOpened({people: !isOpened.people})}
                            aria-controls="people-menu"
                            aria-expanded={isOpened.people}
                            className="d-flex align-items-center gap-3"
                        >
                            <People size={24}/>People{isOpened.people ? <ChevronDown/> : <ChevronRight />}
                        </Nav.Link>
                        <Collapse in={isOpened.people}>
                            <Nav id="people-menu" className="flex-column ps-4 gap-3 text-secondary" style={{ fontSize: "14px" }}>
                                <Nav.Link 
                                    href="/people/popular"
                                    className={`text-${isHovered.popularPeople ? "light" : "secondary"}`} 
                                    onMouseEnter={() => setIsHovered({popularPeople: true})}
                                    onMouseLeave={() => setIsHovered({popularPeople: false})}
                                    ><Fire className="me-2"/>Popular
                                </Nav.Link>
                            </Nav>
                        </Collapse>
                    </Nav.Item>
                    <hr className="bg-light"/>
                </Nav>
                <p className="text-light mt-auto position-absolute bottom-0 bg-black w-75 pt-4" style={{ fontSize: "12px" }}><CCircle /> {new Date().getFullYear()} TaufikIsmail</p>
        </Navbar>
    )
}

export default Navigation;