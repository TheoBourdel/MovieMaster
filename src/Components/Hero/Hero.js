import React, { useState } from "react";
import searchIcon from '../../assets/search.svg';
import './hero.scss';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const Hero = () => {

    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('find a movie')

    const handleChange = (event) => {
        console.log(event)
        setSearch(event.target.value)
    }

    const getMovie = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b6b3f2a4920686174468d07b7ef4d18e&query=${search}`)
        .then((response) => {
          console.log(response)
          setMovie(response.data.results)
        })
      }

    const IMG_URL = 'https://image.tmdb.org/t/p/w300';

    let navigate = useNavigate();
    let {title} = useParams();



    return (
        <div className="hero">

            <section className="hero-wrap">
                <h1>MovieMaster</h1>
                <p>On this site you can find information about more than <span>807,742</span> films.<br />You just have to write the name of the movie you are looking for in the search bar below.</p>
                <form onSubmit={getMovie}>
                    <button type='submit'>
                        <img src={searchIcon} alt='search icon' />
                    </button>
                    <input type='text' placeholder="Search Movie" onChange={handleChange} />
                </form>
            </section>
            
            <section className="movies-wrap">
                {
                    movie.map((value,index)=>{
                        return (
                            <div className='card' key={value.id} onClick={() => {
                                navigate(`/detail/${value.id}`);
                            }}>
                                <img key={index} src={`${IMG_URL+value.poster_path}`} alt={value.original_title} />
                            </div>
                        )
                    })
                }
            </section>
                   
        </div>
    )
}

export default Hero;