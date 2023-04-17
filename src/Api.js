import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASEURL
const APIKEY = process.env.REACT_APP_APIKEY

export const getMovieTrending = async (time) => {
    const movies = await axios.get(`${BASE_URL}/trending/movie/${time}?api_key=${APIKEY}&page=1`)
    return movies.data.results
}

export const getDiscover = async (media, name, page = 1) => {
    let results = []
    for (let i = 1; i <= page; i++) {
        const datas = await axios.get(`${BASE_URL}/${media}/${name}?api_key=${APIKEY}&page=${i}`)
        results = [...results, ...datas.data.results]
    }
    return results
}


export const getDetail = async (media, id) => {
    const data = await axios.get(`${BASE_URL}/${media}/${id}?api_key=${APIKEY}&page=1`)
    return data.data
}

export const getSearching = async (key) => {
    const datas = await axios.get(`${BASE_URL}/search/multi?api_key=${APIKEY}&query=${key}&page=1`)
    return datas.data.results
}