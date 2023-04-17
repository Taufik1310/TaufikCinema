import React, { useEffect, useState } from 'react';
import { Button, Container, Image } from "react-bootstrap";
import Main from '../layouts/Main';
import { useParams } from 'react-router-dom';
import { getDetail } from '../Api';
const TMDBLogo = '../../images/tmdb.svg'

const Detail = () => {
    const BASEIMGURL = process.env.REACT_APP_BASEIMGURL
    const { media, id } = useParams()
    const [data, setData] = useState([])
    const [item, setItem] = useState({
        backdrop_path: "",
        poster_path: "",
        name: "anonymous",
        tagline: "",
        description: "",
        genres: [],
        companies: [],
        birth: "00-00-0000",
        runtime: 0,
        popularity: 0,
        vote_average: 0,
    })

    useEffect(() => {
        getDetail(media, id).then((result) => {
           setData(result)
        })
        
    }, [media, id])

    useEffect(() => {
        if (media === "movie") {
            setItem({
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                name: data.title,
                tagline: data.tagline,
                description: data.overview,
                genres: data.genres,
                companies: data.production_companies,
                birth: data.release_date,
                runtime: data.runtime,
                popularity: data.popularity,
                vote_average: data.vote_average,
            })
        } else if (media === "tv") {
            setItem({
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                name: data.name,
                tagline: data.tagline,
                description: data.overview,
                genres: data.genres,
                companies: data.production_companies,
                birth: data.first_air_date,
                runtime: data.number_of_episodes,
                popularity: data.popularity,
                vote_average: data.vote_average,
            })
        } else if (media === "person") {
            setItem({
                backdrop_path: data.profile_path,
                poster_path: data.profile_path,
                name: data.name,
                description: data.biography,
                birth: data.birthday,
                popularity: data.popularity,
            })
        }
    }, [data, media])

    const Genres = ({ genres }) => {
        return genres.map((genre) => {
            return (
                <>
                    <Button className='border border-success border-2 text-success fw-bold bg-transparent me-2 btn-sm' style={{ fontSize: "12px" }}>{genre.name}</Button>
                </>
            )
        })
    }

    const Companies = ({ companies }) => {
        return companies.map((company, index) => {
            return (
                <>
                    <span className='fw-medium me-1' style={{ fontSize: "12px" }}>
                        {company.name}
                        {index < companies.length - 1 ? "," : ""}
                    </span>
                </>
            )
        })
    }

    return (
        <Main title={item.name}>
            <Container className='position-relative vh-100 w-100 d-flex justify-content-center align-items-start'>
                <div
                    className='position-fixed top-0 start-0 bottom-0 end-0'
                    style={{ 
                        backgroundImage: (item.backdrop_path  === null ) || (item.profile_path  === null ) ? `url(${TMDBLogo})` :`url('${BASEIMGURL}/${item.backdrop_path}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        filter: "brightness(.6)"
                    }}
                />
                <div style={{ zIndex: 3, maxWidth: '90%', minHeight: '80%', marginTop: '100px' }} className= 'position-relative d-flex flex-wrap justify-content-center bg-black bg-opacity-75'>
                    <div className='col-12 col-md-4 order-2 order-md-1'>
                        <Image src={(item.profile_path  === null ) || (item.poster_path  === null ) ? TMDBLogo : `${BASEIMGURL}/${item.poster_path}`} className='w-100 h-100' style={{ objectFit: "cover" }}/>
                    </div>
                    <div className='text-light p-4 col-12 col-md-8 order-1 order-md-2'>
                        <section className='mb-5'>
                            <h3>{item.name}</h3>
                            <h5 className='text-success'>{item.tagline}</h5>
                            <p style={{ fontSize: '14px' }}>{item.description}</p>
                            {item.genres && <Genres genres={item.genres} /> }
                            {item.companies && <p><Companies companies={item.companies} /></p> }
                        </section>
                        <section className='d-flex flex-wrap'>
                            <p className='fs-6 col-6'>{media === "person" ? "Birthday:" : "Original Release:"}<br />
                                <span className='text-success fs-3'>{item.birth}</span>
                            </p>
                            { media !== "person" && 
                            <p className='fs-6 col-6'>Running Time:<br />
                                <span className='text-success fs-3'>{item.runtime}{media === "movie" ? " Mins" : " Episodes"}</span>
                            </p> }
                            <p className='fs-6 col-6'>Popularity<br />
                                <span className='text-success fs-3'>{item.popularity}</span>
                            </p>
                            { media !== "person" && 
                            <p className='fs-6 col-6'>Vote Average<br />
                                <span className='text-success fs-3'>{item.vote_average} / 10</span>
                            </p>
                            }           
                        </section>
                    </div>
                </div>
            </Container>
        </Main>
    );
};

export default Detail;