import { Game, Author, Review } from "./types";


let games:Game[] = [
  { id: '1', title: 'Zelda Tears of the Kigdom', platform: ['Switch'] },
  { id: '2', title: 'Elden Ring', platform: ['Steam', 'PS5', 'XBox'] },
  { id: '3', title: 'HellDiver 2', platform: ['Steam', 'PS5'] },
  { id: '4', title: 'Mario Kart', platform: ['Switch'] },
  { id: '5', title: 'Party Animals', platform: ['Steam'] },
]

let authors:Author[] = [
  { id: '1', name: 'dante', verified: true },
  { id: '2', name: 'ashenOne', verified: true },
  { id: '3', name: 'ElMocho', verified: false },
]

let reviews:Review[] = [
  { id: '1', 
    rating: 1, 
    content: 'No pude pasar el tutorial, el juego es muy difícil, MI MI MI', 
    author_id: '3', 
    game_id: '2' 
  },

  { id: '2', 
    rating: 6, 
    content: 'lorem', 
    author_id: '1', 
    game_id: '4' 
  },

  { id: '3', 
    rating: 10, 
    content: 'Me encanta Nintendo', 
    author_id: '3', 
    game_id: '1' 
  },

  { id: '4', 
    rating: 5, 
    content: 'lorem', 
    author_id: '2', 
    game_id: '3' 
  },

  { id: '5', 
    rating: 10, 
    content: 'lorem', 
    author_id: '1', 
    game_id: '2' 
  },

  { id: '6', 
    rating: 5, 
    content: 'lorem', 
    author_id: '2', 
    game_id: '4' 
  },

  { id: '7', 
    rating: 8, 
    content: 'lorem', 
    author_id: '1', 
    game_id: '2' 
  },

]

export default { games, authors, reviews }