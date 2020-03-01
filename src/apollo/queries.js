import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
            isLiked @client
        }
    }
`;

export const GET_MOVIE = gql`
    query geMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_intro
            isLiked @client
        }
        suggestions(id: $id) {
            id
            title
            medium_cover_image
        }
    }
`;

export const TOGGLE_LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;
