import react from "react";
import propTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({title,year,summary,poster,genres}){
    return (
        <div className='movie__data'>
            <Link to={{pathname:'/movie-detail', state:{year, title, summary, poster, genres}}}>
                <img src={poster} alt={title} title={title}></img>
                <Background />
                <Info title={title} year={year} summary={summary} genre={genres} />
            </Link>
        </div>
    );
}

function Info(info){
    return(
        <div className="movie__info">
            <h3 className='movie__title'>{info.title}<span className="movie__year">{info.year}</span></h3>
            <ul className='movie__genres'>
                {info.genre.map((genre_info, index)=>{
                    return <li key={index} className='movie__genre'>{genre_info}</li>;
                })}
                </ul>
            <p className='movie__summary'>{info.summary.slice(0,180)}...</p>
        </div>
    )
}

function Background(){
    return(
        <div className="movie__background"></div>
    )
}

Movie.propTypes={
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;