import { createContext, useContext } from 'react'

export type NookpediaFilters = {
  name: string
  species: string
  personality: string
}

type AppContent = {
  filters: NookpediaFilters
  filterBy: (filters: NookpediaFilters) => void
  filterBySpecies: (species: string) => void
  filterByPersonality: (personality: string) => void
  removeSpecies: () => void
  removePersonality: () => void
  resetFilters: () => void
}

export const defaultFilters: NookpediaFilters = {
  name: '',
  species: '',
  personality: ''
}

// @ts-ignore // we don't need to pass the default value as isn't used outside a Provider
export const AppContext = createContext<AppContent>()

export const useAppContext = () => useContext(AppContext)
