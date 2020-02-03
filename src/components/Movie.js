import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, medium_cover_image }) => {
    return (
        <Link to={`/${id}`}>
            <img src={medium_cover_image} alt={`${title}'s poster`} />
        </Link>
    );
};

export default Movie;
