import react from 'react';
import propTypes from 'prop-types';
import "./Movie.css";

function Movie({title,year,summary,poster}){
    return (
        <div className='movie__data'>
            <img src={poster} alt={title} title={title}></img>
            <h3 className='movie__title'>{title}</h3>
            <h5 className='movie__year'>{year}</h5>
            <p className='movie__summary'>{summary}</p>
        </div>
    );
}

Movie.propTypes={
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
};

export default Movie;