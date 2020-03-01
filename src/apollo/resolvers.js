// local state

export const resolvers = {
    Movie: {
        isLiked() {
            return false;
        }
    },
    Mutation: {
        toggleLikeMovie(rootValue, args, context) {
            const { id, isLiked } = args;
            const { cache } = context;

            cache.writeData({
                id: `Movie:${id}`,
                data: {
                    isLiked: !isLiked
                }
            });
        }
    }
};
