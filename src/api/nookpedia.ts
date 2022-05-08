const API_KEY = 'c9415c39-f928-4d3f-b57a-8e3d45438189'
// const VILLAGERS_ENDPOINT = 'https://api.nookipedia.com/villagers?species=cow'
const ENDPOINT = 'https://api.nookipedia.com/villagers'

// ToDo: complete this
export type Villager = {
  name: string
  gender: 'Female' | 'Male'
  image_url: string
}

export type Villagers = Array<Villager>

export const getVillagers = (): Promise<Villagers> => (
  fetch(ENDPOINT, {
    headers: {'X-API-KEY': API_KEY}
  }).then(response => response.json())
)
