import { createContext, useContext } from 'react'

import { CharactersFilter } from '../api/rickandmorty'

type AppContent = {
  filters: CharactersFilter
  filterByName: (name: string) => void
  filterBySpecies: (species: string) => void
  changePage: (page: number) => void
  removeSpecies: () => void
  resetFilters: () => void
}

export const defaultFilters: CharactersFilter = {
  name: '',
  species: '',
  page: 1
}

// @ts-ignore // we don't need to pass the default value as isn't used outside a Provider
export const AppContext = createContext<AppContent>()

export const useAppContext = () => useContext(AppContext)
