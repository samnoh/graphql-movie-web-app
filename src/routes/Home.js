import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_MOVIES } from 'apollo';
import Movie from 'components/Movie';

const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) return 'loading...';

    if (error) return 'Error!';

    if (data && data.movies) return data.movies.map(movie => <Movie key={movie.id} {...movie} />);
};

export default Home;
