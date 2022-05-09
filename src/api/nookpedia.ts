import axios from 'axios'

import { NookpediaFilters } from '../utils/appContext'

const API_KEY = 'c9415c39-f928-4d3f-b57a-8e3d45438189'
// const VILLAGERS_ENDPOINT = 'https://api.nookipedia.com/villagers?species=cow'
const ENDPOINT = 'https://api.nookipedia.com/villagers'

export type Villager = {
  name: string
  gender: 'Female' | 'Male'
  image_url: string
  species: string
  personality: string
  quote?: string
  birthday_day: string
  birthday_month: string
  sign: string
}

export type Villagers = Array<Villager>

export const getVillagers = (filters: NookpediaFilters): Promise<Villagers> => (
  axios.get(ENDPOINT, {
    headers: {
      'X-API-KEY': API_KEY
    },
    params: {
      thumbsize: 100,
      ...filters
    }
  }).then(response => response.data)
)
