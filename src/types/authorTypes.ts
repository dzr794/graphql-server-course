export type Author = {
  id: string,
  name: string,
  verified?: boolean,
}

export type createAuthorInput = {
  author: {
    name: string,
  }
}

export type editAuthorInput = {
  author: { 
    name?: string,
    verified?: boolean,
  }
}