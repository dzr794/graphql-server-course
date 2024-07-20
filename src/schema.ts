// int, float, string, boolean, ID
export const typeDefs:string = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!]
  }

  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!]
  }


  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!,
    author: Author!,
    game_id: String!,
    author_id: String!,
  }


  type Query {
    games: [Game],
    authors: [Author],
    reviews: [Review],

    game(id: ID!): Game,
    author(id: ID!): Author,
    review(id: ID!): Review,
  }

  type Mutation {
    
    createGame( game: createGameInput ): Game,
    updateGame(id: ID!, edits: editGameInput): Game,
    deleteGame(id: ID!): Game,

    createAuthor( author: createAuthorInput ): Author,
    updateAuthor(id: ID!, edits: editAuthorInput): Author,
    deleteAuthor(id: ID!): Author,

    createReview( review: createReviewInput ): Review,
    updateReview(id: ID!, edits: editReviewInput): Review,
    deleteReview(id: ID!): Review,

  },

  input createGameInput {
    title: String!,
    platform: [String!]!,
  }

  input editGameInput {
    title: String,
    platform: [String!],
  }

  input createAuthorInput {
    name: String!,
  }

  input editAuthorInput {
    name: String,
    verified: Boolean,
  }

  input createReviewInput {
    rating: Int!,
    content: String!,
    game_id: String!,
    author_id: String!,
  }

  input editReviewInput {
    rating: Int,
    content: String,
    game_id: String,
    author_id: String,
  }
`;

