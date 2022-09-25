import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from '../../Components/Header/Header';
import './detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Detail = () => {

    const { id } = useParams();
    const [content, setContent] = useState([]);
    const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b6b3f2a4920686174468d07b7ef4d18e`)
        .then((response) => {
          console.log(response.data)
          setContent(response.data)
        })
    },[]);

    return (
        <section>

            <Header />
            
            <div className="banner" style={{backgroundImage: `url(${BACKDROP_URL+content.backdrop_path || POSTER_URL+content.poster_path})`}}></div>
            <div className="movie-content container">
                <div className="movie-content__poster">
                    <div className="movie-content__poster__img" style={{backgroundImage: `url(${POSTER_URL+content.poster_path || BACKDROP_URL+content.backdrop_path})`}}></div>
                </div>
                <div className="movie-content__info">
                    <div className="title">
                        <h2>{content.original_title || content.title}</h2>
                    </div>
                    <div className="genres">
                        {
                            content.genres && content.genres.slice(0.5).map((genre, i) => (
                                <span key={i} className="genres__item">{genre.name}</span>
                            ))
                        }
                    </div>
                    <div className="overview">
                        <p>{content.overview}</p>
                    </div>
                    <div className="infos">
                        <div className="infos__item">
                            <FontAwesomeIcon icon={solid("calendar-days")} />
                            <p>{content.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Detail;