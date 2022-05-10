import axios from 'axios'

const BASE_PATH = 'https://rickandmortyapi.com/api'

export type Character = {
  id: number
  name: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  image: string
  species: string
  type: string
  status: 'Alive' | 'Dead' | 'unknown'
  episode: Array<string>
  location: {
    name: string
    url: string
  }
}

type GetCharacters = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Array<Character> | []
}

export const getCharacters = (page: number = 1): Promise<GetCharacters> => {
  return axios.get(`${BASE_PATH}/character`, {
    params: { page }
  }).then(response => response.data)
}
