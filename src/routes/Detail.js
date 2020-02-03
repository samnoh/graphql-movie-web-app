import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_MOVIE } from 'apollo';

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id } });

    if (loading) return 'Loading';

    if (error) return 'Error!';

    if (data && data.movie) return data.movie.title;
};

export default Detail;
