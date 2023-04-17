import React from "react";
import { Image, Figure } from "react-bootstrap";
const TMDBLogo = '../../images/tmdb.svg'

const BASE_IMGURL = process.env.REACT_APP_BASEIMGURL

const ResultList = ({ data }) => {
    return data.map((item) => {
        return (
            <Figure as="a" href={`/detail/${item.media_type}/${item.id}`} className="bg-black mb-2 rounded overflow-hidden d-flex position-relative text-decoration-none" style={{ minHeight: "100px" }}>
                <Image src={(item.profile_path  === null ) || (item.poster_path  === null ) ? TMDBLogo : `${BASE_IMGURL}/${item.media_type === "person" ? item.profile_path : item.poster_path}`} width={120} style={{ objectFit: "cover" }}/>
                <Figure.Caption className="text-light ps-3 pt-3">
                <h6>
                    {item.media_type === "movie" ? item.title : 
                    item.media_type === "tv" ? item.name :
                    item.media_type === "person" ? item.original_name : null}
                </h6>
                <p className="text-secondary fw-bold">
                    {item.media_type === "movie" ? item.release_date : 
                    item.media_type === "tv" ? item.first_air_date :
                    item.media_type === "person" ? item.birthday : null}
                </p>
                <p style={{ fontSize: '12px' }}>
                    { item.overview }
                </p>
                </Figure.Caption>
            </Figure>
        )
    })
}

export default ResultList