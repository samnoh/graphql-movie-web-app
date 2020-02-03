import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_MOVIE } from 'apollo';

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id } });

    if (loading) return 'Loading';

    if (error) return 'Error!';

    if (data && data.movie) {
        const { medium_cover_image, title, language, rating, description_intro } = data.movie;

        return (
            <ul>
                <li>
                    <img src={medium_cover_image} alt={`${title}'s poster`} />
                </li>
                <li>{title}</li>
                <li>{language}</li>
                <li>{rating}</li>
                <li>{description_intro}</li>
            </ul>
        );
    }
};

export default Detail;
