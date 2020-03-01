import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { TOGGLE_LIKE_MOVIE } from 'apollo';

const Movie = ({ id, title, medium_cover_image, isLiked }) => {
    const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
        variables: { id: parseInt(id), isLiked }
    });

    return (
        <div>
            <Link to={`/${id}`}>
                <img src={medium_cover_image} alt={`${title}'s poster`} />
            </Link>
            <button onClick={toggleLikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
        </div>
    );
};

export default Movie;
