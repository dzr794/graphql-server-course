export type Review = {
  id: string,
  rating: number,
  content: string,
  author_id: string,
  game_id: string,
}

export type createReviewInput = {
  review: {
    rating: number,
    content: string,
    game_id: string,
    author_id: string,
  }
}

export type editReviewInput = {
  id: string,
  edits: {
    rating?: number,
    content?: string,
    game_id?: string,
    author_id?: string,
  }
}