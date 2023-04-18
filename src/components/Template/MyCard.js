import React from "react"
import { Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
const TMDBLogo = '../../images/tmdb.svg'

const BASEIMGURL = process.env.REACT_APP_BASEIMGURL

const MyCard = ({ item, media  }) => {
    return (
        <Card 
            className="bg-transparent border-0"
        >
            <Image 
                src={(item.profile_path  === null ) || (item.poster_path  === null ) ? TMDBLogo : `${BASEIMGURL}/${media === "person" ? item.profile_path : item.poster_path}`}  
                height={240} 
                className="rounded" 
                style={{ objectFit: 'cover' }}
            />
            <Card.Body 
                className="p-2"
            >
                <Card.Subtitle 
                    className="text-success fw-semibold" 
                    style={{ fontSize: '12px'}}
                >
                    {media === "person" ? "" : `${item.vote_average}%`}
                </Card.Subtitle>
                <Card.Title 
                    style={{ fontSize: '14px' }}
                >
                    {media === "movie" ? item.title : item.name}
                </Card.Title>
                <Card.Subtitle 
                    className="text-light text-opacity-50" 
                    style={{ fontSize: '13px' }}
                >
                    {media === "tv" ? item.first_air_date : item.release_date}
                </Card.Subtitle>
            </Card.Body>
            <Link 
                to={`/detail/${media}/${item.id}`} 
                className="position-absolute top-0 bottom-0 start-0 end-0"
            />
        </Card>
    )
}

export default MyCard