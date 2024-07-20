export type Game = {
  id: string,
  title: string,
  platform: string[],
}

export type createGameInput = {
  game: {
    title: string,
    platform: string[],
  }
}

export type editGameInput = {
  id: string,
  edits: {
    title?: string,
    platform?: string[],
  }
}