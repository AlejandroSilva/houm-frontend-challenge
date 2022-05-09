import { createContext, useContext } from 'react'

export type NookpediaFilters = {
  name: string
}

type AppContent = {
  filters: NookpediaFilters
  filterByName: (name: string) => void
}

// @ts-ignore // we don't need to pass the default value as isn't used outside a Provider
export const AppContext = createContext<AppContent>()

export const useAppContext = () => useContext(AppContext)
