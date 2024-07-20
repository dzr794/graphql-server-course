import db from "./_db.js";
import { createGameInput, createAuthorInput, createReviewInput } from "./types";

export const resolvers = {
  Query: {
    games() {
      return db.games
    },
    authors() {
      return db.authors
    },
    reviews() {
      return db.reviews
    },
    
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    },
  },

  Game: {
    reviews(game) {
      return db.reviews.filter((review) => review.game_id === game.id)
    },
  },

  Author: {
    reviews(author) {
      return db.reviews.filter((review) => review.author_id === author.id)
    },
  },

  Review: {
    game(review) {
      return db.games.find((game) => game.id === review.game_id)
    },
    author(review) {
      return db.authors.find((author) => author.id === review.author_id)
    },
  },

  Mutation: {
    createGame(_, args:createGameInput) {
      const game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)
      return game
    },
    deleteGame(_, args) {
      const deletedGame = db.games.find((game) => game.id === args.id)
      db.games = db.games.filter((game) => game.id !== args.id)
      return deletedGame
    },
    updateGame(_, args) {
      const game = db.games.find((game) => game.id === args.id)
      Object.assign(game, args)
      return game
    },

    createAuthor(_, args:createAuthorInput) {
      const author = {
        ...args.author,
        id: Math.floor(Math.random() * 10000).toString()
      }

      db.authors.push(author)
      return author
    },
    updateAuthor(_, args) {
      const author = db.authors.find((author) => author.id === args.id)
      Object.assign(author, args)
      return author
    },
    deleteAuthor(_, args) {
      const deletedAuthor = db.authors.find((author) => author.id === args.id)
      db.authors = db.authors.filter((author) => author.id !== args.id)
      return deletedAuthor
    },

    createReview(_, args:createReviewInput) {
      const review = {
        ...args.review,
        id: Math.floor(Math.random() * 10000).toString()
      }

      db.reviews.push(review)
      return review
    },
    updateReview(_, args) {
      const review = db.reviews.find((review) => review.id === args.id)
      Object.assign(review, args)
      return review
    },
    deleteReview(_, args) {
      const deletedReview = db.reviews.find((review) => review.id === args.id)
      db.reviews = db.reviews.filter((review) => review.id !== args.id)
      return deletedReview
    },

  },
  
}