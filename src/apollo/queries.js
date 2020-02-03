import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

export const GET_MOVIE = gql`
    query geMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;
