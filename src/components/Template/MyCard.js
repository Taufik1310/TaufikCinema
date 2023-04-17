import React from "react"
import { Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
const TMDBLogo = '../../images/tmdb.svg'

const BASEIMGURL = process.env.REACT_APP_BASEIMGURL

const MyCard = ({ item, media  }) => {
    return (
        <Card style={{ minWidth: 180, maxWidth: 180, maxHeight:500 }} className="bg-transparent border-0 position-relative">
            <Image src={(item.profile_path  === null ) || (item.poster_path  === null ) ? TMDBLogo : `${BASEIMGURL}/${media === "person" ? item.profile_path : item.poster_path}`}  width={180} height={280} className="rounded"/>
            <Card.Body className="p-2">
                <Card.Subtitle className="text-success fw-semibold" style={{ fontSize: "14px" }}>{media === "person" ? "" : `${item.vote_average}%`}</Card.Subtitle>
                <Card.Title className="fs-6">{media === "movie" ? item.title : item.name}</Card.Title>
                <Card.Subtitle className="text-light text-opacity-50">{media === "tv" ? item.first_air_date : item.release_date}</Card.Subtitle>
            </Card.Body>
            <Link to={`/detail/${media}/${item.id}`} className="position-absolute top-0 bottom-0 start-0 end-0"/>
        </Card>
    )
}

export default MyCard